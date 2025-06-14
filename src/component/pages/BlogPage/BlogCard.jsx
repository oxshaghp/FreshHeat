import React from "react";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function BlogCard({ blog }) {
  return (
    <>
      <div key={blog.id} className="w-[450px] h-[550px] bg-white">
        <img
          src={blog.image}
          alt={`Thumbnail for ${blog.title}`}
          loading="lazy"
          className="w-full"
        />
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
            to={`/ourStory/blogs/${blog.id}`}
          >
            Read More <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
