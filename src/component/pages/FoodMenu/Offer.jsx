import React, { useRef, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Button from "/src/component/static/Button";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const dishes = [
  {
    id: 1,
    name: "chicken fried rice",
    image: "../Menu/menuThumb1_1.png",
    price: 100.99,
  },
  {
    id: 2,
    name: "chinese pasta",
    image: "../Menu/menuThumb1_2.png",
    price: 15.99,
  },
  {
    id: 3,
    name: "chicken pizza",
    image: "../Menu/menuThumb1_3.png",
    price: 26.99,
  },
  {
    id: 4,
    name: "chicken noodles",
    image: "../Menu/menuThumb1_4.png",
    price: 39.99,
  },
  {
    id: 5,
    name: "grilled chicken",
    image: "../Menu/menuThumb1_5.png",
    price: 20.99,
  },
  {
    id: 6,
    name: "Egg and Cucumber",
    image: "../Menu/menuThumb1_6.png",
    price: 30.99,
  },
  {
    id: 7,
    name: "Chicken White Rice",
    image: "../Menu/menuThumb1_7.png",
    price: 40.99,
  },
  {
    id: 8,
    name: "Spatial Barger",
    image: "../Menu/menuThumb1_8.png",
    price: 50.99,
  },
  {
    id: 9,
    name: "Vegetables Burger",
    image: "../Menu/menuThumb1_9.png",
    price: 55.99,
  },
  {
    id: 10,
    name: "Brief Chicken",
    image: "../Menu/menuThumb1_10.png",
    price: 80.99,
  },
];

function Offer() {
  const floatingImageRef1 = useRef(null);

  useEffect(() => {
    if (floatingImageRef1.current) {
      gsap.to(floatingImageRef1.current, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="w-full p-10 relative min-h-[800px]">
      <img
        src="../Home/BestSelling/popularDishesShape1_1.png"
        alt=""
        className="absolute left-10 bottom-10 lg:block hidden"
      />

      <div className="mb-10 text-center">
        <h3 className="font-bold text-[var(--orange)] mb-1 flex items-center justify-center text-[1.2rem] gap-2">
          <img src="../Home/titleIcon.svg" alt="" />
          POPULAR DISHES
          <img src="../Home/titleIcon.svg" alt="" />
        </h3>
        <h1 className="font-bold text-[3rem]">Best selling Dishes</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-10">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="w-[280px] h-[350px] group relative bg-white hover:bg-[url(../backGround/dishesThumbBG.png)] bg-cover bg-center bg-no-repeat transition-all duration-560 rounded-2xl flex flex-col justify-center items-center"
            >
              <button className="absolute top-3 right-3 p-2 rounded-full bg-[var(--red)] text-white">
                <FaHeart />
              </button>

              <button className="absolute opacity-0 top-[120px] right-3 p-2 rounded-full bg-white text-black transition-all duration-700 group-hover:opacity-100 group-hover:top-12">
                <FaShoppingCart />
              </button>

              <LazyLoadImage
                src={dish.image}
                alt={dish.name}
                effect="blur"
                className="w-[150px]"
              />

              <div className="mt-2 text-center">
                <h3 className="font-bold text-[1.5rem]">{dish.name}</h3>
                <p className="text-[1.2rem] font-bold text-[var(--red)]">
                  ${dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button text="view all items" />
      </div>

      <img
        src="../Home/BestSelling/popularDishesShape1_2.png"
        alt=""
        className="absolute right-10 top-10 lg:block hidden"
        ref={floatingImageRef1}
      />
    </section>
  );
}

export default Offer;
