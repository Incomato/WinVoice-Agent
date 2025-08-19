import React from 'react';
import type { AppView } from '../types';
import type { Language } from '../contexts/LocalizationContext';
import { TerminalIcon, FileTextIcon, ShieldIcon } from './icons';
import { useLocalization } from '../contexts/LocalizationContext';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors ${
      isActive
        ? 'bg-accent bg-opacity-20 text-accent'
        : 'text-text-secondary hover:bg-secondary hover:text-text-primary'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    <div className="w-6 h-6 mr-3" aria-hidden="true">{icon}</div>
    <span className="font-medium">{label}</span>
  </button>
);

const StatusIndicator: React.FC<{ label: string; isOnline: boolean }> = ({ label, isOnline }) => {
    const { t } = useLocalization();
    return (
        <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">{label}</span>
            <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${isOnline ? 'bg-success' : 'bg-danger'}`}></div>
                <span className={isOnline ? 'text-success' : 'text-danger'}>{isOnline ? t('sidebar.status.online') : t('sidebar.status.offline')}</span>
            </div>
        </div>
    );
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage, t } = useLocalization();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as Language);
    }

    return (
        <div className="mt-4">
             <label htmlFor="language-select" className="block text-xs font-semibold text-text-secondary uppercase mb-2">
                {t('sidebar.language')}
            </label>
            <select
                id="language-select"
                value={language}
                onChange={handleLanguageChange}
                className="w-full bg-primary border border-border-color rounded-md py-2 px-3 text-text-primary focus:ring-2 focus:ring-accent focus:outline-none"
            >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="fr">Français</option>
            </select>
        </div>
    )
}


const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const { t } = useLocalization();
  
  return (
    <div className="w-64 bg-secondary border-r border-border-color flex flex-col p-4">
      <div className="flex items-center mb-8">
        <div className="p-2 bg-accent rounded-md mr-3">
          <TerminalIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-text-primary">{t('sidebar.title')}</h1>
          <p className="text-xs text-success">{t('sidebar.subtitle')}</p>
        </div>
      </div>
      <nav className="flex-1 space-y-2">
        <NavItem
          icon={<TerminalIcon className="w-6 h-6" />}
          label={t('sidebar.nav.chat')}
          isActive={currentView === 'chat'}
          onClick={() => setView('chat' as AppView)}
        />
        <NavItem
          icon={<FileTextIcon className="w-6 h-6" />}
          label={t('sidebar.nav.logs')}
          isActive={currentView === 'logs'}
          onClick={() => setView('logs' as AppView)}
        />
        <NavItem
          icon={<ShieldIcon className="w-6 h-6" />}
          label={t('sidebar.nav.policies')}
          isActive={currentView === 'policies'}
          onClick={() => setView('policies' as AppView)}
        />
      </nav>
      <div className="mt-auto">
        <h2 className="text-xs font-semibold text-text-secondary uppercase mb-3">{t('sidebar.status.title')}</h2>
        <div className="space-y-3">
            <StatusIndicator label={t('sidebar.status.stt')} isOnline={true} />
            <StatusIndicator label={t('sidebar.status.tts')} isOnline={true} />
            <StatusIndicator label={t('sidebar.status.nlu')} isOnline={true} />
        </div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
