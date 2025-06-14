import React from "react";
import { MdFastfood } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Customer() {
  return (
    <section className="mt-40 pt-14 w-full h-auto relative flex justify-center items-center gap-32 flex-wrap-reverse bg-white">
      {/* Left Content */}
      <div>
        {/* Head */}
        <div className="flex justify-start items-start flex-col w-full px-4">
          <div className="flex justify-start items-center gap-2">
            <MdFastfood className="size-4 sm:size-5 text-[var(--orange)]" />
            <b className="text-sm sm:text-base text-[var(--orange)] uppercase">
              TESTIMONIALS
            </b>
            <MdFastfood className="size-4 sm:size-5 text-[var(--orange)]" />
          </div>
          <div className="mt-3 mb-3 px-2">
            <h1 className="max-w-20 uppercase sm:max-w-md md:max-w-3xl font-bold text-[var(--title)] text-2xl sm:text-3xl md:text-5xl">
              what have lots of happy customer feedback
            </h1>
          </div>
        </div>
        <hr className="mt-16 mb-16 text-sm text-gray-400" />
      </div>
      {/* Right Content */}
      <div>
        <LazyLoadImage
          effect="blur"
          src="/public/About/Testimonials/testimonialThumb2_1.png"
          alt="Img"
        />
      </div>
    </section>
  );
}

export default Customer;
