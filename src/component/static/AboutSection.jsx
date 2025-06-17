import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "./Button";

function AboutSection() {
  const rotatingImageRef1 = useRef(null);
  const rotatingImageRef2 = useRef(null);

  useEffect(() => {
    [rotatingImageRef1, rotatingImageRef2].forEach((ref) => {
      if (ref.current) {
        gsap.to(ref.current, {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: "linear",
        });
      }
    });
  }, []);

  return (
    <section className="w-full min-h-[500px] bg-white flex items-center justify-between mb-[5rem] flex-wrap">
      {/* left image side */}
      <div className="w-[600px] h-full relative hidden 2xl:block">
        <img
          src="../aboutSection/aboutShape1_1.png"
          loading="lazy"
          alt="Decorative background shape"
        />
        <img
          src="../aboutSection/aboutShape1_3.png"
          alt="Rotating circular shape"
          className="absolute top-[50%] transform translate-y-[-50%] right-0 z-10"
          ref={rotatingImageRef1}
        />
        <img
          src="../aboutSection/aboutShape1_2.png"
          loading="lazy"
          alt="Overlay shape"
          className="absolute top-0 right-5"
        />
      </div>

      {/* center text content */}
      <div className="lg:w-[500px] w-[80%] mx-auto h-full text-center flex flex-col items-center justify-center gap-5">
        <h3 className="font-bold text-[var(--orange)] relative flex items-center justify-center text-[1.2rem] gap-2">
          <span>
            <img src="../Home/titleIcon.svg" alt="decorative icon" />
          </span>
          About Us
          <span>
            <img src="../Home/titleIcon.svg" alt="decorative icon" />
          </span>
        </h3>
        <h1 className="font-bold text-[3rem] capitalize leading-tight">
          Variety of flavours from American cuisine
        </h1>
        <p className="text-[var(--text)] leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. This is a
          well-established fact.
        </p>
        <Button text="Order Now" link="/shop" />
      </div>

      {/* right image side */}
      <div className="w-[600px] h-full relative hidden 2xl:block">
        <img
          src="../aboutSection/aboutShape1_4.png"
          loading="lazy"
          alt="Decorative background shape"
          className="float-right"
        />
        <img
          src="../aboutSection/aboutShape1_6.png"
          alt="Rotating circular shape"
          className="absolute top-[50%] transform translate-y-[-50%] left-0 z-10"
          ref={rotatingImageRef2}
        />
        <img
          src="../aboutSection/aboutShape1_2.png"
          loading="lazy"
          alt="Overlay shape"
          className="absolute bottom-0 z-0"
        />
      </div>
    </section>
  );
}

export default AboutSection;
