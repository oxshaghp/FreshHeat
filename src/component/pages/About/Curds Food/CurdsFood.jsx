import React, { useEffect } from "react";
import Button from "/src/component/static/Button";
import gsap from "gsap";

function CurdsFood() {
  useEffect(() => {
    gsap.utils.toArray(".animated-shape").forEach((el) => {
      gsap.to(el, {
        x: 30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section className="relative flex justify-center items-center gap-8 flex-col lg:flex-row bg-[var(--bg2)] pt-12 pb-34 p-5">
      {/* Box 1 */}
      <div
        className="relative object-cover w-auto h-auto flex justify-center items-center gap-3"
        style={{
          backgroundImage: `url('/About/offers/offerBG2_1.jpg')`,
        }}
      >
        {/* Left Content */}
        <div className="flex justify-center items-start flex-col gap-3 p-7">
          <b className="text-[var(--white)] text-[12px] uppercase font-bold">
            start price $25
          </b>
          <h3 className="text-[var(--white)] font-bold text-2xl">
            TODAY SPACIAL FOOD
          </h3>
          <b className="text-[var(--white)] font-bold text-[12px] uppercase">
            limits Time Offer
          </b>
          <Button
            text={"ORDER NOW"}
            bg={"var(--orange)"}
            hoverBg={"var(--black)"}
          />
        </div>

        {/* Right Content */}
        <div>
          <img src="/About/offers/offerThumb1_2.png" alt="Thumb" />
        </div>

        {/* Animated Icon (GSAP Animation) */}
        <div className="absolute left-2/5 top-3 animated-shape">
          <img src="/About/offers/offerShape1_4.png" alt="Shape" />
        </div>
      </div>

      {/* Box 2 */}
      <div
        className="relative object-cover w-auto h-auto  flex justify-center items-center gap-3"
        style={{
          backgroundImage: `url('/About/offers/offerBG2_2.jpg')`,
        }}
      >
        {/* Left Content */}
        <div className="flex justify-center items-start flex-col gap-3 p-7">
          <b className="text-[var(--white)] text-[12px] uppercase font-bold">
            start price $28
          </b>
          <h3 className="text-[var(--white)] font-bold text-2xl">
            special chicken roll
          </h3>
          <b className="text-[var(--white)] font-bold text-[12px] uppercase">
            limits Time Offer
          </b>
          <Button
            text={"ORDER NOW"}
            bg={"var(--red)"}
            hoverBg={"var(--black)"}
          />
        </div>

        {/* Right Content */}
        <div>
          <img src="/About/offers/offerThumb1_3.png" alt="Thumb" />
        </div>

        {/* Animated Icon (GSAP Animation) */}
        <div className="absolute left-2/5 top-3 animated-shape">
          <img src="/About/offers/offerShape1_4.png" alt="Shape" />
        </div>
      </div>

      {/* Box 3 */}
      <div
        className="relative object-cover w-auto h-[275px]  flex justify-center items-center gap-3"
        style={{
          backgroundImage: `url('/About/offers/offerBG2_3.jpg')`,
        }}
      >
        {/* Left Content */}
        <div className="flex justify-center items-start flex-col gap-3 p-7">
          <b className="text-[var(--white)] text-[12px] uppercase font-bold">
            start price $55
          </b>
          <h3 className="text-[var(--white)] font-bold text-2xl">
            SPICY FRIED CHICKEN
          </h3>
          <b className="text-[var(--white)] font-bold text-[12px] uppercase">
            limits Time Offer
          </b>
          <Button
            text={"ORDER NOW"}
            bg={"var(--red)"}
            hoverBg={"var(--black)"}
          />
        </div>

        {/* Right Content */}
        <div>
          <img src="/About/offers/offerThumb1_1.png" alt="Thumb" />
        </div>

        {/* Animated Icon (GSAP Animation) */}
        <div className="absolute left-2/5 top-3 animated-shape">
          <img src="/About/offers/offerShape1_4.png" alt="Shape" />
        </div>
      </div>
    </section>
  );
}

export default CurdsFood;
