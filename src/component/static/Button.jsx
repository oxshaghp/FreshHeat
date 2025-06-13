import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function Button({
  text,
  w = "200px",
  h = "48px",
  bg = "var(--red)",
  hoverBg = "var(--orange)",
}) {
  return (
    <button
      className="cursor-pointer relative overflow-hidden group flex items-center justify-center py-2 rounded uppercase font-semibold text-white transition-colors duration-300"
      style={{ backgroundColor: bg, width: w, height: h }}
    >
      {/* Top hover overlay */}
      <span
        className="absolute left-0 top-0 w-0 h-1/2 z-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: hoverBg }}
      />
      {/* Bottom hover overlay */}
      <span
        className="absolute right-0 bottom-0 w-0 h-1/2 z-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: hoverBg }}
      />
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2 text-base">
        {text}
        <FaLongArrowAltRight />
      </span>
    </button>
  );
}

export default Button;
