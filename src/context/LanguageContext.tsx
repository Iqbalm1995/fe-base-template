import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define types for context
interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const defaultLanguage = "ID"; // Default to ID

// Create context
export const LanguageContext = createContext<LanguageContextProps>({
  language: defaultLanguage,
  setLanguage: () => {},
});

// Language Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(defaultLanguage);

  useEffect(() => {
    // Get saved language from localStorage
    const savedLang = localStorage.getItem("app-lang") || defaultLanguage;
    setLanguage(savedLang);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("app-lang", lang); // Save to localStorage
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
