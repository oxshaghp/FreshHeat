import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "./Button";

function AboutSection() {
  const rotatingImageRef1 = useRef(null);
  const rotatingImageRef2 = useRef(null);

  useEffect(() => {
    if (rotatingImageRef1.current) {
      gsap.to(rotatingImageRef1.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
    if (rotatingImageRef2.current) {
      gsap.to(rotatingImageRef2.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <section className="w-full min-h-[500px] bg-white flex items-center justify-between mb-[5rem]">
      <div className="w-[600px] h-full relative hidden xl:block">
        <img src="../aboutSection/aboutShape1_1.png" alt="" />
        <img
          src="../aboutSection/aboutShape1_3.png"
          alt=""
          className="absolute top-[50%] transform translate-y-[-50%] right-0 z-10 "
          ref={rotatingImageRef1}
        />
        <img
          src="../aboutSection/aboutShape1_2.png"
          alt="image"
          className="absolute transform top-0 right-5 "
        />
      </div>

      <div className="lg:w-[500px] w-[80%] mx-auto h-full text-center flex flex-col items-center justify-center gap-5">
        <h3 className="font-bold text-[var(--orange)] relative flex items-center justify-center text-[1.2rem] gap-2">
          <span>
            <img src="../Home/titleIcon.svg" alt="" />
          </span>
          About US
          <span>
            <img src="../Home/titleIcon.svg" alt="" />
          </span>
        </h3>
        <h1 className="font-bold text-[3rem] capitalize">
          Variety of flavours from american cuisine
        </h1>
        <p className="text-[var(--text)]">
          It is a long established fact that a reader will be distracted the
          readable content of a page when looking at layout the point
          established fact that
        </p>
        <Button text="OREDER NOW" />
      </div>

      <div className="w-[600px] h-full relative hidden xl:block">
        <img
          src="../aboutSection/aboutShape1_4.png"
          alt=""
          className="float-right"
        />
        <img
          src="../aboutSection/aboutShape1_6.png"
          alt=""
          className="absolute top-[50%] transform translate-y-[-50%] left-0 z-10"
          ref={rotatingImageRef2}
        />
        <img
          src="../aboutSection/aboutShape1_2.png"
          alt="image"
          className="absolute transform bottom-0 z-0"
        />
      </div>
    </section>
  );
}

export default AboutSection;
