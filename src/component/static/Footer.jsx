import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaArrowRightLong,
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden w-full bg-[var(--bg)] text-white flex flex-col lg:items-center items-left lg:justify-center gap-10">
      <div className="mt-20 flex flex-col items-center justify-center gap-10">
        <div className="bg-[var(--orange)] w-full min-h-[150px] lg:rounded-2xl lg:p-10 flex lg:flex-row flex-col lg:items-center lg:justify-center">
          <div className="flex items-center gap-5 lg:h-full h-[100px] w-[400px] lg:justify-center lg-px-0 px-5 flex-wrap">
            <span className="text-[var(--orange)] bg-white rounded-full p-2 flex items-center justify-center">
              <FaLocationDot />
            </span>
            <div>
              <h6 className="capitalize font-bold">address</h6>
              <h1 className="text-lg">4648 Rocky Road Philadelphia</h1>
            </div>
          </div>
          <div className="flex items-center gap-5 lg:h-full h-[100px] w-[400px] lg:justify-center lg-px-0 px-5">
            <span className="text-[var(--orange)] bg-white rounded-full p-2 flex items-center justify-center">
              <MdEmail />
            </span>
            <div>
              <h6 className="capitalize font-bold">send email</h6>
              <h1 className="text-lg">info@exmple.com</h1>
            </div>
          </div>
          <div className="flex items-center gap-5 lg:h-full h-[100px] w-[400px] lg:justify-center lg-px-0 px-5">
            <span className="text-[var(--orange)] bg-white rounded-full p-2 flex items-center justify-center">
              <FaPhoneAlt />
            </span>
            <div>
              <h6 className="capitalize font-bold">call emergency</h6>
              <h1 className="text-lg">+88 0123 654 99</h1>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row w-full flex-col px-5 lg:items-center items-left justify-center">
          <div className="flex flex-col items-left w-[350px] gap-8 lg:min-h-[350px] h-[300px]">
            <Link to="/">
              <img src="/logoWhite.svg" alt="Logo" />
            </Link>

            <p className="max-w-[300px]">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>

            <ul className="flex items-center gap-3">
              <li className="w-[30px] h-[30px] bg-transparent hover:bg-[var(--red)] transform-all duration-500 border border-[var(--border-2)] flex items-center justify-center">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="w-[30px] h-[30px] bg-transparent hover:bg-[var(--red)] transform-all duration-500 border border-[var(--border-2)] flex items-center justify-center">
                <a href="#">
                  <FaXTwitter />
                </a>
              </li>
              <li className="w-[30px] h-[30px] bg-transparent hover:bg-[var(--red)] transform-all duration-500 border border-[var(--border-2)] flex items-center justify-center">
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li className="w-[30px] h-[30px] bg-transparent hover:bg-[var(--red)] transform-all duration-500 border border-[var(--border-2)] flex items-center justify-center">
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-left w-[350px] gap-3 lg:min-h-[350px] h-[300px]">
            <h1 className="relative mb-5 text-[2rem] font-bold after:content-[''] before:content-[''] after:absolute before:absolute after:w-[25px] before:w-[60px] after:h-[2px] before:h-[2px] after:bg-[var(--orange)] before:bg-white after:-bottom-2 before:-bottom-2 after:left-0 before:left-10">
              Quick Links
            </h1>
            <ul className="flex flex-col items-start gap-5">
              <li className="flex items-center gap-2 group hover:ml-[0.5rem] transform-all duration-700">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem]" />
                <Link
                  className="font-bold group-hover:text-[var(--red)] transform-all duration-300"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2 group hover:ml-[0.5rem] transform-all duration-700">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem]" />
                <Link
                  className="font-bold group-hover:text-[var(--red)] transform-all duration-300"
                  to="/gallery"
                >
                  Our Gallery
                </Link>
              </li>
              <li className="flex items-center gap-2 group hover:ml-[0.5rem] transform-all duration-700">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem]" />
                <Link
                  className="font-bold group-hover:text-[var(--red)] transform-all duration-300"
                  to="/blogs"
                >
                  Our Blogs
                </Link>
              </li>
              <li className="flex items-center gap-2 group hover:ml-[0.5rem] transform-all duration-700">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem]" />
                <Link
                  className="font-bold group-hover:text-[var(--red)] transform-all duration-300"
                  to="/foodMenu"
                >
                  Menu
                </Link>
              </li>
              <li className="flex items-center gap-2 group hover:ml-[0.5rem] transform-all duration-700">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem]" />
                <Link
                  className="font-bold group-hover:text-[var(--red)] transform-all duration-300"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-left w-[350px] gap-3 lg:min-h-[350px] h-[300px]">
            <h1 className="relative mb-5 text-[2rem] font-bold after:content-[''] before:content-[''] after:absolute before:absolute after:w-[25px] before:w-[60px] after:h-[2px] before:h-[2px] after:bg-[var(--orange)] before:bg-white after:-bottom-2 before:-bottom-2 after:left-0 before:left-10">
              Contact Us
            </h1>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[var(--text)]">
                Monday – Friday:
                <span className="text-[var(--orange)]"> 8am – 4pm</span>
              </p>
              <p className="text-[var(--text)]">
                Saturday:
                <span className="text-[var(--orange)]"> 8am – 12am</span>
              </p>
            </div>
            <form className="flex flex-col items-start gap-3">
              <div className="flex w-full">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email address"
                  className="w-full p-3 rounded-l-lg bg-white text-[var(--text)] placeholder:text-[var(--text)] focus:outline-none"
                />
                <button className="p-3 rounded-r-lg bg-[var(--orange)] cursor-pointer placeholder:text-[var(--text)]  focus:outline-none">
                  <FaArrowRightLong />
                </button>
              </div>
              <div className="flex items-center w-full gap-2">
                <input type="checkbox" name="" id="agreement" />
                <label htmlFor="agreement" className="flex items-center gap-1">
                  I agree to the
                  <a className="underline" href="">
                    Privacy Policy.
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap lg:gap-0 gap-3  justify-evenly w-full bg-[var(--red)] py-5">
        <p>© All Copyright 2025 by FreshEat</p>

        <div className="flex items-center gap-3">
          <button className="bg-transparent border border-white px-3 py-1 hover:bg-white hover:text-[var(--red)] transform-all duration-500">
            <a href="">Terms & Condition</a>
          </button>
          <button className="bg-transparent border border-white px-3 py-1 hover:bg-white hover:text-[var(--red)] transform-all duration-500">
            <a href="">Privacy Policy</a>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
