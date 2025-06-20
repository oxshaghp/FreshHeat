import React, { useEffect } from "react";
import Hero from "../../static/Hero";
import ServiceCard from "./ServiceCard";
import MobileSection from "../../static/MobileSection";
import Gallery from "../../static/Gallery";

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      id: 1,
      title: "Dining Guides",
      description:
        "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
      image: "../Service/servicesIcon1_1.png",
    },
    {
      id: 2,
      title: "100% Fresh Food",
      description:
        "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
      image: "../Service/servicesIcon1_2.png",
    },
    {
      id: 3,
      title: "Special Offers and Discounts",
      description:
        "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
      image: "../Service/servicesIcon1_3.png",
    },
    {
      id: 4,
      title: "Restaurant Reviews",
      description:
        "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
      image: "../Service/servicesIcon1_4.png",
    },
    {
      id: 5,
      title: "Food Testing Events",
      description:
        "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
      image: "../Service/servicesIcon1_5.png",
    },
    {
      id: 6,
      title: "Online Ordering",
      description:
        "Detailed reviews of local eateries, covering various cuisines, price points, and dining experiences.",
      image: "../Service/servicesIcon1_6.png",
    },
  ];
  return (
    <div>
      <Hero title={"Services"} left={"Home"} right={"Services"} />
      <section className="flex flex-row items-center justify-center flex-wrap lg:w-[70%] w-[95%] mx-auto my-20">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </section>
      <MobileSection />
      <Gallery />
    </div>
  );
}

export default ServicesPage;
