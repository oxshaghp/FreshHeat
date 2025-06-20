import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const menuItems = [
    {
      id: 1,
      name: "chicken fried rice",
      image: "../Menu/menuThumb1_1.png",
      price: 100.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "chinese pasta",
      image: "../Menu/menuThumb1_2.png",
      price: 15.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "chicken pizza",
      image: "../Menu/menuThumb1_3.png",
      price: 26.99,
      quantity: 1,
    },
    {
      id: 4,
      name: "chicken noodles",
      image: "../Menu/menuThumb1_4.png",
      price: 39.99,
      quantity: 1,
    },
    {
      id: 5,
      name: "grilled chicken",
      image: "../Menu/menuThumb1_5.png",
      price: 20.99,
      quantity: 1,
    },
    {
      id: 6,
      name: "Egg and Cucumber",
      image: "../Menu/menuThumb1_6.png",
      price: 30.99,
      quantity: 1,
    },
    {
      id: 7,
      name: "Chicken White Rice",
      image: "../Menu/menuThumb1_7.png",
      price: 40.99,
      quantity: 1,
    },
    {
      id: 8,
      name: "Spatial Barger",
      image: "../Menu/menuThumb1_8.png",
      price: 50.99,
      quantity: 1,
    },
    {
      id: 9,
      name: "Vegetables Burger",
      image: "../Menu/menuThumb1_9.png",
      price: 55.99,
      quantity: 1,
    },
    {
      id: 10,
      name: "Brief Chicken",
      image: "../Menu/menuThumb1_10.png",
      price: 80.99,
      quantity: 1,
    },
  ];

  const [cartOpen, setCartOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppContext.Provider
      value={{
        menuItems,
        cartOpen,
        setCartOpen,

        currentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
