import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { ModalProvider } from "./component/context/ModalContext.jsx";
import { AppProvider } from "./component/context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AppProvider>
  </React.StrictMode>
);
