import React from "react";
import Hero from "./Hero/Hero";
import PopularFood from "./PopularFood/PopularFood";
import Offer from "./Offer/Offer";
import AboutSection from "/src/component/static/AboutSection";
import Bestselling from "./Bestselling/Bestselling";
import SpecialFood from "/src/component/static/SpecialFood";
import ChefsSection from "./Chefs/ChefsSection";
import Testemonials from "./Testimonials/Testemonials";
import Latest from "./latestNews/Latest";
import Gallery from "/src/component/static/Gallery";
import TextSlider from "/src/component/static/TextSlider";
function HomePage() {
  return (
    <div>
      <Hero />
      <PopularFood />
      <Offer />
      <AboutSection />
      <Bestselling />
      <SpecialFood />
      <TextSlider
        words={["GRILLED CHICKEN", "CHICKEN BURGER", "PIZZA", "FRESH PASTA"]}
      />
      <ChefsSection />
      <Testemonials />
      <Latest />
      <Gallery />
    </div>
  );
}

export default HomePage;
