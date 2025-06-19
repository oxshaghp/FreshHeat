import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db, auth } from "/src/Config/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentItems, setPaymentItems] = useState([]);
  const [user, setUser] = useState(null);
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiration: "",
    cvv: "",
  });

  // Listen for auth state changes and load paymentItems
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const localData = localStorage.getItem(
          `paymentItems_${currentUser.uid}`
        );
        if (localData) {
          setPaymentItems(JSON.parse(localData));
        } else {
          const paymentRef = doc(db, "users", currentUser.uid);
          const paymentSnap = await getDoc(paymentRef);
          if (paymentSnap.exists() && paymentSnap.data().paymentItems) {
            setPaymentItems(paymentSnap.data().paymentItems);
          }
        }
      } else {
        // If not logged in, fallback to generic localStorage
        const storedPayment = localStorage.getItem("paymentItems");
        setPaymentItems(storedPayment ? JSON.parse(storedPayment) : []);
      }
    });
    return () => unsubscribe();
  }, []);

  // Save to Firestore and localStorage when paymentItems or user changes
  useEffect(() => {
    if (user) {
      const paymentRef = doc(db, "users", user.uid);
      setDoc(paymentRef, { paymentItems }, { merge: true });
      localStorage.setItem(
        `paymentItems_${user.uid}`,
        JSON.stringify(paymentItems)
      );
    } else {
      localStorage.setItem("paymentItems", JSON.stringify(paymentItems));
    }
  }, [paymentItems, user]);

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
    }
  };

  const removeCard = (cardId) => {
    setPaymentItems((prev) => prev.filter((c) => c.id !== cardId));
    toast.error("The Card Is Remove");
  };

  const clearPayments = () => {
    setPaymentItems([]);
    toast.error("All payments are removed");
  };

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
