import React from "react";
import Hero from "../../static/Hero";
import CurdsFood from "./Curds Food/CurdsFood";
import AboutSection from "../../static/AboutSection";
import SpecialFood from "../../static/SpecialFood";
import Chefs from "./Chefs/Chefs";
import Customer from "./customer/Customer";
import Gallery from "../../static/Gallery";
import TextSlider from "../../static/TextSlider";
function AboutPage() {
  return (
    <div>
      <Hero title={"about us"} left={"Home"} right={"About Us"} />
      <CurdsFood />
      <AboutSection />
      <TextSlider words={["GRILLED CHICKEN", "CHICKEN BURGER", "PIZZA", "FRESH PASTA"]} />
      <SpecialFood />
      <Chefs />
      <Customer />
      <Gallery />
    </div>
  );
}

export default AboutPage;
