import React from "react";
import { Link } from "react-router-dom";
function Hero({ title, left, right }) {
  return (
    <section className="w-full h-[453px] relative ">
      <img
        effect="blur"
        alt="BreadCumb"
        src="../backGround/breadcumbBg.jpg"
        className="absolute w-full h-full object-cover bg-no-repeat -z-10"
      />

      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <h1 className="uppercase  font-bold text-3xl md:text-6xl text-[var(--white)]">
          {title}
        </h1>

        <div className="flex justify-center items-center z-30 md:text-[16px] mt-4">
          <Link
            to="/"
            className="font-bold  cursor-pointer text-[var(--white)]"
          >
            {left}
          </Link>
          <div className="font-bold text-[var(--white)] mx-5">/</div>
          <div className="text-[var(--red)]">{right}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
