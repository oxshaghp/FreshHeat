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
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ourStory/chef" element={<ChefPage />} />
          <Route path="/ourStory/services" element={<ServicesPage />} />
          <Route path="/ourStory/gallery" element={<GalleryPage />} />
          <Route path="/ourStory/blog" element={<BlogPage />} />
          <Route path="/foodMenu" element={<FoodMenu />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
