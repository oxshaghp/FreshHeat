import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Button from "./Button";

function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  return (
    <>
      <div className="hidden lg:block bg-[var(--black)] text-white">
        <div className="flex items-center justify-evenly h-[100px]">
          <Link to="/">
            <img src="/logoWhite.svg" alt="Logo" />
          </Link>

          <ul className="flex items-center justify-between gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/foodMenu">Food Menu</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="relative group">
              <Link className="cursor-pointer">Our Story</Link>
              <ul className="hidden group-hover:flex flex-col absolute left-0 top-[100%] bg-white text-black w-[200px] gap-2 z-10 border-t-4 border-[var(--red)] p-2">
                <li>
                  <Link to="/ourStory/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/ourStory/chef">Chef</Link>
                </li>
                <li>
                  <Link to="/ourStory/services">Services</Link>
                </li>
                <li>
                  <Link to="/ourStory/gallery">Gallery</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div
            className="flex items-center justify-center gap-5
          "
          >
            <button onClick={handleOpenSearch} className="cursor-pointer">
              <FaSearch />
            </button>
            <Button text="Order Now" />
          </div>

          <div
            className={`${
              openSearch
                ? "absolute left-0 top-0 w-full h-full bg-white opacity-75 z-20"
                : "hidden"
            }`}
          >
            <form
              action=""
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[700px]"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="text-[var(--red)] w-full h-full outline-none border-b-2 border-solid border-[var(--red)] text-center font-bold"
              />
            </form>

            <button
              onClick={handleCloseSearch}
              className="font-bold text-[2rem] cursor-pointer text-[var(--red)] absolute top-10 right-10"
            >
              X
            </button>
          </div>
        </div>
      </div>
      <div className="block lg:hidden bg-[var(--black)] text-white relative z-10">
        <div className="flex items-center justify-between px-5 gap-10 h-[100px]">
          <Link to="/">
            <img src="/logoWhite.svg" alt="Logo" />
          </Link>

          <ul
            className={`${
              isOpen ? "left-0" : "left-[-100%]"
            } absolute top-full flex flex-col justify-between gap-5 bg-[var(--dark)] w-full p-5 max-h-[700px] overflow-hidden transition-all duration-300`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/foodMenu">Food Menu</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
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
                  <Link to="/ourStory/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/ourStory/chef">Chef</Link>
                </li>
                <li>
                  <Link to="/ourStory/services">Services</Link>
                </li>
                <li>
                  <Link to="/ourStory/gallery">Gallery</Link>
                </li>
              </ul>
            </li>
          </ul>

          <button
            className="font-bold text-[2rem] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMenu />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
