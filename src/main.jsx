import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./component/App.jsx";
import { CartProvider } from "./component/context/CartContext/CartContext.jsx";
import { BlogProvider } from "./component/context/BlogContext/BlogContext.jsx";
import { CheckOutContextProvider } from "./component/context/CheckOutContext/CheckOutContext.jsx";
import { PaymentProvider } from "./component/context/PaymentContext/PaymentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BlogProvider>
        <PaymentProvider>
          <CheckOutContextProvider>
            <App />
          </CheckOutContextProvider>
        </PaymentProvider>
      </BlogProvider>
    </CartProvider>
  </StrictMode>
);
