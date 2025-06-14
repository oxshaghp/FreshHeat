import React, { useRef } from "react";
import { MdFastfood } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Customer() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const customers = [
    {
      id: 1,
      name: "Mena",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      img: "/About/Testimonials/testimonialProfile2_1.png",
    },
    {
      id: 2,
      name: "Franklin",
      des: "Customer feedback 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. It has roots in a piece of classical Latin literature from 45 BC.",
      img: "/About/Testimonials/testimonialProfile2_2.png",
    },
    {
      id: 3,
      name: "Bop",
      des: "Customer feedback 3: Atque, impedit nobis! Ratione, doloremque deserunt! It has roots in a piece of classical Latin literature.",
      img: "/About/Testimonials/testimonialProfile2_3.png",
    },
  ];

  return (
    <section className="mt-40 mb-40 p-10 pt-14 w-full h-auto relative bg-white">
      <div className=" flex justify-around items-center flex-wrap-reverse">
        {/* Left Content */}
        <div className="max-w-xl w-full px-4">
          {/* Head */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <MdFastfood className="size-4 sm:size-5 text-[var(--orange)]" />
              <b className="text-sm sm:text-base text-[var(--orange)] uppercase">
                TESTIMONIALS
              </b>
              <MdFastfood className="size-4 sm:size-5 text-[var(--orange)]" />
            </div>

            <h1 className="text-center sm:text-left break-words font-bold text-[var(--title)] text-2xl sm:text-3xl md:text-5xl leading-tight sm:leading-snug">
              We have lots of happy customer feedback
            </h1>
          </div>

          <hr className="my-8 text-sm text-gray-400" />

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
          >
            {customers.map((el) => (
              <SwiperSlide key={el.id}>
                <div className="p-4">
                  <svg
                    width="50"
                    height="37"
                    viewBox="0 0 50 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-9"
                  >
                    <path
                      d="M10.75 15.1548L8 17.8681V8H10.75V15.1548ZM42 15.1548L39.25 17.8681V8H42V15.1548Z"
                      stroke="#FC791A"
                      strokeWidth="16"
                    />
                  </svg>
                  <p className="text-[var(--text)] text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                    {el.des}
                  </p>
                  <div className="flex items-center gap-4 mt-14">
                    <LazyLoadImage
                      src={el.img}
                      alt="Customer"
                      effect="blur"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="font-semibold text-gray-800">
                      {el.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="flex justify-end items-center gap-2  px-2">
            <button
              ref={prevRef}
              className="text-gray-500 text-xs border border-gray-300 rounded p-1 hover:bg-gray-100 transition"
            >
              &#8592;
            </button>
            <button
              ref={nextRef}
              className="text-gray-500 text-xs border border-gray-300 rounded p-1 hover:bg-gray-100 transition"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="max-w-md w-full px-4">
          <LazyLoadImage
            effect="blur"
            src="/About/Testimonials/testimonialThumb2_1.png"
            alt="Img"
            className="w-full"
          />
        </div>
      </div>
      {/* Decorative Images */}
      <div>
        <img
          src="/public/About/Testimonials/chili-shape.png"
          alt="img"
          className="absolute  top-0 right-0 hidden xl:block "
        />
      </div>
      <div>
        <img
          src="/public/About/Testimonials/vagetable-shape.png"
          alt="img"
          className="absolute bottom-0 left-0  hidden xl:block "
        />
      </div>
    </section>
  );
}

export default Customer;
