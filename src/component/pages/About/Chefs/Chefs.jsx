import React from "react";
import { MdFastfood } from "react-icons/md";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { LazyLoadImage } from "react-lazy-load-image-component";
function Chefs() {
  const chef = [
    {
      id: 1,
      name: "Devon Lane",
      des: "President of Sales",
      img: "/public/About/chefs/chefeThumb2_1.jpg",
    },
    {
      id: 2,
      name: "Ralph Edwards",
      des: "Chefe Manager",
      img: "/public/About/chefs/chefeThumb2_2.jpg",
    },
    {
      id: 3,
      name: "Marvin McKinney",
      des: "Main Chefe",
      img: "/public/About/chefs/chefeThumb2_3.jpg",
    },
  ];

  return (
    <section className="w-full h-auto relative mb-36 px-4">
      {/* Content Centre */}
      <div className="flex justify-center items-center text-center flex-col w-full px-4">
        <div className="flex justify-center items-center gap-2">
          <MdFastfood className="size-4 sm:size-5 text-[var(--orange)]" />
          <b className="text-sm sm:text-base text-[var(--orange)] uppercase">
            OUR CHEFE
          </b>
          <MdFastfood className="size-4 sm:size-5 text-[var(--orange)]" />
        </div>
        <div className="mt-3 mb-3 px-2">
          <h1 className="max-w-xs sm:max-w-md md:max-w-3xl font-bold text-[var(--title)] text-center text-2xl sm:text-3xl md:text-5xl">
            Meet Our Expert Chefe
          </h1>
        </div>
      </div>

      {/* Chefs List */}
      <div className="flex justify-center items-center flex-wrap gap-40 lg:gap-10 mt-12">
        {chef.map((el) => (
          <div key={el.id} className="relative text-center group">
            <div className="relative">
              {/* Chef Img */}
              <LazyLoadImage src={el.img} alt="Img" effect="blur" />

              {/* Red Social Strip */}
              <div
                className="absolute top-1/2 -translate-y-1/2 right-[-24px] w-16 h-64
                           bg-[var(--red)] rounded-tl-3xl rounded-bl-3xl 
                           opacity-0 scale-y-0 origin-top transition-all duration-300
                           group-hover:opacity-100 group-hover:scale-y-100 z-10 flex flex-col justify-center items-center gap-3 py-4"
              >
                <TiSocialFacebook className="text-white text-xl cursor-pointer hover:bg-white hover:text-[var(--red)] transition rounded-full p-1 w-7 h-7" />
                <TiSocialLinkedin className="text-white text-xl cursor-pointer hover:bg-white hover:text-[var(--red)] transition rounded-full p-1 w-7 h-7" />
                <SlSocialYoutube className="text-white text-xl cursor-pointer hover:bg-white hover:text-[var(--red)] transition rounded-full p-1 w-7 h-7" />
                <p
                  className="text-white text-sm whitespace-nowrap mt-2 font-bold"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  ____ Share
                </p>
              </div>

              {/* Info Box */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-72 h-32
                           bg-[var(--white)] flex justify-center items-center flex-col
                           rounded-tl-4xl rounded-br-4xl 
                           transition-all duration-300 border-t-4 border-t-transparent
                           group-hover:border-[var(--red)] shadow-md"
              >
                <h2 className="font-bold text-lg text-[var(--title)]">
                  {el.name}
                </h2>
                <p className="text-sm text-gray-500">{el.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chefs;
