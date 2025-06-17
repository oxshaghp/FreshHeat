import { createContext, useState, useMemo } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const blogs = [
    {
      id: 1,
      title: "Fast Food Frenzy a Taste of Convenience",
      image: "../Blogs/blogThumb1_1.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
    {
      id: 2,
      title: "Benefits of health and safety measures",
      image: "../Blogs/blogThumb1_2.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
    {
      id: 3,
      title: "Quick Cravings Unraveling Fast Food Delights",
      image: "../Blogs/blogThumb1_3.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
    {
      id: 4,
      title: "Fast Food Frenzy a Taste of Convenience",
      image: "../Blogs/blogThumb1_4.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
    {
      id: 5,
      title: "Benefits of health and safety measures",
      image: "../Blogs/blogThumb1_5.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
    {
      id: 6,
      title: "Quick Cravings Unraveling Fast Food Delights",
      image: "../Blogs/blogThumb1_6.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
  ];
  const featuredBlogs = blogs.slice(0, 3);
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

  // Cart and discount state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chicken Fried Rice",
      image: "../Menu/menuThumb1_1.png",
      price: 100.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Chinese Pasta",
      image: "../Menu/menuThumb1_2.png",
      price: 15.99,
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromoCode, setAppliedPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  // Calculate total and discount
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

  // Handle promo code application
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
    <AppContext.Provider
      value={{
        blogs,
        menuItems,
        featuredBlogs,
        cartOpen,
        setCartOpen,
        // Cart and discount related values
        cartItems,
        setCartItems,
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
    </AppContext.Provider>
  );
};

export default AppContext;
