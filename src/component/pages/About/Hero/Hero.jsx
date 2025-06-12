import React from "react";
function Hero({ title, left, right }) {
  return (
    // Main Div
    <div className="w-full h-[453px] relative -z-10 ">
      {/* Image Background */}
      <img
        alt="BreadCumb"
        src="/About/breadcumb.jpg"
        className="absolute w-full h-full object-cover bg-no-repeat -z-10"
      />

      {/* Centered Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Head Text */}
        <h1 className="uppercase font-bold text-3xl md:text-6xl text-[var(--body)]">
          {title}
        </h1>

        {/* Description */}
        <div className="flex justify-center items-center md:text-[16px] mt-4">
          <div className="font-bold text-[var(--body)]">{left}</div>
          <div className="font-bold text-[var(--body)] mx-5">/</div>
          <div className="text-[var(--red)]">{right}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
