import { createContext, useState } from "react";

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

  return (
    <AppContext.Provider
      value={{ blogs, menuItems, featuredBlogs, cartOpen, setCartOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
