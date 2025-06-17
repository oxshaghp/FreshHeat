import { createContext, useMemo, useState } from "react";
import useCartContext from "../CartContext/UseCartContext";

const CheckOutContext = createContext();

export const CheckOutContextProvider = ({ children }) => {
  const { cartItems } = useCartContext();
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromoCode, setAppliedPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const discount = useMemo(() => {
    switch (appliedPromoCode.toUpperCase()) {
      case "DISCOUNT10":
        return total * 0.1;
      case "DISCOUNT50":
        return total * 0.5;
      default:
        return 0;
    }
  }, [appliedPromoCode, total]);

  const finalTotal = useMemo(() => total - discount, [total, discount]);

  const handlePromoCode = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === "DISCOUNT10") {
      setAppliedPromoCode(code);
      setPromoMessage("Promo code applied! 10% discount.");
    } else if (code === "DISCOUNT50") {
      setAppliedPromoCode(code);
      setPromoMessage("Promo code applied! 50% discount.");
    } else {
      setAppliedPromoCode("");
      setPromoMessage("Invalid promo code.");
    }
  };
  return (
    <CheckOutContext.Provider
      value={{
        total,
        discount,
        finalTotal,
        promoCode,
        setPromoCode,
        appliedPromoCode,
        setAppliedPromoCode,
        promoMessage,
        setPromoMessage,
        handlePromoCode,
      }}
    >
      {children}
    </CheckOutContext.Provider>
  );
};

export default CheckOutContext;
