import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderExample = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    { id: 1, title: "Slide 1", content: "This is the first slide content" },
    { id: 2, title: "Slide 2", content: "This is the second slide content" },
    { id: 3, title: "Slide 3", content: "This is the third slide content" },
    { id: 4, title: "Slide 4", content: "This is the fourth slide content" },
    { id: 5, title: "Slide 5", content: "This is the fifth slide content" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        React Slick Slider Example
      </h2>

      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className="bg-white rounded-lg shadow-lg p-6 h-48 flex flex-col justify-center items-center border">
              <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
              <p className="text-gray-600 text-center">{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderExample;
