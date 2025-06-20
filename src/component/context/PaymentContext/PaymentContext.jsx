import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "/src/Config/Firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentItems, setPaymentItems] = useState([]);
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiration: "",
    cvv: "",
  });

  // Fetch paymentItems from Firestore
  const fetchPaymentItems = async () => {
    const user = auth.currentUser;
    if (!user) return;
    try {
      const paymentItemsRef = collection(db, "users", user.uid, "paymentItems");
      const snapshot = await getDocs(paymentItemsRef);
      const savedPaymentItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPaymentItems(savedPaymentItems);
      localStorage.setItem("paymentItems", JSON.stringify(savedPaymentItems));
    } catch (error) {
      console.error("Error fetching paymentItems:", error);
    }
  };

  // On mount, try to load from localStorage first for fast access
  useEffect(() => {
    const storedPayment = localStorage.getItem("paymentItems");
    setPaymentItems(storedPayment ? JSON.parse(storedPayment) : []);
    fetchPaymentItems(); // Always sync with Firestore after
  }, []);

  // Add card to Firestore and localStorage
  const handleAddCard = async (e) => {
    if (e) e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      toast.error("You must be logged in to add a card.");
      return;
    }
    if (card.name && card.number && card.expiration && card.cvv) {
      const newCard = {
        name: card.name,
        number: card.number,
        expiration: card.expiration,
        cvv: card.cvv,
        type: "VISA",
      };
      try {
        const paymentItemsRef = collection(db, "users", user.uid, "paymentItems");
        const docRef = await addDoc(paymentItemsRef, newCard);
        const newCardWithId = { ...newCard, id: docRef.id };
        const updatedPaymentItems = [...paymentItems, newCardWithId];
        setPaymentItems(updatedPaymentItems);
        localStorage.setItem("paymentItems", JSON.stringify(updatedPaymentItems));
        toast.success("Card added successfully!");
        setCard({ name: "", number: "", expiration: "", cvv: "" });
      } catch (error) {
        toast.error("Failed to add card.");
        console.error(error);
      }
    }
  };

  // Remove card from Firestore and localStorage
  const removeCard = async (cardId) => {
    const user = auth.currentUser;
    if (!user) return;
    try {
      const cardDocRef = doc(db, "users", user.uid, "paymentItems", cardId);
      await deleteDoc(cardDocRef);
      const updatedPaymentItems = paymentItems.filter((c) => c.id !== cardId);
      setPaymentItems(updatedPaymentItems);
      localStorage.setItem("paymentItems", JSON.stringify(updatedPaymentItems));
      toast.error("The Card Is Removed");
    } catch (error) {
      toast.error("Failed to remove card.");
      console.error(error);
    }
  };

  const clearPayments = () => {
    setPaymentItems([]);
    localStorage.setItem("paymentItems", JSON.stringify([]));
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
