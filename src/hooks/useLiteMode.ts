// hooks/useLiteMode.ts

import { useState, useEffect } from "react";

export const useLiteMode = () => {
  const [liteMode, setLiteMode] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve initial value from local storage
    const savedLiteMode = localStorage.getItem("LiteMode");
    if (savedLiteMode !== null) {
      setLiteMode(JSON.parse(savedLiteMode));
    }

    // Function to handle storage change
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "LiteMode") {
        const newValue = event.newValue ? JSON.parse(event.newValue) : false;
        setLiteMode(newValue);
      }
    };

    // Add event listener for storage change
    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleLiteMode = () => {
    const newValue = !liteMode;
    setLiteMode(newValue);
    localStorage.setItem("LiteMode", JSON.stringify(newValue));
  };

  return { liteMode, toggleLiteMode };
};
