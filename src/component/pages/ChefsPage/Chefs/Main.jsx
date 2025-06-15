import { FaShareAlt } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

export const chefs = [
  {
    name: "Ralph Edwards",
    role: "Chef Lead",
    image: "../Home/chefs/chefeThumb1_1.png",
  },
  {
    name: "Leslie Alexander",
    role: "Chef Assistant",
    image: "../Home/chefs/chefeThumb1_2.png",
  },
  {
    name: "Ronald Richards",
    role: "Chef Assistant",
    image: "../Home/chefs/chefeThumb1_3.png",
  },
  {
    name: "Jenny Wilson",
    role: "Medical Assistant",
    image: "/public/Chefs/chefeThumb1_4.png",
  },
  {
    name: "Guy Hawkins",
    role: "Chef Assistant",
    image: "/public/Chefs/chefeThumb1_5.png",
  },
  {
    name: "Robert Fox",
    role: "Chef Assistant",
    image: "/public/Chefs/chefeThumb1_6.png",
  },
];

function Main() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    gsap.to(img1Ref.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(img2Ref.current, {
      x: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section className="relative pt-40 p-14 w-full container m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 mt-36  place-items-center">
        {chefs.map((chef, idx) => (
          <div
            key={idx}
            className="bg-white rounded-t-[50%] shadow-md flex flex-col items-center mb-28 w-[400px] h-[300px] pt-10 pb-8 px-4 relative"
          >
            <div className="absolute top-[-40%] flex flex-col items-center">
              <LazyLoadImage
                src={chef.image}
                alt={chef.name}
                loading="lazy"
                className="w-[300px]"
                effect="blur"
              />
              <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 flex items-center gap-1 group">
                <button className="bg-white hover:bg-[var(--red)] cursor-pointer text-[var(--black)] rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <FaSquareFacebook />
                </button>
                <button className="bg-[var(--orange)] hover:bg-[var(--red)] cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <FaShareAlt />
                </button>
                <button className="bg-white hover:bg-[var(--red)] cursor-pointer text-[var(--black)] rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <FaLinkedin />
                </button>
              </div>
            </div>

            <div className="absolute bottom-[20%] flex flex-col items-center">
              <Link
                to={`/chef/${chef.name}`}
                className="font-bold text-2xl text-center cursor-pointer hover:text-[var(--red)] duration-300"
              >
                {chef.name}
              </Link>
              <p className="text-[var(--text)] text-center">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Img + Animated */}
      <div
        ref={img1Ref}
        className="absolute top-0 -left-45 mt-16 hidden xl:block"
      >
        <img src="/public/Chefs/chefeShape1_1.png" alt="Img" />
      </div>
      <div
        ref={img2Ref}
        className="absolute bottom-0 -right-40 mb-16 hidden xl:block"
      >
        <img src="/public/Chefs/chefeShape1_2.png" alt="Img" />
      </div>
    </section>
  );
}

export default Main;
