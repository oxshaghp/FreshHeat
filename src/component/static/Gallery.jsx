import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Gallery() {
  const images = [
    "../Home/gallery/galleryThumb1_1.jpg",
    "../Home/gallery/galleryThumb1_2.jpg",
    "../Home/gallery/galleryThumb1_3.jpg",
    "../Home/gallery/galleryThumb1_4.jpg",
    "../Home/gallery/galleryThumb1_5.jpg",
  ];

  return (
    <section className="relative mt-10 w-full flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
        className="w-full max-w-[1300px] px-5"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="max-w-[300px] max-h-[300px] mx-auto relative overflow-hidden group">
              <LazyLoadImage
                src={src}
                alt={`gallery image ${i + 1}`}
                effect="blur"
                className="w-full"
              />
              <div className="bg-black opacity-0 h-full w-[90%] absolute left-[50%] transform translate-x-[-50%] z-10 bottom-[-20rem] group-hover:bottom-0 group-hover:opacity-[0.8] transition-all duration-500">
                <a
                  href="#"
                  className="text-[var(--text)] flex items-center justify-center h-full w-full text-4xl hover:text-[var(--white)]"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Gallery;
