import React from "react";
import Hero from "./Hero/Hero";
import PopularFood from "./PopularFood/PopularFood";
import Offer from "./Offer/Offer";
import AboutSection from "../../static/AboutSection";
import Bestselling from "./Bestselling/Bestselling";
import SpecialFood from "../../static/SpecialFood";
import ChefsSection from "./Chefs/ChefsSection";
import Testemonials from "./Testimonials/Testemonials";
import Latest from "./latestNews/Latest";
import Gallery from "../../static/Gallery";
function HomePage() {
  return (
    <div>
      <Hero />
      <PopularFood />
      <Offer />
      <AboutSection />
      <Bestselling />
      <SpecialFood />
      <ChefsSection />
      <Testemonials />
      <Latest />
      <Gallery />
    </div>
  );
}

export default HomePage;
