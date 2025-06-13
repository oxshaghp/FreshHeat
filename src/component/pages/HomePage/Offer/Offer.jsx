import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../../static/Button.jsx";

function Offer() {
  const floatingImageRef1 = useRef(null);
  const floatingImageRef2 = useRef(null);
  const floatingImageRef3 = useRef(null);

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
        x: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);
  return (
    <>
      <div className="flex items-center justify-evenly flex-wrap gap-5 mb-[5rem]">
        <div className='flex items-center justify-evenly w-[600px] h-[270px] max-w-[90%] p-5 bg-[url("../backGround/offerBG1_1.jpg")] bg-cover bg-no-repeat bg-center'>
          <div>
            <div className="mb-10">
              <h6 className="text-[var(--red)] font-bold text-[14px]">
                ON THIS WEEK
              </h6>
              <h1 className="uppercase font-bold text-2xl text-white py-1">
                SPICY FRIED CHICKEN
              </h1>
              <h5 className="text-[var(--orange)]   font-bold text-[14px]">
                limits Time Offer
              </h5>
            </div>
            <Button text="order Now" />
          </div>
          <div className="relative">
            <img
              src="../Home/offers/offerShape1_4.png"
              alt="discount image"
              className="absolute -top-5 -left-5"
              ref={floatingImageRef1}
            />
            <img
              src="../Home/offers/offerThumb1_1.png"
              alt="Food Image"
              className="w-auto max-w-[200px]"
            />
          </div>
        </div>

        <div className='flex items-center justify-evenly w-[600px] h-[270px] max-w-[90%] p-5 bg-[url("../backGround/offerBG1_1.jpg")] bg-cover bg-no-repeat bg-center'>
          <div>
            <div className="mb-10">
              <h6 className="text-[var(--red)] font-bold text-[14px]">
                WELCOME FRESHEAT
              </h6>
              <h1 className="uppercase font-bold text-2xl text-white py-1">
                TODAY SPACIAL FOOD
              </h1>
              <h5 className="text-[var(--orange)]  font-bold text-[14px]">
                limits Time Offer
              </h5>
            </div>
            <Button text="order Now" bg="var(--orange)" hoverBg="var(--red)" />
          </div>
          <div className="relative">
            <img
              src="../Home/offers/offerShape1_4.png"
              alt="discount image"
              className="absolute -top-5 -left-5"
              ref={floatingImageRef2}
            />
            <img
              src="../Home/offers/offerThumb1_2.png"
              alt="Food Image"
              className="w-auto max-w-[200px]"
            />
          </div>
        </div>

        <div className='flex items-center justify-evenly w-[600px] h-[270px] max-w-[90%] p-5 bg-[url("../backGround/offerBG1_1.jpg")] bg-cover bg-no-repeat bg-center'>
          <div>
            <div className="mb-10">
              <h6 className="text-[var(--red)] font-bold text-[14px]">
                ON THIS WEEK
              </h6>
              <h1 className="uppercase font-bold text-2xl text-white py-1">
                SPECIAL CHICKEN ROLL
              </h1>
              <h5 className="text-[var(--orange)]   font-bold text-[14px]">
                limits Time Offer
              </h5>
            </div>
            <Button text="order Now" />
          </div>
          <div className="relative">
            <img
              src="../Home/offers/offerShape1_4.png"
              alt="discount image"
              className="absolute -top-5 -left-5"
              ref={floatingImageRef3}
            />
            <img
              src="../Home/offers/offerThumb1_3.png"
              alt="Food Image"
              className="w-auto max-w-[200px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
