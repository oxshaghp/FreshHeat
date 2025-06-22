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
import { onAuthStateChanged } from "firebase/auth";

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [paymentItems, setPaymentItems] = useState([]);
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiration: "",
    cvv: "",
  });

  // Fetch paymentItems from Firestore for the given user
  const fetchPaymentItems = async (user) => {
    if (!user) {
      setPaymentItems([]);
      return;
    }
    try {
      const paymentItemsRef = collection(db, "users", user.uid, "paymentItems");
      const snapshot = await getDocs(paymentItemsRef);
      const savedPaymentItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPaymentItems(savedPaymentItems);
    } catch (error) {
      console.error("Error fetching paymentItems:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        fetchPaymentItems(user);
      } else {
        // User is signed out.
        setPaymentItems([]);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this runs only once on mount.

  // Add card to Firestore
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
        const paymentItemsRef = collection(
          db,
          "users",
          user.uid,
          "paymentItems"
        );
        const docRef = await addDoc(paymentItemsRef, newCard);
        const newCardWithId = { ...newCard, id: docRef.id };
        setPaymentItems((prevItems) => [...prevItems, newCardWithId]);

        toast.success("Card added successfully!");
        setCard({ name: "", number: "", expiration: "", cvv: "" });
      } catch (error) {
        toast.error("Failed to add card.");
        console.error(error);
      }
    }
  };

  // Remove card from Firestore
  const removeCard = async (cardId) => {
    const user = auth.currentUser;
    if (!user) return;
    try {
      const cardDocRef = doc(db, "users", user.uid, "paymentItems", cardId);
      await deleteDoc(cardDocRef);
      const updatedPaymentItems = paymentItems.filter((c) => c.id !== cardId);
      setPaymentItems(updatedPaymentItems);
      toast.error("The Card Is Removed");
    } catch (error) {
      toast.error("Failed to remove card.");
      console.error(error);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentItems,
        handleAddCard,
        removeCard,
        card,
        setCard,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;
