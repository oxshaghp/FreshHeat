import React from "react";
import Hero from "./Hero/Hero";
import PopularFood from "./PopularFood/PopularFood";
import Offer from "./Offer/Offer";

function HomePage() {
  return (
    <div>
      <Hero />
      <PopularFood />
      <Offer />
    </div>
  );
}

export default HomePage;
