import React, { createContext, useState, useContext, useCallback } from 'react';
import { translations } from '../localization/translations';

export type Language = 'en' | 'de' | 'it' | 'fr';

interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const getNestedValue = (obj: any, path: string): string | undefined => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = useCallback((key: string, params?: Record<string, any>): string => {
    let translation = getNestedValue(translations[language], key);

    if (!translation) {
      console.warn(`Translation key '${key}' not found for language '${language}'. Falling back to English.`);
      translation = getNestedValue(translations.en, key);
    }
    
    if (!translation) {
        return key; // Return the key itself if no translation is found anywhere
    }

    if (params) {
      Object.keys(params).forEach(paramKey => {
        translation = translation!.replace(new RegExp(`{${paramKey}}`, 'g'), params[paramKey]);
      });
    }

    return translation;
  }, [language]);

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
