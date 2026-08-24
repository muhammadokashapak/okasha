import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supportedLanguages, translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLangState] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'en';
  });

  const activeLangConfig = supportedLanguages.find((l) => l.code === currentLang) || supportedLanguages[0];

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = activeLangConfig.dir || 'ltr';
    if (activeLangConfig.dir === 'rtl') {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }
    localStorage.setItem('portfolio-lang', currentLang);
  }, [currentLang, activeLangConfig]);

  const setLanguage = useCallback((langCode) => {
    if (translations[langCode]) {
      setCurrentLangState(langCode);
    }
  }, []);

  const t = useCallback((key, fallback) => {
    const langDict = translations[currentLang] || translations.en;
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return fallback || key;
  }, [currentLang]);

  const value = {
    currentLang,
    activeLangConfig,
    supportedLanguages,
    setLanguage,
    t,
    isRTL: activeLangConfig.dir === 'rtl',
    dir: activeLangConfig.dir || 'ltr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
