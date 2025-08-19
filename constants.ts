import type { AuditLogEntry, Policy } from './types';

// Mock-Daten für Audit-Logs
export const MOCK_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'log-1',
    timestamp: new Date(Date.now() - 60000 * 15).toISOString(),
    user: 'local_user',
    intent: 'app.start',
    action: { domain: 'apps', operation: 'start', parameters: { app_name: 'notepad.exe' } },
    parameters: { app_name: 'notepad.exe' },
    result: 'SUCCESS',
    dryRun: false,
    messageKey: 'api.log.app.start.success',
    messageParams: { app_name: 'notepad.exe' }
  },
  {
    id: 'log-7',
    timestamp: new Date(Date.now() - 60000 * 13).toISOString(),
    user: 'local_user',
    intent: 'explorer.open',
    action: { domain: 'explorer', operation: 'open', parameters: {} },
    parameters: {},
    result: 'SUCCESS',
    dryRun: false,
    messageKey: 'api.log.explorer.open.success',
  },
  {
    id: 'log-2',
    timestamp: new Date(Date.now() - 60000 * 12).toISOString(),
    user: 'local_user',
    intent: 'system.set_volume',
    action: { domain: 'system', operation: 'set_volume', parameters: { level: 75 } },
    parameters: { level: 75 },
    result: 'SUCCESS',
    dryRun: false,
    messageKey: 'api.log.system.set_volume.success',
    messageParams: { level: 75 }
  },
   {
    id: 'log-4',
    timestamp: new Date(Date.now() - 60000 * 10).toISOString(),
    user: 'local_user',
    intent: 'mouse.move',
    action: { domain: 'mouse', operation: 'move', parameters: { position: 'top-left' } },
    parameters: { position: 'top-left' },
    result: 'SUCCESS',
    dryRun: false,
    messageKey: 'api.log.mouse.move.success',
    messageParams: { position: 'top-left' }
  },
  {
    id: 'log-8',
    timestamp: new Date(Date.now() - 60000 * 9).toISOString(),
    user: 'local_user',
    intent: 'browser.new_tab',
    action: { domain: 'browser', operation: 'new_tab', parameters: {} },
    parameters: {},
    result: 'SUCCESS',
    dryRun: false,
    messageKey: 'api.log.browser.new_tab.success',
  },
  {
    id: 'log-5',
    timestamp: new Date(Date.now() - 60000 * 8).toISOString(),
    user: 'local_user',
    intent: 'web.search',
    action: { domain: 'web', operation: 'search', parameters: { engine: 'google', query: 'latest AI news' } },
    parameters: { query: 'latest AI news' },
    result: 'SUCCESS',
    dryRun: false,
    messageKey: 'api.log.web.search.success',
    messageParams: { query: 'latest AI news' }
  },
  {
    id: 'log-3',
    timestamp: new Date(Date.now() - 60000 * 5).toISOString(),
    user: 'local_user',
    intent: 'file.delete',
    action: { domain: 'files', operation: 'delete', parameters: { path: 'C:\\Users\\user\\Desktop\\old_file.txt' } },
    parameters: { path: 'C:\\Users\\user\\Desktop\\old_file.txt' },
    result: 'FAILURE',
    dryRun: false,
    messageKey: 'api.log.file.delete.failure',
  },
  {
    id: 'log-6',
    timestamp: new Date(Date.now() - 60000 * 1).toISOString(),
    user: 'local_user',
    intent: 'system.shutdown',
    action: { domain: 'system', operation: 'shutdown', parameters: {} },
    parameters: {},
    result: 'SUCCESS',
    dryRun: false,
    messageKey: 'api.log.system.shutdown.success',
    messageParams: {}
  },
];

// Mock-Daten für die Sicherheits-Policy
export const MOCK_POLICY: Policy = {
  allowed_apps: ['notepad.exe', 'calc.exe', 'explorer.exe', 'code.exe', 'chrome.exe'],
  allowed_paths: {
    read: ['C:\\Users\\Public\\', 'D:\\Data\\'],
    write: ['C:\\Users\\Public\\Documents\\', 'D:\\Data\\Output\\'],
  },
  allowed_powershell_commands: ['get-process', 'get-service'],
  settings_uri_whitelist: ['ms-settings:display', 'ms-settings:sound', 'ms-settings:bluetooth', 'ms-settings:network-wifi'],
};
