import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { PiTimerFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
function Header() {
  return (
    <header className="hidden lg:block">
      <div className="bg-[var(--red)] text-white flex items-center justify-evenly min-h-[40px]">
        <div className="flex items-center justify-between gap-2">
          <span>
            <FaLocationDot />
          </span>
          <h3>New market Sandigo - California</h3>
          <span>/</span>
          <span>
            <PiTimerFill />
          </span>
          <h3 className="">9.00 am - 5.00 pm</h3>
        </div>

        <div className="flex items-center justify-between gap-2">
          <h3>Follow Us:</h3>
          <ul className="flex items-center justify-between gap-3">
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
