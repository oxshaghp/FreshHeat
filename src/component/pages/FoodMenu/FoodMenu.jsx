import React, { useEffect } from "react";
import Hero from "/src/component/static/Hero";
import Offer from "./Offer";
import SpecialFood from "../../static/SpecialFood";
import Customer from "../About/customer/Customer";

function FoodMenu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero title={"Food Menu"} right={"Food Menu "} left={"Home"} />
      <Offer />
      <SpecialFood />
      <Customer marginTop="-mt-10" marginBottom="mb-0" />
    </div>
  );
}

export default FoodMenu;
