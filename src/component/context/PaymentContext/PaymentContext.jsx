import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentItems, setPaymentItems] = useState(() => {
    const storedPayment = localStorage.getItem("paymentItems");
    return storedPayment ? JSON.parse(storedPayment) : [];
  });

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiration: "",
    cvv: "",
  });

  const handleAddCard = (e) => {
    e.preventDefault();
    if (card.name && card.number && card.expiration && card.cvv) {
      const newCard = {
        id: Date.now(),
        name: card.name,
        number: card.number,
        expiration: card.expiration,
        cvv: card.cvv,
        type: "VISA",
      };
      setPaymentItems((prev) => [...prev, newCard]);
      setCard({ name: "", number: "", expiration: "", cvv: "" });
      setShowAdd(false);
    }
  };

  const removeCard = (cardId) => {
    paymentItems((prev) => prev.filter((c) => c.id !== cardId));
    toast.error("The Card Is Remove");
  };

  const clearPayments = () => {
    setPaymentItems([]);
    toast.error("All payments are removed");
  };

  // Save to localStorage every time paymentItems changes
  useEffect(() => {
    localStorage.setItem("paymentItems", JSON.stringify(paymentItems));
  }, [paymentItems]);

  return (
    <PaymentContext.Provider
      value={{
        paymentItems,
        handleAddCard,
        removeCard,
        clearPayments,
        card,
        setCard,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;
