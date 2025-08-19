import React, { useState, useEffect } from 'react';
import type { AuditLogEntry } from '../types';
import { getAuditLogs } from '../services/mockApi';
import { useLocalization } from '../contexts/LocalizationContext';

const AuditLogViewer: React.FC = () => {
  const { t, language } = useLocalization();
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      const fetchedLogs = await getAuditLogs();
      setLogs(fetchedLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
      setLoading(false);
    };
    fetchLogs();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-text-secondary">{t('auditLog.loading')}</div>;
  }

  const getStatusColor = (result: string) => {
    switch (result) {
      case 'SUCCESS': return 'bg-success/20 text-success';
      case 'FAILURE': return 'bg-danger/20 text-danger';
      case 'PENDING': return 'bg-warning/20 text-warning';
      default: return 'bg-border-color text-text-secondary';
    }
  };
  
  const locale = language === 'en' ? 'en-US' : `${language}-${language.toUpperCase()}`;

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      <h1 className="text-2xl font-bold text-text-primary mb-6">{t('auditLog.title')}</h1>
      <div className="bg-secondary border border-border-color rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border-color">
            <thead className="bg-primary">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">{t('auditLog.header.timestamp')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">{t('auditLog.header.intent')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">{t('auditLog.header.action')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">{t('auditLog.header.parameters')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">{t('auditLog.header.result')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">{t('auditLog.header.details')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-color">
              {logs.map(log => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{new Date(log.timestamp).toLocaleString(locale)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary font-mono">{log.intent}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary font-mono">{`${log.action.domain}.${log.action.operation}`}</td>
                  <td className="px-6 py-4 text-sm text-text-primary font-mono truncate max-w-xs">{JSON.stringify(log.parameters)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(log.result)}`}>
                      {log.result}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary max-w-sm truncate">{t(log.messageKey, log.messageParams)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditLogViewer;
