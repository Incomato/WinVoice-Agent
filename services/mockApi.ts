
import { GoogleGenAI, Type } from "@google/genai";
import type { IntentResult, AuditLogEntry, Policy, Action } from '../types';
import { MOCK_AUDIT_LOGS, MOCK_POLICY } from '../constants';

type ParseResult = IntentResult | { errorKey: string } | { helpKey: string };

// Initialize the Google GenAI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction for the Gemini model
const systemInstruction = `You are an AI assistant for a Windows 11 voice/text control agent called WinVoice. Your task is to parse the user's command and translate it into a structured JSON object. The user can speak English, German, Italian, or French.

You must identify the user's intent and extract all necessary parameters. Based on the command, you will construct a JSON object that matches the provided schema.

Available domains and operations:
- apps:
  - start: Starts an application. (params: { app_name: string })
  - close: Closes an application. (params: { app_name: string })
- window:
  - maximize: Maximizes the active window. (params: {})
  - minimize: Minimizes the active window. (params: {})
  - snap: Docks the window to a side. (params: { direction: 'left' | 'right' })
- mouse:
  - move_corner: Moves the mouse to a corner/center. (params: { corner: 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'center' })
  - click: Performs a mouse click. (params: { button: 'left' | 'right' })
  - double_click: Performs a double click. (params: {})
  - scroll: Scrolls the view up or down. (params: { direction: 'up' | 'down' })
- input:
  - type_text: Types the given text. (params: { text: string })
  - press_keys: Simulates pressing key combinations. (params: { keys: string })
- web:
  - open_url: Opens a URL in the browser. (params: { url: string })
  - search: Searches on Google. (params: { query: string })
- browser:
  - new_tab: Opens a new browser tab. (params: {})
  - close_tab: Closes the current browser tab. (params: {})
- files:
  - delete: Deletes a file. (params: { path: string })
  - create_folder: Creates a new folder. (params: { folderName: string, location: string })
- explorer:
  - open: Opens Windows Explorer. (params: {})
- taskbar:
  - show_desktop: Shows the desktop. (params: {})
- system:
  - set_volume: Sets system volume. (params: { level: number })
  - lock_screen: Locks the computer screen. (params: {})
  - shutdown: Shuts down the computer. (params: {})
  - restart: Restarts the computer. (params: {})
  - take_screenshot: Takes a screenshot. (params: {})
- powershell:
  - execute: Executes a PowerShell command. (params: { command: string })

Some actions are sensitive and require user confirmation. Set 'requiresConfirmation' to true for these:
- app.close
- browser.close_tab
- file.delete
- system.shutdown
- system.restart
- powershell.execute

You must also generate a 'summaryKey' following the pattern 'api.summary.{domain}.{operation}' and 'summaryParams' containing the extracted values.

The 'intent' should be '{domain}.{operation}'.
The 'confidence' should be a value between 0.8 and 1.0, reflecting your certainty.

If the user asks for 'help' or similar in any supported language, return a JSON object with a single key: { "helpKey": "api.help" }.
If the user's command is ambiguous, nonsensical, or cannot be mapped to any available action, return a JSON object with a single key: { "errorKey": "api.error.unknownCommand" }.

For all other valid commands, return the full IntentResult object.
Return ONLY the JSON object.`;

// JSON schema for the expected response from the model
const responseSchema = {
    type: Type.OBJECT,
    properties: {
        intent: { type: Type.STRING },
        slots: { type: Type.OBJECT },
        confidence: { type: Type.NUMBER },
        summaryKey: { type: Type.STRING },
        summaryParams: { type: Type.OBJECT },
        requiresConfirmation: { type: Type.BOOLEAN },
        action: {
            type: Type.OBJECT,
            properties: {
                domain: { type: Type.STRING },
                operation: { type: Type.STRING },
                parameters: { type: Type.OBJECT },
            },
            required: ['domain', 'operation']
        },
        helpKey: { type: Type.STRING },
        errorKey: { type: Type.STRING },
    },
};


// Verwendet die Gemini-API, um einen Textbefehl in einen strukturierten Intent umzuwandeln.
export const parseCommand = async (command: string): Promise<ParseResult> => {
    // A quick local check for help commands to avoid an unnecessary API call.
    if (command.toLowerCase().trim().match(/^(hilfe|help|aiuto|aide)$/)) {
        return { helpKey: 'api.help' };
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: command,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.1, // Lower temperature for more deterministic results
            },
        });
        
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);

        if (result.helpKey) {
            return { helpKey: result.helpKey };
        }
        if (result.errorKey) {
            return { errorKey: result.errorKey };
        }
        if (result.intent && result.action) {
            // Ensure optional fields are present to match the type
            const intentResult: IntentResult = {
              ...result,
              summaryParams: result.summaryParams || {},
              slots: result.slots || {},
            };
            return intentResult;
        }

        // Fallback if the model returns a valid JSON but it doesn't match our expected structures
        console.warn("Model returned an unexpected JSON structure:", result);
        return { errorKey: 'api.error.unknownCommand' };
    } catch (error) {
        console.error("Error parsing command with Gemini:", error);
        // This could be an API error, network error, or JSON parsing error
        return { errorKey: 'api.error.unexpected' };
    }
};


// Simuliert die Ausführung einer Aktion
export const executeAction = async (action: Action, dryRun: boolean): Promise<{ success: boolean; messageKey: string; messageParams?: Record<string, any> }> => {
  await new Promise(resolve => setTimeout(resolve, 750)); // Simuliert Netzwerk-Latenz und Ausführungszeit

  const actionString = `${action.domain}.${action.operation}`;

  if (dryRun) {
    return {
      success: true,
      messageKey: 'api.execute.dryRun',
      messageParams: { action: actionString, params: JSON.stringify(action.parameters) }
    };
  }

  // Hier würde die eigentliche Logik zur Windows-Steuerung aufgerufen
  // Wir simulieren hier nur Erfolgs- oder Fehlschlags-Szenarien
  if (action.domain === 'apps' && action.operation === 'start' && action.parameters.app_name === 'fail.exe') {
      return {
          success: false,
          messageKey: 'api.execute.startError',
          messageParams: { app_name: action.parameters.app_name }
      }
  }

  return {
    success: true,
    messageKey: 'api.execute.success',
    messageParams: { action: actionString }
  };
};

// Ruft die gemockten Audit-Logs ab
export const getAuditLogs = async (): Promise<AuditLogEntry[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_AUDIT_LOGS;
};

// Ruft die gemockte Policy ab
export const getPolicy = async (): Promise<Policy> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return MOCK_POLICY;
};
