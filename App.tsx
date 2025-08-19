import React, { useState } from 'react';
import type { AppView } from './types';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import AuditLogViewer from './components/AuditLogViewer';
import PolicyEditor from './components/PolicyEditor';
import { LocalizationProvider } from './contexts/LocalizationContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('chat' as AppView);

  const renderContent = () => {
    switch (currentView) {
      case 'chat':
        return <ChatInterface />;
      case 'logs':
        return <AuditLogViewer />;
      case 'policies':
        return <PolicyEditor />;
      default:
        return <ChatInterface />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-primary font-sans">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      <main className="flex-1 h-screen overflow-hidden">
        {renderContent()}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LocalizationProvider>
      <AppContent />
    </LocalizationProvider>
  );
};

export default App;
