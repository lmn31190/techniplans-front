import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language || navigator.userLanguage;
      setLanguage(browserLang.startsWith("fr") ? "fr" : "en");
    };

    detectLanguage();

    // 🔄 Vérifie les changements de langue toutes les 2 secondes
    const languageInterval = setInterval(() => {
      detectLanguage();
    }, 2000);

    return () => clearInterval(languageInterval);
  }, []);

  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};
