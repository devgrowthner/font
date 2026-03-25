import React, { createContext, useContext, useState, useCallback } from "react";

const LoaderContext = createContext();

export const useLoader = () => {
  const ctx = useContext(LoaderContext);
  if (!ctx) throw new Error("useLoader must be used within LoaderProvider");
  return ctx;
};

export const LoaderProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const showLoader = useCallback((msg = "") => {
    setMessage(msg);
    setVisible(true);
  }, []);

  const hideLoader = useCallback(() => {
    setVisible(false);
    setMessage("");
  }, []);

  return (
    <LoaderContext.Provider value={{ visible, message, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
