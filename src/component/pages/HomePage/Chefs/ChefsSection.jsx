import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const chefs = [
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
];

function ChefsSection() {
  return (
    <section className="relative w-full bg-[#f7f4ef]">
      <div className="mb-10">
        <h3 className="font-bold text-[var(--orange)] mb-1 relative flex items-center justify-center text-[1.2rem] gap-2">
          <span>
            <img src="../Home/titleIcon.svg" alt="title icon" loading="lazy" />
          </span>
          OUR CHEFE
          <span>
            <img src="../Home/titleIcon.svg" alt="title icon" loading="lazy" />
          </span>
        </h3>
        <h1 className="font-bold text-[3rem] text-center">
          Meet Our Expert Chefe
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-[8rem] lg:mt-50 mt-30">
        {chefs.map((chef, idx) => (
          <div
            key={idx}
            className="bg-white rounded-t-[50%] shadow-md flex flex-col items-center w-[400px] h-[300px] pt-10 pb-8 px-4 relative"
          >
            <div className="absolute lg:top-[-50%] top-[-30%] flex flex-col items-center">
              <LazyLoadImage
                src={chef.image}
                alt={chef.name}
                loading="lazy"
                className="lg:w-full w-[250px]"
                effect="blur"
              />
              <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 flex items-center gap-1 group">
                <button className=" bg-white hover:bg-[var(--red)] cursor-pointer text-[var(--black)] rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <FaSquareFacebook />
                </button>
                <button className=" bg-[var(--orange)] hover:bg-[var(--red)] cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md ">
                  <FaShareAlt />
                </button>
                <button className=" bg-white hover:bg-[var(--red)] cursor-pointer text-[var(--black)] rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <FaLinkedin />
                </button>
              </div>
            </div>

            <div className="absolute bottom-[20%] mt-10 flex flex-col items-center">
              <h3 className="font-bold text-2xl text-center">{chef.name}</h3>
              <p className="text-[var(--text)] text-center">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="flex items-center justify-center gap-10 mt-20 mx-auto max-w-[80%] lg:max-w-[70%]"
        >
          {[
            "clientLogo1_1.png",
            "clientLogo1_2.png",
            "clientLogo1_3.png",
            "clientLogo1_4.png",
            "clientLogo1_5.png",
            "clientLogo1_6.png",
          ].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={`../Home/chefs/${img}`}
                alt={`client logo ${i + 1}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ChefsSection;
