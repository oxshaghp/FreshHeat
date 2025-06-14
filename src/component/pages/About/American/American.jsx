import React, { useEffect, useRef } from "react";
import { MdFastfood } from "react-icons/md";
import gsap from "gsap";
import Button from "/src/component/static/Button";

function American() {
  const dishLeftRef = useRef(null);
  const dishRightRef = useRef(null);

  useEffect(() => {
    gsap.to(dishLeftRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 13,
    });

    gsap.to(dishRightRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "linear",
      duration: 13,
    });
  }, []);

  return (
    <section className="w-full relative bg-[var(--white)] h-[560px] mb-34">
      {/* Content Centre */}
      <div className="absolute flex justify-center items-center text-center flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
        {/* Header Icons and Title */}
        <div className="flex justify-center items-center gap-2">
          <MdFastfood className="size-4 sm:size-5 text-[var(--orange)]" />
          <b className="text-sm sm:text-base text-[var(--orange)] uppercase">
            About Us
          </b>
          <MdFastfood className="size-4 sm:size-5 text-[var(--orange)]" />
        </div>

        {/* Heading */}
        <div className="mt-3 mb-3 px-2">
          <h1 className="max-w-xs sm:max-w-md md:max-w-3xl font-bold text-[var(--title)] text-center text-2xl sm:text-3xl md:text-5xl">
            Variety of Flavours From American Cuisine
          </h1>
        </div>

        {/* Paragraph */}
        <div className="max-w-xs sm:max-w-md md:max-w-xl font-medium text-[var(--text)] text-center text-[11px] sm:text-sm md:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </div>

        {/* Button */}
        <div className="flex justify-center items-center mt-6">
          <Button text={"Order Now"} />
        </div>
      </div>

      {/* Icon-bg */}
      <div className="absolute left-1/4 top-10 hidden xl:block">
        <img
          src="/aboutSection/aboutShape1_2.png"
          alt="Icone"
          className="size-36 object-cover"
        />
      </div>
      <div className="absolute right-1/4 bottom-10 hidden xl:block">
        <img
          src="/aboutSection/aboutShape1_2.png"
          alt="Icone"
          className="size-36 object-cover"
        />
      </div>
      <div className="absolute left-0 hidden xl:block">
        <img
          src="/aboutSection/aboutShape1_1.png"
          alt="Icone"
          className="object-cover"
        />
      </div>
      <div className="absolute right-0 hidden xl:block">
        <img
          src="/aboutSection/aboutShape1_4.png"
          alt="Icone"
          className="object-cover"
        />
      </div>

      {/* Dishes with GSAP spin */}
      <div className="absolute left-44 top-20 hidden xl:block">
        <img
          src="/aboutSection/aboutShape1_3.png"
          alt="Icone"
          className="object-cover"
          ref={dishLeftRef}
        />
      </div>
      <div className="absolute right-44 top-20 hidden xl:block">
        <img
          src="/aboutSection/aboutShape1_6.png"
          alt="Icone"
          className="object-cover"
          ref={dishRightRef}
        />
      </div>
    </section>
  );
}

export default American;
