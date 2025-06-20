import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Button from "./Button";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/src/Config/Firebase";
import { FaUserCircle } from "react-icons/fa";
import useCartContext from "../context/CartContext/UseCartContext";
function Navbar() {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCartContext();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="hidden lg:block bg-[var(--black)] text-white">
        <div className="flex items-center justify-evenly h-[100px]">
          <Link
            className="hover:text-[var(--red)] font-bold transition-all duration-500"
            to="/"
          >
            <img src="/logoWhite.svg" alt="Logo" />
          </Link>

          <ul className="flex items-center justify-between gap-5">
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/foodMenu"
              >
                Food Menu
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li className="relative group">
              <Link className="hover:text-[var(--red)] font-bold transition-all duration-500 cursor-pointer">
                Our Story
              </Link>
              <ul className="hidden group-hover:flex flex-col absolute left-0 top-[100%] bg-white text-black w-[200px] gap-2 z-10 border-t-4 border-[var(--red)] p-2">
                <li>
                  <Link
                    className="hover:text-[var(--red)] font-bold transition-all duration-500"
                    to="/ourStory/blogs"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[var(--red)] font-bold transition-all duration-500"
                    to="/ourStory/chef"
                  >
                    Chef
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[var(--red)] font-bold transition-all duration-500"
                    to="/ourStory/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[var(--red)] font-bold transition-all duration-500"
                    to="/ourStory/gallery"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="flex items-center justify-center gap-5">
            <div className="relative ">
              <span className="absolute -top-4 -right-3 bg-[var(--red)] text-white w-[17px] h-[17px] flex items-center justify-center rounded-full text-xs">
                {cartItems.length}
              </span>
              <button
                onClick={() => navigate("/cart")}
                className="cursor-pointer relative"
              >
                <FaShoppingCart size={22} />
              </button>
            </div>
            {user && (
              <Link to="/profile" className="cursor-pointer">
                <FaUserCircle size={24} />
              </Link>
            )}
            {user ? (
              <div>
                <Button text="Order Now" link="/shop" />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <button
                    className="cursor-pointer relative overflow-hidden group flex items-center justify-center py-2 rounded uppercase font-semibold text-white transition-colors duration-300"
                    style={{
                      backgroundColor: "var(--red)",
                      width: "120px",
                      height: "48px",
                    }}
                  >
                    {/* Top hover overlay */}
                    <span
                      className="absolute left-0 top-0 w-0 h-1/2 z-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: "var(--orange)" }}
                    />
                    {/* Bottom hover overlay */}
                    <span
                      className="absolute right-0 bottom-0 w-0 h-1/2 z-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: "var(--orange)" }}
                    />
                    {/* Button content */}
                    <span className="relative z-10 flex items-center gap-2 text-base">
                      Login
                      <FaLongArrowAltRight />
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="block lg:hidden bg-[var(--black)] text-white relative z-30">
        <div className="flex items-center justify-between px-5 gap-10 h-[100px]">
          <Link
            className="hover:text-[var(--red)] font-bold transition-all duration-500"
            to="/"
          >
            <img src="/logoWhite.svg" alt="Logo" />
          </Link>

          {/* Mobile Login button beside menu button */}
          <div className="flex items-center gap-3">
            {user && (
              <Link to="/profile" className="cursor-pointer">
                <FaUserCircle size={24} />
              </Link>
            )}
            {!user && (
              <Link to="/login">
                <button
                  className="cursor-pointer relative overflow-hidden group flex items-center justify-center py-2 rounded uppercase font-semibold text-white transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--red)",
                    width: "120px",
                    height: "48px",
                  }}
                >
                  {/* Top hover overlay */}
                  <span
                    className="absolute left-0 top-0 w-0 h-1/2 z-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: "var(--orange)" }}
                  />
                  {/* Bottom hover overlay */}
                  <span
                    className="absolute right-0 bottom-0 w-0 h-1/2 z-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: "var(--orange)" }}
                  />
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-2 text-base">
                    Login
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </Link>
            )}
            <div className="relative ">
              <span className="absolute -top-4 -right-3 bg-[var(--red)] text-white w-[17px] h-[17px] flex items-center justify-center rounded-full text-xs">
                {cartItems.length}
              </span>
              <button
                onClick={() => navigate("/cart")}
                className="cursor-pointer relative"
              >
                <FaShoppingCart size={22} />
              </button>
            </div>
            <button
              className="font-bold text-[2rem] cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoMenu />
            </button>
          </div>

          <ul
            className={`${
              isOpen ? "left-0" : "left-[-100%]"
            } absolute top-full flex flex-col justify-between gap-5 bg-[var(--dark)] w-full p-5 max-h-[700px] overflow-hidden transition-all duration-300`}
          >
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/foodMenu"
              >
                Food Menu
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[var(--red)] font-bold transition-all duration-500"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
            <li className="relative group">
              <Link className="cursor-pointer">Our Story</Link>
              <button
                className="font-bold absolute right-0 text-[20px] cursor-pointer"
                onClick={() => {
                  setOpenSubMenu(!openSubMenu);
                }}
              >
                {openSubMenu ? "-" : "+"}
              </button>

              <ul
                className={`${
                  openSubMenu ? "group-hover:max-h-[300px] " : "max-h-0"
                } flex flex-col bg-[var(--dark)] w-full gap-5 pl-5 pt-5 overflow-hidden  transition-all duration-300`}
              >
                <li>
                  <Link
                    className="hover:text-[var(--red)] font-bold transition-all duration-500"
                    to="/ourStory/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[var(--red)] font-bold transition-all duration-500"
                    to="/ourStory/chef"
                  >
                    Chef
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[var(--red)] font-bold transition-all duration-500"
                    to="/ourStory/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-[var(--red)] font-bold transition-all duration-500"
                    to="/ourStory/gallery"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
