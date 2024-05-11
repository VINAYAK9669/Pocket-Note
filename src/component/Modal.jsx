/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { cloneElement, useContext } from "react";
import { createPortal } from "react-dom";
import ModalContext, { ModalProvider } from "./context/ModalContext";
import useOutsideClick from "./hooks/useOutsideClick";

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);
  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-background-grayshade bg-opacity-50">
      <div
        className="flex md:min-h-[317px] flex-col rounded-[6px] bg-white px-4 md:px-[2rem] pt-[2rem] pb-2 shadow-lg w-[284px] md:w-[740px]"
        ref={ref}
      >
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

// The main Modal component is now just a wrapper for the provider
function Modal({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
