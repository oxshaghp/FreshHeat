import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      toast.error("You must agree before submitting.");
      return;
    }

    toast.success("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      agree: false,
    });
  };

  return (
    <section className="w-full relative  mt-20 flex flex-wrap xl:flex-nowrap gap-10  items-center justify-center ">
      <ToastContainer position="top-center" />

      <div className="xl:-ml-24">
        <img
          effect="blur"
          src="/public/Contact/contactThumb2_1.png"
          alt="Contact"
          loading="lazy"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Write your message here..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)] resize-none"
          ></textarea>

          <label className="flex items-center gap-2 text-sm text-gray-600 mt-4">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="accent-[var(--main)]"
            />
            Collaboratively formulate principle capital. Progressively evolve
            user
          </label>

          <button
            type="submit"
            className="w-full mt-6 bg-red-600 hover:bg-red-700 transition text-white py-3 rounded font-bold"
          >
            SUBMIT NOW →
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormSection;
