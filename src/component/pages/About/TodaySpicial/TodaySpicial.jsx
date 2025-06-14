import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "/src/component/static/Button";

function TodaySpicial() {
  const pizzaRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);

  useEffect(() => {
    gsap.to(pizzaRef.current, {
      x: 20,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(shape1Ref.current, {
      x: 20,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(shape2Ref.current, {
      y: 15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    gsap.to(shape3Ref.current, {
      y: 15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      className="mt-40 relative mb-20 w-full h-[600px] bg-bottom bg-cover flex justify-center items-center bg-no-repeat"
      style={{
        backgroundImage: `url('/About/offers/offerBG2_2.jpg')`,
      }}
    >
      <div className="flex flex-col xl:flex-row justify-around items-center gap-10 xl:gap-96 px-5 py-10">
        {/* Left Content */}
        <div className="flex justify-center items-start gap-5 flex-col z-10 text-center xl:text-left">
          <b className="text-[var(--red)] text-2xl font-bold">
            WELCOME FRESHEAT
          </b>
          <p className="text-[var(--white)] text-2xl xl:text-5xl font-bold">
            TODAY SPACIAL FOOD
          </p>
          <b className="text-[var(--orange)] text-2xl font-bold">
            limits Time Offer
          </b>
          <Button text={"Order Now"} />
        </div>
        {/* Right Content (Pizza Image) */}
        <div className="relative z-10">
          <img
            ref={pizzaRef}
            src="/public/About/offers/ctaThumb1_1.png"
            alt="Pizza"
            className="w-2xl"
          />
        </div>
      </div>

      {/* Custom Shadow Behind Image */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 rounded-full w-[300px] h-96 bg-orange-500 blur-3xl opacity-50 z-0 hidden xl:block"></div>

      {/* Floating Images */}
      <div ref={shape1Ref} className="absolute left-5 top-3 hidden xl:block">
        <img src="/public/Mobile/ctaShape3_1.png" alt="Img" />
      </div>
      <div ref={shape2Ref} className="absolute left-1 bottom-3 hidden xl:block">
        <img src="/public/Mobile/ctaShape3_2.png" alt="Img" />
      </div>
      <div
        ref={shape3Ref}
        className="absolute right-1 bottom-3 hidden xl:block"
      >
        <img src="/public/About/offers/ctaShape1_3.png" alt="Img" />
      </div>
    </section>
  );
}

export default TodaySpicial;
