import React from "react";
import { Link } from "react-router-dom";

function PageHeroSection({ text }) {
  return (
    <div className="relative w-full h-[400px] bg-[url(../backGround/breadcumbBg.jpg)] bg-center bg-cover bg-no-repeat flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl lg:text-8xl font-bold mb-5 uppercase">
          {text}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm lg:text-base">
          <Link
            to="/"
            className="text-white hover:text-[var(--red)] transition-all duration-500"
          >
            Home
          </Link>
          <span>/</span>
          <span className="capitalize">{text}</span>
        </div>
      </div>
    </div>
  );
}

export default PageHeroSection;
