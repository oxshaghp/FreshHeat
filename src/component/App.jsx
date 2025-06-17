import React from "react";
import Header from "./static/Header";
import Navbar from "./static/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ChefPage from "./pages/ChefsPage/ChefPage";
import ServicesPage from "./pages/Services/ServicesPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import FoodMenu from "./pages/FoodMenu/FoodMenu";
import ShopPage from "./pages/ShopPage/ShopPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./static/Footer";
import Blog from "./pages/BlogPage/Blog";
import ChefDeteils from "./pages/ChefsPage/Chefs/ChefDeteils";
import LogIn from "./pages/LogIn/LogIn";
import Profile from "./pages/Peofile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ourStory/chef" element={<ChefPage />} />
          <Route path="/ourStory/services" element={<ServicesPage />} />
          <Route path="/ourStory/gallery" element={<GalleryPage />} />
          <Route path="/ourStory/blogs" element={<BlogPage />} />
          <Route path="/ourStory/blogs/:id" element={<Blog />} />
          <Route path="/foodMenu" element={<FoodMenu />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chef/:name" element={<ChefDeteils />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment-method" element={<PaymentMethodPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
