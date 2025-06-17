import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./component/App.jsx";
import { AppProvider } from "./component/context/AppContext/AppContext.jsx";
import { CartProvider } from "./component/context/CartContext/CartContext.jsx";
import { BlogProvider } from "./component/context/BlogContext/BlogContext.jsx";
import { CheckOutContextProvider } from "./component/context/CheckOutContext/CheckOutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <CartProvider>
        <BlogProvider>
          <CheckOutContextProvider>
            <App />
          </CheckOutContextProvider>
        </BlogProvider>
      </CartProvider>
    </AppProvider>
  </StrictMode>
);
