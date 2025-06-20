import React, { useEffect, useRef, useState } from "react";
import Hero from "../../static/Hero";
import { FaSearch } from "react-icons/fa";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import useCartContext from "../../context/CartContext/UseCartContext";
import useAppContext from "../../context/AppContext/useAppContext";
import { ToastContainer } from "react-toastify";
function ShopPage() {
  const borderRefs = useRef([]);
  const { menuItems } = useAppContext();
  const { AddToCart } = useCartContext();
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [search, setSearch] = useState("");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const auth = getAuth();
  const { currentUser } = useAppContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    borderRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }
    });
  }, []);

  useEffect(() => {
    setFilteredItems(menuItems);
    setSearch("");
  }, [menuItems]);

  const [priceRange, setPriceRange] = useState({
    min: 1,
    max: 1000,
  });

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <section>
      <ToastContainer position="top-center" />
      <Hero title={"Shop"} left={"Home"} right={"Shop"} />

      <div className="flex lg:flex-row flex-col flex-wrap justify-center lg:w-[80%] w-full mx-auto mt-30 ">
        {/* Sidebar */}
        <div className="lg:w-[500px]  w-full mx-auto mb-20">
          {/* Search */}
          <div className="bg-white lg:w-[400px] w-[95%] mx-auto min-h-[200px] p-7 rounded-2xl mb-10">
            <h1 className="relative text-2xl after:content-[''] after:absolute after:w-[20%] after:h-[2px] after:bg-[var(--red)] after:left-0 after:-bottom-1 font-bold mb-5">
              Search
            </h1>
            <form
              className="flex flex-col items-start gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const filtered = menuItems.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredItems(filtered);
                setCurrentPage(1);
              }}
            >
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Search for Item"
                  className="w-full p-5 rounded-l-lg bg-[#F4F1EA] text-[var(--text)] placeholder:text-[var(--text)] focus:outline-none"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    // Optionally, live filter as user types:
                    const filtered = menuItems.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    );
                    setFilteredItems(filtered);
                    setCurrentPage(1);
                  }}
                  aria-label="Search for Item"
                />
                <button
                  type="submit"
                  className="p-3 rounded-r-lg bg-[var(--red)] cursor-pointer focus:outline-none text-white"
                  aria-label="Search"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          {/* Price Filter */}
          <div className="bg-white lg:w-[400px] w-[95%] mx-auto min-h-[200px] p-7 rounded-2xl mb-10">
            <h1 className="relative text-2xl after:content-[''] after:absolute after:w-[20%] after:h-[2px] after:bg-[var(--red)] after:left-0 after:-bottom-1 font-bold mb-5">
              Filter By Price
            </h1>

            <div className="relative w-full mb-6">
              <input
                type="range"
                min={1}
                max={1000}
                value={priceRange.max}
                onChange={(e) => {
                  const newMax = parseInt(e.target.value);
                  setPriceRange((prev) => ({ ...prev, max: newMax }));

                  const filtered = menuItems.filter(
                    (item) => item.price >= 1 && item.price <= newMax
                  );
                  setFilteredItems(filtered);
                }}
                className="w-full h-2 bg-[var(--dark)] rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--red) 0%, var(--red) ${
                    ((priceRange.max - 1) / 999) * 100
                  }%, #ddd ${((priceRange.max - 1) / 999) * 100}%, #ddd 100%)`,
                }}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>1$</span>
                <span>{priceRange.max}$</span>
                <span>1000$</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products + Pagination */}
        <div className="mt-20 md:mt-0 relative flex flex-col items-center gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-13">
            {currentItems.map((item, idx) => (
              <div key={item.id}>
                <div className="relative w-[250px] h-[300px] flex flex-col items-center mb-20">
                  <div className="absolute top-0 -translate-y-[50%] z-20 w-[180px] h-[180px] flex items-center justify-center">
                    <div
                      ref={(el) => (borderRefs.current[idx] = el)}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--red)]"
                    ></div>
                    <LazyLoadImage
                      src={item.image}
                      alt={item.name}
                      effect="blur"
                      className="w-[160px]"
                    />
                  </div>
                  <div className="bg-white w-[280px] h-[280px] rounded-2xl p-5 relative flex flex-col items-center z-10">
                    <div className="absolute bottom-5 text-center flex flex-col items-center justify-center gap-2">
                      <div>
                        <Link className="font-bold capitalize text-[1.2rem] hover:text-[var(--red)] trasition-all duration-500">
                          {item.name}
                        </Link>
                        <div className="flex items-center justify-center gap-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[var(--orange)]">
                              <FaStar />
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[var(--red)] font-bold my-3 text-[1.2rem]">
                        ${item.price}
                      </p>
                      <button
                        className="bg-[#FDE5E9] hover:bg-[var(--red)] text-[var(--red)] hover:text-white px-10 py-2 rounded-full transition-all duration-500 cursor-pointer"
                        onClick={() => AddToCart(item)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mb-20 -mt-16 flex justify-center items-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-[var(--red)] text-white"
                    : "bg-gray-200 text-gray-700"
                } transition-all duration-300`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
