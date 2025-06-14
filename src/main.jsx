import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./component/App.jsx";
import { AppProvider } from "./component/context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
