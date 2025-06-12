import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Button({
  text,
  w = "w-40", // default width
  h = "h-12", // default height
  bg = "var(--red)",
  hoverBg = "var(--orange)",
}) {
  return (

    <button
      className={`relative text-white ${w} ${h} transition-all overflow-hidden group flex items-center justify-center`}
      style={{ backgroundColor: bg }}
    >
      {/* Before Element */}
      <span
        className="absolute right-0 w-0 h-1/2 bottom-0 z-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: hoverBg }}
      />
      {/* After Element */}
      <span
        className="absolute left-0 w-0 h-1/2 top-0 z-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: hoverBg }}
      />

      <span className="relative z-10 flex items-center text-sm md:text-base">

    <button className="bg-[var(--red)] w-fit cursor-pointer relative text-white px-10 py-2 transition-all before:content-[''] before:absolute before:right-0 before:w-0 before:h-[50%] before:bottom-0 before:z-0 hover:before:bg-[var(--orange)] hover:before:w-full before:duration-500 after:content-[''] after:absolute after:left-0 after:w-0 after:h-[50%] after:top-0 after:z-0 hover:after:bg-[var(--orange)] hover:after:w-full after:duration-500">
      <span className="relative z-10 flex items-center">

        {text}
        <FaLongArrowAltRight className="inline-block ml-2" />
      </span>
    </button>
  );
}

export default Button;
