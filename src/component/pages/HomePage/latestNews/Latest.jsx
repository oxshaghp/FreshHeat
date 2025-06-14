import React from "react";
import { FaUser } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Latest() {
  const blogs = [
    {
      id: 1,
      title: "Fast Food Frenzy a Taste of Convenience",
      image: "../Home/latestFood/blogThumb1_1.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
    {
      id: 2,
      title: "Benefits of health and safety measures",
      image: "../Home/latestFood/blogThumb1_2.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
    {
      id: 3,
      title: "Quick Cravings Unraveling Fast Food Delights",
      image: "../Home/latestFood/blogThumb1_3.jpg",
      author: "admin",
      time: {
        day: "15",
        month: "Dec",
      },
    },
  ];
  return (
    <section className="relative mt-10 mb-20 w-full min-h-[500px]">
      <img
        src="../Home/latestFood/pizza-shape.png"
        alt="food Image"
        className="absolute top-0 right-0 hidden lg:block"
      />

      <div className="mb-10">
        <h3 className="font-bold text-[var(--orange)] mb-1 relative flex items-center justify-center text-[1.2rem] gap-2">
          <span>
            <img src="../Home/titleIcon.svg" alt="" />
          </span>
          OUR CHEFE
          <span>
            <img src="../Home/titleIcon.svg" alt="" />
          </span>
        </h3>
        <h1 className="font-bold text-[3rem] text-center">
          Meet Our Expert Chefe
        </h1>
      </div>

      <div className="mx-auto flex items-center justify-center gap-10 flex-wrap">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-[400px] h-[500px] bg-white">
            <img src={blog.image} alt="Blog Image" className="w-full" />
            <div className="p-5">
              <div className="flex items-center gap-10 mb-5">
                <div className="w-[70px] h-[70px] text-white bg-[var(--red)] flex flex-col items-center justify-center">
                  <span className="font-bold text-2xl">{blog.time.day}</span>
                  <span className="capitalize text-sm">{blog.time.month}</span>
                </div>

                <span className="capitalize text-[var(--text)] flex items-center gap-2">
                  <FaUser />
                  by {blog.author}
                </span>
              </div>

              <h3 className="font-bold capitalize text-2xl">{blog.title}</h3>

              <Link
                className="text-[var(--text)] flex items-center gap-2 mt-5 hover:text-[var(--orange)] transition-all duration-300"
                to="#"
              >
                Read More <GoArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <img
        src="../Home/latestFood/burger-shape.png"
        alt="food Image"
        className="absolute bottom-0 left-0 hidden lg:block"
      />
    </section>
  );
}

export default Latest;
