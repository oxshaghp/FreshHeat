import React, { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PopularFood() {
  const borderRefs = useRef([]);
  const floatingImageRef1 = useRef(null);
  const floatingImageRef2 = useRef(null);

  useEffect(() => {
    borderRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }
    });
  }, []);

  useEffect(() => {
    const animateFloating = (ref) => {
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

    animateFloating(floatingImageRef1);
    animateFloating(floatingImageRef2);
  }, []);

  const items = useMemo(
    () => [
      {
        id: 1,
        image: "../Home/popularFood/item1_1.png",
        title: "chicken pizza",
        price: 26.99,
      },
      {
        id: 2,
        image: "../Home/popularFood/item1_3.png",
        title: "chicken fried rice",
        price: 100.99,
      },
      {
        id: 3,
        image: "../Home/popularFood/item1_4.png",
        title: "chicken leg piece",
        price: 20.99,
      },
      {
        id: 4,
        image: "../Home/popularFood/item1_2.png",
        title: "egg and cucumber",
        price: 28.0,
      },
    ],
    []
  );

  return (
    <section className="relative w-full py-[5rem] my-5">
      <div className="relative flex flex-col justify-center items-center text-center">
        <h3 className="font-bold text-[var(--orange)] mb-1 relative flex items-center justify-center text-[1.2rem] gap-2">
          <span>
            <img src="../Home/titleIcon.svg" alt="" />
          </span>
          Best Food
          <span>
            <img src="../Home/titleIcon.svg" alt="" />
          </span>
        </h3>
        <h1 className="font-bold text-[3rem]">Popular Food Items</h1>

        <img
          src="../Home/popularFood/bestFoodItemsShape1_2.png"
          alt="food Image"
          className="absolute bottom-[-5rem] right-0 hidden lg:block"
          ref={floatingImageRef1}
        />
      </div>

      <div className="relative flex items-center justify-center gap-25 lg:gap-10 flex-wrap mt-[8rem]">
        {items.map((item, idx) => (
          <div key={item.id}>
            <div className="relative w-[250px] h-[200px] flex flex-col items-center justify-end">
              <div className="absolute top-0 -translate-y-[40%] z-20 w-[180px] h-[180px] flex items-center justify-center">
                <div
                  ref={(el) => (borderRefs.current[idx] = el)}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--red)]"
                ></div>
                <LazyLoadImage
                  src={item.image}
                  alt={item.title}
                  effect="blur"
                  className="w-[160px]"
                />
              </div>
              <div className="bg-white w-[250px] h-[300px] rounded-2xl p-5 relative flex flex-col items-center z-10">
                <div className="absolute bottom-5 text-center">
                  <h1 className="font-bold capitalize text-[1.2rem]">
                    {item.title}
                  </h1>
                  <span className="text-[var(--red)] font-bold">
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <img
          src="../Home/popularFood/bestFoodItemsShape1_1.png"
          alt="food Image"
          className="absolute bottom-0 left-0 hidden lg:block"
          ref={floatingImageRef2}
        />
      </div>
    </section>
  );
}

export default PopularFood;
