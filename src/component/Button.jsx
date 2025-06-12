import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function Button({ text }) {
  return (
    <button className="bg-[var(--red)] relative text-white px-10 py-2 transition-all before:content-[''] before:absolute before:right-0 before:w-0 before:h-[50%] before:bottom-0 before:z-0 hover:before:bg-[var(--orange)] hover:before:w-full before:duration-500 after:content-[''] after:absolute after:left-0 after:w-0 after:h-[50%] after:top-0 after:z-0 hover:after:bg-[var(--orange)] hover:after:w-full after:duration-500">
      <span className="relative z-10 flex items-center">
        {text}
        <FaLongArrowAltRight className="inline-block ml-2" />
      </span>
    </button>
  );
}

export default Button;
