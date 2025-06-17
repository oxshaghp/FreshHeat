import React, { useEffect, useRef, useState } from "react";
import Hero from "../../static/Hero";
import { FaSearch } from "react-icons/fa";
import gsap from "gsap";
import useAppContext from "../../context/useAppContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa6";

import { Link } from "react-router-dom";

function ShopPage() {
  const borderRefs = useRef([]);
  const { menuItems, setCartItems, cartItems } = useAppContext();

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

  const [priceRange, setPriceRange] = useState({
    min: 1,
    max: 1000,
  });

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);

    if (name === "min_val") {
      setPriceRange((prev) => ({
        ...prev,
        min: Math.min(numValue, prev.max),
      }));
    } else if (name === "max_val") {
      setPriceRange((prev) => ({
        ...prev,
        max: Math.max(numValue, prev.min),
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value) || 0;

    if (name === "min_input") {
      setPriceRange((prev) => ({
        ...prev,
        min: Math.min(Math.max(1, numValue), prev.max),
      }));
    } else if (name === "max_input") {
      setPriceRange((prev) => ({
        ...prev,
        max: Math.max(Math.min(1000, numValue), prev.min),
      }));
    }
  };

  const handleFilter = () => {
    console.log("Filtering products with price range:", priceRange);
    // Add your filtering logic here
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If item already exists in cart, increase quantity
      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If item doesn't exist in cart, add it with quantity 1
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }

    // Show feedback to user (you could add a toast notification here)
    alert(`${item.name} added to cart!`);
  };

  return (
    <section>
      <Hero title={"Shop"} left={"Home"} right={"Shop"} />

      <div className="flex lg:flex-row flex-col justify-center lg:w-[70%] w-full mx-auto mt-30">
        <div className="lg:w-[500px] w-full mx-auto">
          <div className="bg-white lg:w-[400px] w-[95%] mx-auto min-h-[200px] p-7 rounded-2xl mb-10">
            <h1 className="relative text-2xl after:content-[''] after:absolute after:w-[20%] after:h-[2px] after:bg-[var(--red)] after:left-0 after:-bottom-1 font-bold mb-5">
              Search
            </h1>
            <form
              className="flex flex-col items-start gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-5 rounded-l-lg bg-[#F4F1EA] text-[var(--text)] placeholder:text-[var(--text)] focus:outline-none"
                  required
                  aria-label="Email Address"
                />
                <button
                  type="submit"
                  className="p-3 rounded-r-lg bg-[var(--red)] cursor-pointer focus:outline-none text-white"
                  aria-label="Subscribe"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white lg:w-[400px] w-[95%] mx-auto min-h-[200px] p-7 rounded-2xl mb-10">
            <h1 className="relative text-2xl after:content-[''] after:absolute after:w-[20%] after:h-[2px] after:bg-[var(--red)] after:left-0 after:-bottom-1 font-bold mb-5">
              Filter By Price
            </h1>

            {/* Price Range Slider */}
            <div className="relative w-full bg-[var(--dark)] h-2 rounded-md mb-6">
              <span
                className="absolute top-0 h-full bg-[var(--red)] rounded-full"
                style={{
                  left: `${((priceRange.min - 1) / (1000 - 1)) * 100}%`,
                  right: `${100 - ((priceRange.max - 1) / (1000 - 1)) * 100}%`,
                }}
              ></span>
              <input
                type="range"
                name="min_val"
                min={1}
                max={1000}
                step={1}
                value={priceRange.min}
                onChange={handleSliderChange}
                className="range-slider"
              />
              <input
                type="range"
                name="max_val"
                min={1}
                max={1000}
                step={1}
                value={priceRange.max}
                onChange={handleSliderChange}
                className="range-slider"
              />
              <div className=""></div>
              <div className=""></div>
            </div>
            {/* Price Display and Filter Button */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                Price:
                <div className="flex items-center">
                  <span className="w-[40px] h-[40px] rounded-l-sm text-[#777] text-[14px] border border-[#eee] flex items-center justify-center">
                    $
                  </span>
                  <input
                    type="text"
                    name="min_input"
                    value={priceRange.min}
                    onChange={handleInputChange}
                    className="border border-[#eee] w-[60px] h-[40px] focus:outline-none px-2 text-[#777]"
                  />
                </div>
                <div className="flex items-center">
                  <span className="w-[40px] h-[40px] rounded-l-sm text-[#777] text-[14px] border border-[#eee] flex items-center justify-center">
                    $
                  </span>
                  <input
                    type="text"
                    name="max_input"
                    value={priceRange.max}
                    onChange={handleInputChange}
                    className="border border-[#eee] w-[60px] h-[40px] focus:outline-none px-2 text-[#777]"
                  />
                </div>
              </div>
              <button
                onClick={handleFilter}
                className="px-4 py-2 bg-[var(--red)] text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-bold tracking-wide"
              >
                FILTER
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center gap-10 lg:gap-10 flex-wrap ">
          {menuItems.map((item, idx) => (
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
                        <span className="text-[var(--orange)]">
                          <FaStar />
                        </span>
                        <span className="text-[var(--orange)]">
                          <FaStar />
                        </span>
                        <span className="text-[var(--orange)]">
                          <FaStar />
                        </span>
                        <span className="text-[var(--orange)]">
                          <FaStar />
                        </span>
                        <span className="text-[var(--orange)]">
                          <FaStar />
                        </span>
                      </div>
                    </div>
                    <p className="text-[var(--red)] font-bold my-3 text-[1.2rem]">
                      ${item.price}
                    </p>
                    <button
                      className="bg-[#FDE5E9] hover:bg-[var(--red)] text-[var(--red)] hover:text-white px-10 py-2 rounded-full transition-all duration-500 cursor-pointer"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
