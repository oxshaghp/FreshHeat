import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "/src/component/static/Button.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Offer() {
  const floatingImageRefs = useRef([]);

  useEffect(() => {
    floatingImageRefs.current.forEach((ref) => {
      if (ref) {
        gsap.to(ref, {
          x: -10,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
  }, []);

  const offerItems = [
    {
      id: 1,
      label: "ON THIS WEEK",
      title: "SPICY FRIED CHICKEN",
      subtitle: "Limited Time Offer",
      buttonColor: null,
      thumb: "../Home/offers/offerThumb1_1.png",
    },
    {
      id: 2,
      label: "WELCOME FRESHEAT",
      title: "TODAY SPACIAL FOOD",
      subtitle: "Limited Time Offer",
      buttonColor: {
        bg: "var(--orange)",
        hoverBg: "var(--red)",
      },
      thumb: "../Home/offers/offerThumb1_2.png",
    },
    {
      id: 3,
      label: "ON THIS WEEK",
      title: "SPECIAL CHICKEN ROLL",
      subtitle: "Limited Time Offer",
      buttonColor: null,
      thumb: "../Home/offers/offerThumb1_3.png",
    },
  ];

  return (
    <div className="flex items-center justify-evenly flex-wrap gap-5 mb-[5rem]">
      {offerItems.map((item, index) => (
        <div
          key={item.id}
          className='flex items-center justify-evenly w-[600px] h-[270px] max-w-[90%] p-5 bg-[url("../backGround/offerBG1_1.jpg")] bg-cover bg-no-repeat bg-center'
        >
          <div>
            <div className="mb-10">
              <h6 className="text-[var(--red)] font-bold text-[14px]">
                {item.label}
              </h6>
              <h1 className="uppercase font-bold text-2xl text-white py-1">
                {item.title}
              </h1>
              <h5 className="text-[var(--orange)] font-bold text-[14px]">
                {item.subtitle}
              </h5>
            </div>
            <Button
              text="Order Now"
              link="/shop"
              {...(item.buttonColor || {})}
            />
          </div>
          <div className="relative">
            <LazyLoadImage
              src="../Home/offers/offerShape1_4.png"
              alt="discount image"
              className="absolute -top-5 -left-5"
              ref={(el) => (floatingImageRefs.current[index] = el)}
              effect="blur"
            />
            <LazyLoadImage
              src={item.thumb}
              alt="Food Image"
              className="w-auto max-w-[200px] hidden sm:block"
              effect="blur"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offer;
