import React from "react";
import { MdFastfood } from "react-icons/md";
import Buttone from "/src/component/Button";

function American() {
  return (
    <div className="w-full relative bg-[var(--white)] h-[560px] mb-34">
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
          <Buttone
            text={"Order Now"}
            w={"w-36 sm:w-40 md:w-44"}
            h={"h-10 sm:h-11"}
          />
        </div>
      </div>

      {/* Icone-bg */}
      <div className="absolute left-1/4 top-10 animate-bounce hidden xl:block">
        <img
          src="/public/Home/aboutSection/aboutShape1_2.png"
          alt="Icone"
          className="size-36 object-cover"
        />
      </div>
      <div className="absolute left-0 hidden xl:block">
        <img
          src="/public/Home/aboutSection/aboutShape1_1.png"
          alt="Icone"
          className="object-cover"
        />
      </div>
      <div className="absolute right-0 hidden xl:block">
        <img
          src="/public/Home/aboutSection/aboutShape1_4.png"
          alt="Icone"
          className="object-cover"
        />
      </div>

      {/* Dishes with slow spin  */}
      <div
        className="absolute left-44 top-20 hidden xl:block"
        style={{ animation: "spin 13s linear infinite" }}
      >
        <img
          src="/public/Home/aboutSection/aboutShape1_3.png"
          alt="Icone"
          className="object-cover"
        />
      </div>
      <div
        className="absolute right-44 top-20 hidden xl:block"
        style={{ animation: "spin 13s linear infinite" }}
      >
        <img
          src="/public/Home/aboutSection/aboutShape1_6.png"
          alt="Icone"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default American;
