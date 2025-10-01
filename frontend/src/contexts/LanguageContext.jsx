import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get saved language from localStorage or default to Turkish
    return localStorage.getItem('silvion-language') || 'tr';
  });

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('silvion-language', newLanguage);
  };

  useEffect(() => {
    // Save language to localStorage when it changes
    localStorage.setItem('silvion-language', language);
  }, [language]);

  const value = {
    language,
    changeLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};