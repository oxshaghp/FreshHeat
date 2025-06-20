import React, { useRef, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Button from "/src/component/static/Button";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useCartContext from "/src/component/context/CartContext/UseCartContext";
const dishes = [
  {
    id: 1,
    name: "chicken fried rice",
    image: "../Home/BestSelling/dishes1_1.png",
    price: 100.99,
  },
  {
    id: 2,
    name: "chinese pasta",
    image: "../Home/BestSelling/dishes1_2.png",
    price: 15.99,
  },
  {
    id: 3,
    name: "chicken pizza",
    image: "../Home/BestSelling/dishes1_3.png",
    price: 26.99,
  },
  {
    id: 4,
    name: "chicken noodles",
    image: "../Home/BestSelling/dishes1_4.png",
    price: 39.99,
  },
  {
    id: 5,
    name: "grilled chicken",
    image: "../Home/BestSelling/dishes1_5.png",
    price: 20.99,
  },
];

function Bestselling() {
  const floatingImageRef1 = useRef(null);
  const { AddToCart } = useCartContext();

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
        <h3 className="font-bold text-[var(--orange)] mb-1 relative flex items-center justify-center text-[1.2rem] gap-2">
          <span>
            <img src="../Home/titleIcon.svg" alt="" />
          </span>
          POPULAR DISHES
          <span>
            <img src="../Home/titleIcon.svg" alt="" />
          </span>
        </h3>
        <h1 className="font-bold text-[3rem]">Best selling Dishes</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="w-[280px] h-[350px] group relative bg-white hover:bg-[url(../backGround/dishesThumbBG.png)] bg-cover bg-center bg-no-repeat transition-all duration-560 rounded-2xl flex flex-col justify-center items-center"
            >
              <button
                onClick={() => {
                  AddToCart(dish);
                }}
                className="cursor-pointer absolute text-black bg-[var(--white)] top-[120px] opacity-0 right-3 group-hover:opacity-100 group-hover:top-12 transform transition-all duration-700 p-2 rounded-full"
              >
                <FaShoppingCart />
              </button>

              <LazyLoadImage
                src={dish.image}
                alt={dish.name}
                effect="blur"
                className="w-[150px]"
              />

              <div>
                <h3 className="font-bold text-[1.5rem] text-center mt-2">
                  {dish.name}
                </h3>
                <p className="text-center text-[1.2rem] text-[var(--red)] font-bold">
                  ${dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button text="view all items" link="/foodMenu" />
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

export default Bestselling;
