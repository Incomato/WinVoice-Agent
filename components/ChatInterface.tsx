import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage, IntentResult } from '../types';
import { ChatMessageRole } from '../types';
import { parseCommand, executeAction } from '../services/mockApi';
import ConfirmationModal from './ConfirmationModal';
import { MicIcon, SendIcon, BotIcon, UserIcon } from './icons';
import { useLocalization } from '../contexts/LocalizationContext';

// Definiert eine einzelne Chat-Nachricht-Komponente
const Message: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const isUser = message.role === ChatMessageRole.USER;
  const isSystem = message.role === ChatMessageRole.SYSTEM;
  
  const Icon = isUser ? UserIcon : BotIcon;
  const bgColor = isUser ? 'bg-accent bg-opacity-20' : 'bg-secondary';
  
  if (isSystem) {
      return (
          <div className="text-center my-4">
              <p className="text-xs text-text-secondary italic px-4 py-1 bg-secondary rounded-full inline-block">{message.content}</p>
          </div>
      )
  }

  return (
    <div className={`flex items-start gap-3 my-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && <Icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />}
      <div className={`max-w-xl p-3 rounded-lg ${isUser ? 'rounded-br-none' : 'rounded-bl-none'} ${bgColor} border border-border-color`}>
        <p className="text-text-primary whitespace-pre-wrap">{message.content}</p>
      </div>
       {isUser && <Icon className="w-6 h-6 text-text-secondary mt-1 flex-shrink-0" />}
    </div>
  );
};

// Hauptkomponente der Chat-Oberfläche
const ChatInterface: React.FC = () => {
  const { t, language } = useLocalization();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [intentToConfirm, setIntentToConfirm] = useState<IntentResult | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize with system message when t function is available
    setMessages([{
        id: 'system-init',
        role: ChatMessageRole.SYSTEM,
        content: t('chat.initialMessage'),
        timestamp: new Date().toISOString(),
    }]);
  }, [t, language]); // Rerun when language changes to re-initialize message

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (role: ChatMessageRole, content: string, intentResult?: IntentResult) => {
    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), role, content, timestamp: new Date().toISOString(), intentResult },
    ]);
  };

  const handleSend = async () => {
    if (!input.trim() || isProcessing) return;
    
    const userInput = input.trim();
    setInput('');
    addMessage(ChatMessageRole.USER, userInput);
    setIsProcessing(true);

    try {
      const result = await parseCommand(userInput);

      if ('helpKey' in result) {
         addMessage(ChatMessageRole.ASSISTANT, t(result.helpKey));
      } else if ('errorKey' in result) {
        addMessage(ChatMessageRole.ASSISTANT, t(result.errorKey));
      } else {
        const intentResult = result as IntentResult;
        const summary = t(intentResult.summaryKey, intentResult.summaryParams);
        if (intentResult.requiresConfirmation) {
          addMessage(ChatMessageRole.ASSISTANT, `${summary}\n${t('confirmationModal.areYouSure')}`);
          setIntentToConfirm(intentResult);
        } else {
          addMessage(ChatMessageRole.ASSISTANT, summary);
          const execResult = await executeAction(intentResult.action, false);
          addMessage(ChatMessageRole.ASSISTANT, t(execResult.messageKey, execResult.messageParams));
        }
      }
    } catch (e) {
      addMessage(ChatMessageRole.ASSISTANT, t('api.error.unexpected'));
    } finally {
      setIsProcessing(false);
    }
  };

  const handleConfirm = async () => {
    if (!intentToConfirm) return;

    setIsProcessing(true);
    const intent = intentToConfirm;
    setIntentToConfirm(null);
    
    addMessage(ChatMessageRole.SYSTEM, t('chat.system.confirmed'));
    const result = await executeAction(intent.action, false);
    addMessage(ChatMessageRole.ASSISTANT, t(result.messageKey, result.messageParams));
    setIsProcessing(false);
  };

  const handleCancel = () => {
    setIntentToConfirm(null);
    addMessage(ChatMessageRole.SYSTEM, t('chat.system.cancelled'));
  };

  return (
    <div className="flex flex-col h-full bg-primary">
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {messages.map((msg) => <Message key={msg.id} message={msg} />)}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 border-t border-border-color">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={isProcessing ? t('chat.processing') : t('chat.placeholder')}
            className="w-full bg-secondary border border-border-color rounded-lg py-3 pl-12 pr-20 resize-none focus:ring-2 focus:ring-accent focus:outline-none text-text-primary"
            rows={1}
            disabled={isProcessing}
          />
          <button className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-accent">
            <MicIcon className="w-6 h-6" />
          </button>
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isProcessing}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-accent text-white rounded-md p-2 disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-accent-hover transition-colors"
          >
            <SendIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <ConfirmationModal
        isOpen={!!intentToConfirm}
        intentResult={intentToConfirm}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ChatInterface;