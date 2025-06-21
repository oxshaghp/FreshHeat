import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "./Button";
function SpecialFood() {
  const floatingImageRef1 = useRef(null);
  const floatingImageRef2 = useRef(null);
  const floatingImageRef3 = useRef(null);
  const floatingImageRef4 = useRef(null);

  useEffect(() => {
    [floatingImageRef1, floatingImageRef2].forEach((ref) => {
      if (ref.current) {
        gsap.to(ref.current, {
          x: -10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
    [floatingImageRef3, floatingImageRef4].forEach((ref) => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: -10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
  }, []);

  return (
    <section className="my-10 w-full h-[600px] relative bg-[url('/backGround/ctaBG1_1.jpg')] bg-cover bg-no-repeat bg-center">
      <img
        src="/specialFood/ctaShape1_1.png"
        alt="ghggh"
        className="absolute left-2 top-2 hidden lg:block"
        ref={floatingImageRef1}
        loading="lazy"
      />
      <img
        src="/specialFood/ctaShape1_2.png"
        alt=""
        className="absolute left-0 bottom-2 hidden lg:block"
        ref={floatingImageRef3}
        loading="lazy"
      />
      <div className="h-full mx-auto flex flex-wrap-reverse items-center lg:justify-evenly justify-center relative">
        <div className="flex flex-col lg:p-0 px-5 gap-4">
          <div>
            <h3 className="text-[var(--red)] font-bold text-[1.2rem]">
              WELCOME FRESHEAT
            </h3>
            <h1 className="font-bold uppercase my-2 text-[var(--white)] text-[3rem]">
              TODAY SPACIAL FOOD
            </h1>
            <h3 className="text-[var(--orange)] font-bold text-[1.2rem]">
              limits Time Offer
            </h3>
          </div>
          <Button text="Order Now" link="/shop" />
        </div>
        <img
          src="/specialFood/ctaThumb1_1.png"
          alt="food image"
          effect="blur"
          className="lg:w-[700px] w-[450px]"
          ref={floatingImageRef2}
          loading="lazy"
        />
      </div>
      <img
        src="/specialFood/ctaShape1_3.png"
        alt=""
        className="absolute right-0 bottom-2 hidden lg:block"
        ref={floatingImageRef4}
        loading="lazy"
      />
    </section>
  );
}

export default SpecialFood;
