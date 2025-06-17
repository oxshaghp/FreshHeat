import React, { useRef, useEffect } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Button from "/src/component/static/Button";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useAppContext from "../../context/AppContext/useAppContext";

function Offer() {
  const floatingImageRef1 = useRef(null);
  const { menuItems } = useAppContext();
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
          {menuItems.map((dish) => (
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

        <Button text="Order Now" link="/shop" />
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
