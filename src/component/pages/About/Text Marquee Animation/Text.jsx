import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Text() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const width = textRef.current.offsetWidth;

    gsap.to(textRef.current, {
      x: `-${width / 2}px`,
      duration: 15,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const words = [
    "GRILLED",
    "CHICKEN",
    "BURGER",
    "CHICKEN",
    "PIZZA",
    "FRESH",
    "PASTA",
  ];

  return (
    <div
      className="overflow-hidden whitespace-nowrap w-full h-auto mb-24 bg-[var(--bg2)]"
      ref={containerRef}
    >
      <div className="inline-block" ref={textRef}>
        {[...Array(2)].map((_, i) => (
          <span key={i} className="mx-4">
            {words.map((word, index) => (
              <span
                key={index}
                className="text-4xl sm:text-6xl md:text-7xl font-bold text-[var(--text2)] mx-4 inline-block transition-all duration-300 hover:text-[var(--red)] hover:border-b-[3px] hover:border-[var(--red)]"
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Text;
