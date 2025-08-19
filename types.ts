// Definiert die Rolle in einer Chat-Nachricht
export enum ChatMessageRole {
  USER = 'user',
  SYSTEM = 'system',
  ASSISTANT = 'assistant'
}

// Definiert eine einzelne Chat-Nachricht
export interface ChatMessage {
  id: string;
  role: ChatMessageRole;
  content: string;
  timestamp: string;
  intentResult?: IntentResult;
}

// Das Ergebnis der NLU-Verarbeitung
export interface IntentResult {
  intent: string;
  slots: Record<string, any>;
  confidence: number;
  summaryKey: string;
  summaryParams?: Record<string, any>;
  requiresConfirmation: boolean;
  action: Action;
}

// Eine ausführbare Aktion
export interface Action {
  domain: string;
  operation: string;
  parameters: Record<string, any>;
}

// Ein Eintrag im Audit-Log
export interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  intent: string;
  action: Action;
  parameters: Record<string, any>;
  result: 'SUCCESS' | 'FAILURE' | 'PENDING';
  dryRun: boolean;
  messageKey: string;
  messageParams?: Record<string, any>;
}

// Struktur für die Sicherheits-Policy
export interface Policy {
  allowed_apps: string[];
  allowed_paths: {
    read: string[];
    write: string[];
  };
  allowed_powershell_commands: string[];
  settings_uri_whitelist: string[];
}

// Aktueller Ansichtsstatus der App
export enum AppView {
  CHAT = 'chat',
  LOGS = 'logs',
  POLICIES = 'policies'
}
