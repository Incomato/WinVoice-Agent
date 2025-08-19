import React, { useState, useEffect } from 'react';
import type { Policy } from '../types';
import { getPolicy } from '../services/mockApi';
import { useLocalization } from '../contexts/LocalizationContext';

const PolicyItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-secondary p-4 rounded-lg border border-border-color">
    <h3 className="text-lg font-semibold text-accent mb-3">{title}</h3>
    {children}
  </div>
);

const CodeBlock: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="bg-primary p-3 rounded-md text-sm text-text-secondary font-mono border border-border-color max-h-48 overflow-y-auto">
    {items.map((item, index) => <div key={index}>{item}</div>)}
  </div>
);

const PolicyEditor: React.FC = () => {
  const { t } = useLocalization();
  const [policy, setPolicy] = useState<Policy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPolicy = async () => {
      setLoading(true);
      const fetchedPolicy = await getPolicy();
      setPolicy(fetchedPolicy);
      setLoading(false);
    };
    fetchPolicy();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-text-secondary">{t('policy.loading')}</div>;
  }

  if (!policy) {
    return <div className="p-8 text-center text-danger">{t('policy.error')}</div>;
  }

  return (
    <div className="p-4 md:p-8 h-full overflow-y-auto">
      <h1 className="text-2xl font-bold text-text-primary mb-2">{t('policy.title')}</h1>
      <p className="text-text-secondary mb-6">{t('policy.description')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PolicyItem title={t('policy.allowedApps')}>
          <CodeBlock items={policy.allowed_apps} />
        </PolicyItem>

        <PolicyItem title={t('policy.allowedPowershell')}>
          <CodeBlock items={policy.allowed_powershell_commands} />
        </PolicyItem>

        <PolicyItem title={t('policy.allowedReadPaths')}>
          <CodeBlock items={policy.allowed_paths.read} />
        </PolicyItem>
        
        <PolicyItem title={t('policy.allowedWritePaths')}>
          <CodeBlock items={policy.allowed_paths.write} />
        </PolicyItem>

        <PolicyItem title={t('policy.allowedUris')}>
          <CodeBlock items={policy.settings_uri_whitelist} />
        </PolicyItem>
      </div>
    </div>
  );
};

export default PolicyEditor;
