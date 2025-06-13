import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "./Button";

function SpecialFood() {
  const floatingImageRef1 = useRef(null);
  const floatingImageRef2 = useRef(null);
  const floatingImageRef3 = useRef(null);
  const floatingImageRef4 = useRef(null);

  useEffect(() => {
    if (floatingImageRef1.current) {
      gsap.to(floatingImageRef1.current, {
        x: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    if (floatingImageRef2.current) {
      gsap.to(floatingImageRef2.current, {
        x: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
    if (floatingImageRef3.current) {
      gsap.to(floatingImageRef3.current, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
    if (floatingImageRef4.current) {
      gsap.to(floatingImageRef4.current, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <section className="my-10 w-full h-[600px] relative bg-[url('./backGround/ctaBG1_1.jpg')] bg-cover bg-no-repeat bg-center">
      <img
        src="../specialFood/ctaShape1_1.png"
        alt=""
        className="absolute left-2 top-2 hidden lg:block"
        ref={floatingImageRef1}
      />
      <img
        src="../specialFood/ctaShape1_2.png"
        alt=""
        className="absolute left-0 bottom-2 hidden lg:block"
        ref={floatingImageRef3}
      />
      <div className="h-full mx-auto flex flex-wrap-reverse items-center justify-evenly relative">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-[var(--red)] font-bold text-[1.2rem] ">
              WELCOME FRESHEAT
            </h3>
            <h1 className="font-bold uppercase my-2 text-[var(--white)] text-[3rem]">
              TODAY SPACIAL FOOD
            </h1>
            <h3 className="text-[var(--orange)] font-bold text-[1.2rem] ">
              limits Time Offer
            </h3>
          </div>
          <Button text="order now" />
        </div>
        <img
          src="../specialFood/ctaThumb1_1.png"
          alt="food image"
          className="lg:w-[700px] w-[450px]"
          ref={floatingImageRef2}
        />
      </div>
      <img
        src="../specialFood/ctaShape1_3.png"
        alt=""
        className="absolute right-0 bottom-2 hidden lg:block"
        ref={floatingImageRef4}
      />
    </section>
  );
}

export default SpecialFood;
