import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db, auth } from "/src/Config/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const cartRef = doc(db, "users", user.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists() && cartSnap.data().cartItems) {
          setCartItems(cartSnap.data().cartItems);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const cartRef = doc(db, "users", user.uid);
      setDoc(cartRef, { cartItems }, { merge: true });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const AddToCart = (item) => {
    setCartItems((prev) => {
      const exitedItem = prev.find((cartItem) => cartItem.id === item.id);
      if (exitedItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      toast.success("The Item Add To Cart", {
        toastId: `add-${item.id}`,
      });
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const RemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.error("The Item is Remove");
  };

  const ClearCart = () => {
    setCartItems([]);
    toast.error("The Cart Is Cleared");
  };

  const IncreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const DecreaseQuantity = (id) => {
    setCartItems((prev) => {
      const item = prev.find((item) => item.id === id);
      if (item.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        AddToCart,
        RemoveFromCart,
        ClearCart,
        IncreaseQuantity,
        DecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
