import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Button from "../../../Button";

function Hero() {
  const banners = [
    {
      id: 1,
      subtitle: "spicy fried chicken",
      image: "../Home/heroSection/homeBannerThumb1_1.png",
    },
    {
      id: 2,
      subtitle: "chicken deep pizza king",
      image: "../Home/heroSection/homeBannerThumb1_2.png",
    },
    {
      id: 3,
      subtitle: "chicago deep purger king",
      image: "../Home/heroSection/homeBannerThumb1_3.png",
    },
  ];
  return (
    <section className='relative w-full bg-[url("../backGround/bannerBG1_1.jpg")] bg-cover min-h-[86vh] bg-no-repeat bg-center'>
      <div className="flex items-center justify-center gap-10 absolute top-[2rem] left-0 right-0 bottom-0 ">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full h-full"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                src="../Home/heroSection/homeBanner1.svg"
                alt="Pizza img"
                className="absolute right-0 hidden lg:block"
              />
              <img
                src="../Home/heroSection/homeBanner3.svg"
                alt="Pizza img"
                className="absolute left-0 bottom-0 hidden lg:block"
              />
              <div className="flex items-center lg:justify-center">
                <div className="flex flex-col absolute lg:relative top-[50%] left-10 lg:left-0 translate-y-[-50%] lg:top-0 lg:translate-y-0">
                  <h4 className="uppercase text-[var(--orange)] font-bold text-[1rem] lg:text-[1.5rem]">
                    welcome fresheat
                  </h4>
                  <h1 className="text-[2.5rem] lg:text-[6rem] font-bold uppercase text-white mb-2 lg:w-[700px]">
                    {banner.subtitle}
                  </h1>
                  <Button text="Order Now" />
                </div>

                <img
                  src={banner.image}
                  alt={banner.subtitle}
                  className="hidden lg:block"
                />
              </div>

              <img
                src="../Home/heroSection/homeBanner2.svg"
                alt="Pizza img"
                className="absolute left-[50%] transform -translate-x-[50%] bottom-0 hidden lg:block"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
