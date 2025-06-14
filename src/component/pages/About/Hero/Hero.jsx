import React from "react";
import { Link } from "react-router-dom";
function Hero({ title, left, right }) {
  return (
    // Main Div
    <section className="w-full h-[453px] relative -z-10 ">
      {/* Image Background */}
      <img
        effect="blur"
        alt="BreadCumb"
        src="/About/breadcumb.jpg"
        className="absolute w-full h-full object-cover bg-no-repeat -z-10"
      />

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Head Text */}
        <Link
          to="/"
          className="uppercase font-bold text-3xl md:text-6xl text-[var(--white)]"
        >
          {title}
        </Link>

        {/* Description */}
        <div className="flex justify-center items-center md:text-[16px] mt-4">
          <div className="font-bold text-[var(--white)]">{left}</div>
          <div className="font-bold text-[var(--white)] mx-5">/</div>
          <div className="text-[var(--red)]">{right}</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
