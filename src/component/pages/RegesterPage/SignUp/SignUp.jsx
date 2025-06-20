import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, provider, db } from "/src/Config/Firebase.js";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: formData.name,
      });

      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        uid: user.uid,
        createdAt: new Date(),
      });

      toast.success("Account created successfully!");
      window.location.href = "/";
    } catch (error) {
      toast.error(error.message || "Sign up failed.");
    }
  };
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber || "",
        uid: user.uid,
        createdAt: new Date(),
        provider: "google",
      });

      toast.success(`Welcome ${user.displayName}!`);
      window.location.href = "/";
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Google sign-up failed.");
    }
  };

  return (
    <section className="w-full relative mt-32 mb-32 flex flex-wrap xl:flex-nowrap gap-10 items-center justify-center">
      <ToastContainer position="top-center" />

      <div className="xl:-ml-24">
        <LazyLoadImage
          effect="blur"
          src="/public/Contact/contactThumb2_1.png"
          alt="Sign Up"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Sign Up
          </h2>
          <div className="flex justify-center items-center flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer mt-6 bg-red-600 hover:bg-red-700 transition text-white py-3 rounded font-bold"
          >
            Sign Up →
          </button>

          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500">or</span>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold transition"
          >
            <FaGoogle />
            Sign up with Google
          </button>

          <Link
            to={"/login"}
            className="block text-sm font-bold text-blue-600 cursor-pointer mt-6 text-center"
          >
            Already have an account? Log In
          </Link>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
