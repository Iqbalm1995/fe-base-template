// context/LiteModeContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtils";

interface LiteModeContextProps {
  liteMode: boolean;
  toggleLiteMode: () => void;
}

const LiteModeContext = createContext<LiteModeContextProps | undefined>(
  undefined
);

export const LiteModeProvider = ({ children }: { children: ReactNode }) => {
  const [liteMode, setLiteMode] = useState<boolean>(false);

  useEffect(() => {
    const savedLiteMode = getFromLocalStorage("LiteMode");
    if (savedLiteMode !== null) {
      setLiteMode(savedLiteMode);
    }
  }, []);

  const toggleLiteMode = () => {
    const newValue = !liteMode;
    setLiteMode(newValue);
    saveToLocalStorage("LiteMode", newValue);
  };

  return (
    <LiteModeContext.Provider value={{ liteMode, toggleLiteMode }}>
      {children}
    </LiteModeContext.Provider>
  );
};

export const useLiteMode = () => {
  const context = useContext(LiteModeContext);
  if (context === undefined) {
    throw new Error("useLiteMode must be used within a LiteModeProvider");
  }
  return context;
};
