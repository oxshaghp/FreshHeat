import React from "react";
import Hero from "./Hero/Hero";
import CurdsFood from "./Curds Food/CurdsFood";
import American from "./American/American";
import Text from "./Text Marquee Animation/Text";
import TodaySpicial from "./TodaySpicial/TodaySpicial";
import Chefs from "./Chefs/Chefs";
import Customer from "./customer/Customer";
import Gallery from "../../static/Gallery";
function AboutPage() {
  return (
    <div>
      <Hero title={"about us"} left={"Home"} right={"About Us"} />
      <CurdsFood />
      <American />
      <Text />
      <TodaySpicial />
      <Chefs />
      <Customer />
      <Gallery />
    </div>
  );
}

export default AboutPage;
