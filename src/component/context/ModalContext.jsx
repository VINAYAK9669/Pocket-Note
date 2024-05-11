/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";

// Create the context
const ModalContext = createContext();

// Provider component
export const ModalProvider = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

  const value = { openName, open, close };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;
