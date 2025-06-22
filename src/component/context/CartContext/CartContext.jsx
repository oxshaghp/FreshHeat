import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "/src/Config/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import useAppContext from "../AppContext/useAppContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { currentUser } = useAppContext();

  // Effect to handle user authentication changes (login/logout)
  useEffect(() => {
    const handleAuthChange = async () => {
      if (currentUser) {
        // User is logged in
        const localCart = localStorage.getItem("localCart");
        const localCartItems = localCart ? JSON.parse(localCart) : [];

        const cartRef = doc(db, "users", currentUser.uid);
        const cartSnap = await getDoc(cartRef);
        const userCartItems =
          cartSnap.exists() && cartSnap.data().cartItems
            ? cartSnap.data().cartItems
            : [];

        // Merge local cart with user's Firestore cart
        const mergedCart = [...userCartItems];
        if (localCartItems.length > 0) {
          localCartItems.forEach((localItem) => {
            const existingItem = mergedCart.find(
              (item) => item.id === localItem.id
            );
            if (existingItem) {
              existingItem.quantity += localItem.quantity;
            } else {
              mergedCart.push(localItem);
            }
          });
          toast.success("Your cart has been merged!");
        }

        setCartItems(mergedCart);

        // Save merged cart to Firestore
        if (mergedCart.length > 0) {
          await setDoc(cartRef, { cartItems: mergedCart }, { merge: true });
        }

        // Clear local cart
        localStorage.removeItem("localCart");
      } else {
        // User is logged out, load the local cart
        const localCart = localStorage.getItem("localCart");
        if (localCart) {
          setCartItems(JSON.parse(localCart));
        } else {
          setCartItems([]);
        }
      }
    };

    handleAuthChange();
  }, [currentUser]);

  // Effect to load initial cart for guest users
  useEffect(() => {
    if (!currentUser) {
      const localCart = localStorage.getItem("localCart");
      if (localCart) {
        setCartItems(JSON.parse(localCart));
      }
    }
  }, []);

  // Effect to save cart changes
  useEffect(() => {
    if (currentUser) {
      // Save to Firestore for logged-in users
      if (cartItems.length > 0) {
        const cartRef = doc(db, "users", currentUser.uid);
        setDoc(cartRef, { cartItems }, { merge: true });
      }
    } else {
      // Save to localStorage for guest users
      localStorage.setItem("localCart", JSON.stringify(cartItems));
    }
  }, [cartItems, currentUser]);

  const AddToCart = (item) => {
    setCartItems((prev) => {
      const existedItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existedItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      toast.success("The Item Added To Cart", {
        toastId: `add-${item.id}`,
      });
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const RemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.error("The Item Has Been Removed");
  };

  const ClearCart = () => {
    setCartItems([]);
    if (currentUser) {
      const cartRef = doc(db, "users", currentUser.uid);
      setDoc(cartRef, { cartItems: [] }, { merge: true });
    }
    toast.error("The Cart Has Been Cleared");
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
        user: currentUser, // Pass user state for components that need it
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
