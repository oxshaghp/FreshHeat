import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { chefs } from "./Main";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ChefDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { name } = useParams();
  const chef = chefs.find((c) => c.name === name);
  const otherChefs = chefs.filter((c) => c.name !== name);

  if (!chef) return <div className="p-10 text-center">Chef not found</div>;

  return (
    <div className="bg-[#f7f4ef] min-h-screen py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-shrink-0">
          <img
            src={chef.image}
            alt={chef.name}
            className="w-[350px] h-auto rounded-[20px] shadow-md"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#1c1c1c]">{chef.name}</h1>
          <p className="text-lg text-gray-600 mt-2">
            {chef.role || "Senior Cooker"}
          </p>

          <p className="text-gray-500 mt-4 leading-relaxed max-w-xl">
            Sed ut perspiciatis unde omnis iste natus error sit food voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi.
          </p>

          {/* Skills */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Skills:</h2>
            <Skill title="Cooking Chinese" percent={86} />
            <Skill title="Serve Management" percent={95} />
            <Skill title="Human Interaction" percent={75} />
          </div>

          {/* Social Icons */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Follow On</h2>
            <div className="flex items-center gap-4 text-2xl text-black">
              <FaYoutube className="hover:text-red-600 cursor-pointer transition" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
              <FaXTwitter className="hover:text-black cursor-pointer transition" />
              <FaLinkedin className="hover:text-blue-600 cursor-pointer transition" />
            </div>
          </div>
        </div>
      </div>

      {/* Other Chefs */}
      <div className="mt-32">
        <h2 className="text-3xl text-[var(--orange)] font-bold text-center mb-32">
          Other Chefs
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {otherChefs.map((c, idx) => (
            <Link key={idx} to={`/chef/${c.name}`}>
              <div className="relative bg-white rounded-t-[50%] shadow-md flex flex-col items-center mb-24 w-[300px] h-[320px] pb-8 px-4 hover:scale-105 transition-all duration-300">
                <div className="absolute -top-10 flex flex-col items-center">
                  <LazyLoadImage
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="w-[200px] rounded-full"
                    effect="blur"
                  />
                  <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 flex items-center gap-2 group">
                    <button className="bg-white hover:bg-red-500 cursor-pointer text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <FaSquareFacebook />
                    </button>
                    <button className="bg-orange-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                      <FaShareAlt />
                    </button>
                    <button className="bg-white hover:bg-red-500 cursor-pointer text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <FaLinkedin />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-6 flex flex-col items-center">
                  <h3 className="font-bold text-xl text-center cursor-pointer hover:text-[var(--red)] duration-300">
                    {c.name}
                  </h3>
                  <p className="text-gray-600 text-center">{c.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skill({ title, percent }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-[#1c1c1c]">{title}</span>
        <span className="text-sm font-medium">{percent}%</span>
      </div>
      <div className="w-full bg-gray-300 h-2 rounded">
        <div
          className="h-2 rounded bg-red-600 transition-all duration-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ChefDetails;
