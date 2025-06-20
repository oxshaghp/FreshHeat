import React, { useEffect } from "react";
import Hero from "/src/component/static/Hero";
import CurdsFood from "./Curds Food/CurdsFood";
import AboutSection from "/src/component/static/AboutSection";
import SpecialFood from "/src/component/static/SpecialFood";
import Chefs from "./Chefs/Chefs";
import Customer from "./customer/Customer";
import Gallery from "/src/component/static/Gallery";
import TextSlider from "/src/component/static/TextSlider";
function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero title={"about us"} left={"Home"} right={"About Us"} />
      <CurdsFood />
      <AboutSection />
      <TextSlider
        words={["GRILLED CHICKEN", "CHICKEN BURGER", "PIZZA", "FRESH PASTA"]}
      />
      <SpecialFood />
      <Chefs />
      <Customer />
      <Gallery />
    </div>
  );
}

export default AboutPage;
