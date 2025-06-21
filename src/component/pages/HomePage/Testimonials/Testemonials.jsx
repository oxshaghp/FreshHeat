import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Albert Flores",
    role: "Web Designer",
    image: "../Home/testomonials/testimonialProfile1_1.png",
    text: "Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt",
    stars: 4,
  },
  {
    name: "Sam Wilson",
    role: "UI/UX Designer",
    image: "../Home/testomonials/testimonialProfile1_1.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
    stars: 5,
  },
  {
    name: "Robert Fox",
    role: "Frontend Developer",
    image: "../Home/testomonials/testimonialProfile1_1.png",
    text: "Curabitur ac lacus arcu. Sed vehicula varius lectus auctor viverra. Nulla vehicula, sapien non hendrerit pretium, enim urna ultrices risus.",
    stars: 5,
  },
];

function Testemonials() {
  return (
    <section className="bg-[#181818] relative my-[5rem] flex items-center justify-center w-full h-[750px] p-4 md:p-10">
      <img
        src="../Home/testomonials/testimonialThumb1_1.png"
        alt="decorative background"
        loading="lazy"
        className="absolute left-0 top-0"
      />

      <div className="flex flex-col items-center justify-center text-center lg:relative lg:left-[35rem] absolute left-[50%] transform translate-x-[-50%]">
        <div className="mb-[2rem]">
          <h3 className="font-bold text-[var(--orange)] relative flex items-center justify-center text-[1rem] md:text-[1.2rem] gap-2">
            <span>
              <img src="../Home/titleIcon.svg" alt="icon left" loading="lazy" />
            </span>
            Testimonials
            <span>
              <img
                src="../Home/titleIcon.svg"
                alt="icon right"
                loading="lazy"
              />
            </span>
          </h3>
          <h1 className="font-bold text-[2rem] md:text-[3rem] capitalize text-white">
            What our Clients say
          </h1>
        </div>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="lg:w-[650px] md:w-[500px] w-[90vw] max-w-[450px] rounded-[20px]"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[var(--white)] border-t-2 border-t-[var(--orange)] h-[300px] rounded-[20px] p-[1rem] md:p-[2rem] flex flex-col justify-center gap-5">
                <div className="flex items-center gap-3 md:gap-5 mb-[1rem]">
                  <img
                    src={t.image}
                    alt={`${t.name} profile`}
                    loading="lazy"
                    className="w-[100px] h-[100px] rounded-full object-cover"
                  />
                  <div className="flex flex-col items-start justify-center gap-1">
                    <h1 className="font-bold text-xl md:text-3xl">{t.name}</h1>
                    <h5 className="text-[var(--text)] text-sm md:text-base">
                      {t.role}
                    </h5>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < t.stars ? "text-[var(--orange)]" : ""}
                        >
                          <FaStar className="text-sm md:text-base" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text)] text-sm md:text-base lg:text-[1.5rem] text-left">
                  {t.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testemonials;
