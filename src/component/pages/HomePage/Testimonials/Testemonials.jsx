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
    name: "Jenny Wilson",
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
    <section className="bg-[#181818] relative my-[10rem] flex items-center justify-center w-full h-[750px] p-10">
      <img
        src="../Home/testomonials/testimonialThumb1_1.png"
        alt=""
        className="absolute left-0 top-0"
      />

      <div className="flex flex-col items-center justify-center text-center lg:relative lg:left-[35rem] absolute left-[50%] transform translate-x-[-50%]">
        <div className="mb-[2rem]">
          <h3 className="font-bold text-[var(--orange)] relative flex items-center justify-center text-[1.2rem] gap-2">
            <span>
              <img src="../Home/titleIcon.svg" alt="" />
            </span>
            Testimonials
            <span>
              <img src="../Home/titleIcon.svg" alt="" />
            </span>
          </h3>
          <h1 className="font-bold text-[3rem] capitalize text-white">
            What our Clients say
          </h1>
        </div>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="lg:w-[650px] w-[450px] "
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[var(--white)] border-t-2 border-t-[var(--orange)] h-[300px] rounded-[20px] p-[2rem] flex flex-col justify-center gap-5">
                <div className="flex items-center gap-5 mb-[1rem]">
                  <img
                    src={t.image}
                    alt="customer photo"
                    className="w-[100px] h-[100px] rounded-full object-cover"
                  />
                  <div className="flex flex-col items-start justify-center gap-1">
                    <h1 className="font-bold text-3xl">{t.name}</h1>
                    <h5 className="text-[var(--text)]">{t.role}</h5>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < t.stars ? "text-[var(--orange)]" : ""}
                        >
                          <FaStar />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text)] lg:text-[1.5rem] text-[1rem] text-left">
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
