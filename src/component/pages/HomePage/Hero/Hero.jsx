import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Button from "../../../static/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const sideImages = {
  right: "../Home/heroSection/homeBanner1.svg",
  leftBottom: "../Home/heroSection/homeBanner3.svg",
  centerBottom: "../Home/heroSection/homeBanner2.svg",
};

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

function Hero() {
  return (
    <section className='relative w-full bg-[url("../backGround/bannerBG1_1.jpg")] bg-cover min-h-[86vh] bg-no-repeat bg-center'>
      <div className="flex items-center justify-center gap-10 absolute inset-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full h-full"
          slidesPerView={1}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                src={sideImages.right}
                alt="Pizza img"
                className="absolute right-0 hidden lg:block"
              />
              <img
                src={sideImages.leftBottom}
                alt="Pizza img"
                className="absolute left-0 bottom-0 hidden lg:block"
              />
              <img
                src={sideImages.centerBottom}
                alt="Pizza img"
                className="absolute left-[50%] transform -translate-x-[50%] bottom-0 hidden lg:block"
              />

              <div className="flex items-center lg:justify-center">
                <div className="flex flex-col justify-center items-center absolute lg:relative top-1/2 left-1/2 text-center lg:left-0 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-0">
                  <h4 className="uppercase text-[var(--orange)] font-bold text-[1rem] lg:text-[1.5rem]">
                    welcome fresheat
                  </h4>
                  <h1 className="text-[2rem] w-full lg:text-[5rem] font-bold uppercase text-white mb-2 lg:w-[700px]">
                    {banner.subtitle}
                  </h1>
                  <Button text="Order Now" link="/shop" />
                </div>
                <LazyLoadImage
                  src={banner.image}
                  alt={banner.subtitle}
                  effect="blur"
                  className="hidden lg:block"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
