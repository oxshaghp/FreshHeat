import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiArrowRight } from "react-icons/fi";
import "react-lazy-load-image-component/src/effects/blur.css";
const data = [
  { id: 1, img: "../Gallery/galleryThumb2_1.jpg" },
  { id: 2, img: "../Gallery/galleryThumb2_10.jpg" },
  { id: 3, img: "../Gallery/galleryThumb2_11.jpg" },
  { id: 4, img: "../Gallery/galleryThumb2_12.jpg" },
  { id: 5, img: "../Gallery/galleryThumb2_2.jpg" },
  { id: 6, img: "../Gallery/galleryThumb2_3.jpg" },
  { id: 7, img: "../Gallery/galleryThumb2_4.jpg" },
  { id: 8, img: "../Gallery/galleryThumb2_5.jpg" },
  { id: 9, img: "../Gallery/galleryThumb2_6.jpg" },
  { id: 10, img: "../Gallery/galleryThumb2_7.jpg" },
  { id: 11, img: "../Gallery/galleryThumb2_8.jpg" },
  { id: 12, img: "../Gallery/galleryThumb2_9.jpg" },
];

function Gallary() {
  return (
    <div className="xl:p-40 p-12">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-5">
        {data.map((el) => (
          <div
            key={el.id}
            className="relative mb-5 break-inside-avoid overflow-hidden rounded-lg group"
          >
            <LazyLoadImage
              effect="blur"
              src={el.img}
              alt="Gallery"
              className="w-6xl object-cover transition duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-white p-3 rounded-full shadow-md">
                <FiArrowRight className="text-black text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallary;
