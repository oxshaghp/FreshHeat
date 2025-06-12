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
        {text}
        <FaLongArrowAltRight className="inline-block ml-2" />
      </span>
    </button>
  );
}

export default Button;
