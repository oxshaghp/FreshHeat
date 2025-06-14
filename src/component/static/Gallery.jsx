import React from "react";
import { FaInstagram } from "react-icons/fa";

function Gallery() {
  return (
    <section className="relative mt-10 flex flex-wrap items-center justify-center gap-5">
      <div className="max-w-[300px] max-h-[300px] relative overflow-hidden group">
        <img
          src="../Home/gallery/galleryThumb1_1.jpg"
          alt="galley image"
          className="w-full"
        />
        <div className=" bg-black opacity-0 h-full w-[90%] absolute left-[50%] transform translate-x-[-50%] z-10 bottom-[-20rem] group-hover:bottom-0 group-hover:opacity-[0.8] transition-all duration-500">
          <a
            href="#"
            className="text-[var(--text)] flex items-center justify-center h-full w-full text-4xl hover:text-[var(--white)]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="max-w-[300px] max-h-[300px] relative overflow-hidden group">
        <img
          src="../Home/gallery/galleryThumb1_2.jpg"
          alt="galley image"
          className="w-full"
        />
        <div className=" bg-black opacity-0 h-full w-[90%] absolute left-[50%] transform translate-x-[-50%] z-10 bottom-[-20rem] group-hover:bottom-0 group-hover:opacity-[0.8] transition-all duration-500">
          <a
            href="#"
            className="text-[var(--text)] flex items-center justify-center h-full w-full text-4xl hover:text-[var(--white)]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="max-w-[300px] max-h-[300px] relative overflow-hidden group">
        <img
          src="../Home/gallery/galleryThumb1_3.jpg"
          alt="galley image"
          className="w-full"
        />
        <div className=" bg-black opacity-0 h-full w-[90%] absolute left-[50%] transform translate-x-[-50%] z-10 bottom-[-20rem] group-hover:bottom-0 group-hover:opacity-[0.8] transition-all duration-500">
          <a
            href="#"
            className="text-[var(--text)] flex items-center justify-center h-full w-full text-4xl hover:text-[var(--white)]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="max-w-[300px] max-h-[300px] relative overflow-hidden group">
        <img
          src="../Home/gallery/galleryThumb1_4.jpg"
          alt="galley image"
          className="w-full"
        />
        <div className=" bg-black opacity-0 h-full w-[90%] absolute left-[50%] transform translate-x-[-50%] z-10 bottom-[-20rem] group-hover:bottom-0 group-hover:opacity-[0.8] transition-all duration-500">
          <a
            href="#"
            className="text-[var(--text)] flex items-center justify-center h-full w-full text-4xl hover:text-[var(--white)]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="max-w-[300px] max-h-[300px] relative overflow-hidden group">
        <img
          src="../Home/gallery/galleryThumb1_5.jpg"
          alt="galley image"
          className="w-full"
        />
        <div className=" bg-black opacity-0 h-full w-[90%] absolute left-[50%] transform translate-x-[-50%] z-10 bottom-[-20rem] group-hover:bottom-0 group-hover:opacity-[0.8] transition-all duration-500">
          <a
            href="#"
            className="text-[var(--text)] flex items-center justify-center h-full w-full text-4xl hover:text-[var(--white)]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
