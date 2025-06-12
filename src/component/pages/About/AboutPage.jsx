import React from "react";
import Hero from "./Hero/Hero";
import CurdsFood from "./Curds Food/CurdsFood";
function AboutPage() {
  return (
    <div>
      <Hero title={"about us"} left={"Home"} right={"About Us"} />
      <CurdsFood />
    </div>
  );
}

export default AboutPage;
