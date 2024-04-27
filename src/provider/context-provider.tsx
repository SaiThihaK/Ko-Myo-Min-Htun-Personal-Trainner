"use client";

import React, { createContext, useContext, useState } from "react";

// Creating the context with default values
const ToggleContext = createContext({
  toggle: false,
  setToggle: (state: boolean) => {},
});

export function useToggle() {
  return useContext(ToggleContext);
}

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
