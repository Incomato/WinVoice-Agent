# WinVoice Agent UI

**Author:** KI Sounds & Incomato

This project is a web-based user interface for **WinVoice**, a local-first AI agent designed to control a Windows 11 operating system through natural language commands (both voice and text). The UI is built with a strong focus on privacy, security, and full traceability of actions.

## Core Principles

*   **Local-First**: All core components, including Speech-to-Text (STT), Text-to-Speech (TTS), and Natural Language Understanding (NLU), are designed to run entirely on the local machine, ensuring data never leaves the user's device.
*   **Privacy & Security**: The agent operates under a strict, transparent security policy. No actions are performed without explicit user command, and sensitive operations require confirmation.
*   **Traceability**: Every command and resulting action is recorded in a detailed audit log, providing a clear and immutable history of the agent's operations.

## Features

### Multi-Language Interface
The entire user interface is internationalized and supports the following languages out-of-the-box:
*   English
*   German
*   Italian
*   French

Users can switch languages instantly using the dropdown in the sidebar.

### Intuitive Chat-Based Control
The primary method of interaction is a familiar chat interface. Users can type commands in natural language to control their system. The agent provides clear feedback on its understanding and execution status.

### Extensive Command Library
The agent understands a wide array of commands across numerous domains, allowing for comprehensive control over the operating system. See the "Command Examples" section below for a full list.

### Action Confirmation for Safety
For actions that are sensitive or potentially destructive (e.g., deleting a file, shutting down the computer), the agent will prompt the user for confirmation through a clear and detailed modal dialog before proceeding.

### Comprehensive Audit Trail
The "Audit Logs" view provides a chronological, easy-to-read history of all intents, actions, and their outcomes (success or failure). This ensures full transparency and allows users to review the agent's activity at any time.

### Transparent Security Policy
The "Security Policy" view displays the agent's operational whitelist in a read-only format. This includes allowed applications, file paths, PowerShell commands, and system settings URIs.

## Command Examples

The mock NLU engine is configured to understand a wide variety of commands across different domains. All commands work across all supported languages (English, German, Italian, French).

### Application Management
- **Start an application**: `start Notepad`, `launch calc.exe`
- **Close an application**: `close Chrome`, `terminate notepad.exe` (confirms)

### Window Management
- **Maximize/Minimize**: `maximize window`, `minimize`
- **Snap Window**: `snap window right`, `dock window left`

### Explorer & Taskbar
- **Open Explorer**: `open explorer`
- **Show Desktop**: `show desktop`

### Browser & Web Control
- **Tab Management**: `open new tab`, `close tab` (confirms)
- **Navigation**: `open https://google.com`
- **Web Search**: `search for latest AI news`

### Mouse Control
- **Move Cursor**: `move mouse to top left`, `move mouse to center`
- **Clicks**: `click`, `double click`, `right click`
- **Scrolling**: `scroll down`, `scroll up`

### Text & Keyboard Input
- **Type Text**: `type "Hello, this is an automated message."`
- **Press Keys**: `press control a`, `press enter`

### File System Operations
- **Create Folder**: `create folder 'My Projects' on Desktop`
- **Delete File**: `delete file 'C:\Users\user\Documents\temp.txt'` (confirms)

### System Control
- **Volume**: `set volume to 75%`
- **Session**: `lock screen`, `shutdown computer` (confirms), `restart pc` (confirms)
- **Capture**: `take a screenshot`

### PowerShell Execution
- **Run Whitelisted Commands**: `show running processes` (confirms)


## Components Overview

1.  **Sidebar**: The main navigation hub. It provides access to the different views, shows the real-time status of the agent's core services (STT, TTS, NLU), and contains the language switcher.
2.  **Agent Chat**: The interactive console where users issue commands and receive feedback from the AI agent.
3.  **Audit Logs**: A tabular view of all historical actions taken by the agent.
4.  **Security Policy**: A detailed, read-only display of the agent's current security permissions and restrictions.

## How to Run

This project is a static web application with no build step required. To run it:
1.  Ensure all files are in the same directory.
2.  Serve the project root directory using a simple local web server. For example, using Python:
    ```bash
    python -m http.server
    ```
3.  Open your web browser and navigate to the local server's address (e.g., `http://localhost:8000`).

## Project Structure

```
.
├── components/
│   ├── AuditLogViewer.tsx     # View for displaying action history
│   ├── ChatInterface.tsx      # Core chat component
│   ├── ConfirmationModal.tsx  # Modal for sensitive action confirmation
│   ├── icons.tsx              # SVG icon components
│   ├── PolicyEditor.tsx       # View for displaying the security policy
│   └── Sidebar.tsx            # Main navigation and status sidebar
├── contexts/
│   └── LocalizationContext.tsx # React Context for language and translations
├── localization/
│   └── translations.ts        # Contains all UI strings for i18n
├── services/
│   └── mockApi.ts             # Simulates the backend NLU and action execution
├── App.tsx                    # Main application component, router
├── constants.ts               # Mock data (logs, policy)
├── index.html                 # The single HTML entry point
├── index.tsx                  # Main React render entry point
├── metadata.json              # Project metadata
└── types.ts                   # TypeScript type definitions for the app
```