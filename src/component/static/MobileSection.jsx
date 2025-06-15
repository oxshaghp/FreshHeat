import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

function MobileSection() {
  const rotatingRefs = useRef([]);
  const floatingImageRef1 = useRef(null);
  const floatingImageRef2 = useRef(null);
  const floatingImageRef3 = useRef(null);
  const floatingImageRef4 = useRef(null);

  useEffect(() => {
    if (rotatingRefs.current) {
      gsap.to(rotatingRefs.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    }
  }, []);

  useEffect(() => {
    const animateFloating1 = (ref) => {
      if (ref.current) {
        gsap.to(ref.current, {
          x: -10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    };
    const animateFloatin2 = (ref) => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: -10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    };

    animateFloating1(floatingImageRef1);
    animateFloating1(floatingImageRef2);
    animateFloatin2(floatingImageRef3);
    animateFloatin2(floatingImageRef4);
  }, []);

  return (
    <div className="lg:w-[80%] w-[95%] mx-auto my-20">
      <div className="flex justify-between overflow-hidden relative bg-[url(../backGround/ctaBG3_1.jpg)] rounded-tl-[3rem] rounded-br-[3rem] bg-cover lg:p-10 p-5 bg-center bg-no-repet w-full">
        <img
          src="../Mobile/ctaShape3_1.png"
          alt=""
          className="absolute hidden lg:block top-5 left-5"
          ref={floatingImageRef1}
        />
        <img
          src="../Mobile/ctaShape3_2.png"
          alt=""
          className="absolute hidden lg:block bottom-5 left-0"
          ref={floatingImageRef3}
        />

        <div className="lg:p-20 p-2">
          <div className="relative flex flex-col justify-center items-left text-white lg:w-[60%] ">
            <h3 className="font-bold text-white mb-1 relative flex items-center text-[1.2rem] gap-2 ">
              <span>
                <img src="../Home/titleIcon.svg" alt="" />
              </span>
              DOWNLOAD APP
              <span>
                <img src="../Home/titleIcon.svg" alt="" />
              </span>
            </h3>
            <h1 className="font-bold text-[3rem]">
              Download food app Order today!
            </h1>
          </div>

          <div className="flex items-center justify-left flex-wrap gap-5 my-10">
            <button className="cursor-pointer rounded-full p-2 font-bold border hover:border-[var(--red)] bg-transparent hover:bg-[var(--red)] text-white flex items-center justify-center gap-2 transition-all duration-500">
              <FaApple className="text-3xl" />
              <p className="w-[60%] text-left">Get it on APP STORE</p>
            </button>
            <button className="cursor-pointer rounded-full p-2 font-bold bg-[var(--red)] text-white flex items-center justify-center gap-2 hover:bg-transparent transition-all duration-500">
              <FaGooglePlay className="text-3xl" />
              <p className="w-[60%] text-left">Get it on GOOGLE PLAY</p>
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex items-center justify-center absolute right-10 bottom-0">
            <div className="relative ">
              <img
                src="../Mobile/ctaThumb3_1.png"
                alt="app image"
                className="z-20 "
                ref={floatingImageRef2}
              />
              <img
                src="../Mobile/ctaShape3_6.png"
                alt=""
                className="absolute top-0 -left-5"
                ref={rotatingRefs}
              />
            </div>
            <img
              src="../Mobile/aboutShape1_3.png"
              alt="food image"
              className="z-10 w-[300px] relative -bottom-20"
              ref={floatingImageRef4}
            />
          </div>
        </div>

        <img
          src="../Mobile/ctaShape3_5.png"
          alt=""
          className="absolute hidden lg:block bottom-0 left-1/2 -translate-x-1/2"
        />
        <img
          src="../Mobile/ctaShape3_4.png"
          alt=""
          className="absolute hidden lg:block top-0 right-0"
        />
      </div>
    </div>
  );
}

export default MobileSection;
