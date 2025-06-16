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
  const menuItems = [];
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
