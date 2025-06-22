import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, provider } from "/src/Config/Firebase.js";
import { Link } from "react-router-dom";

function LogIn() {
  const [formData, setFormData] = useState({
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
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Logged in successfully!");
      window.location.href = "/";
    } catch (error) {
      toast.error(error.message || "Login failed. Check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
      window.location.href = "/";
    } catch (error) {
      console.error("Google login error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        toast.error("تم إغلاق نافذة تسجيل الدخول. يرجى المحاولة مرة أخرى.");
      } else if (error.code === "auth/popup-blocked") {
        toast.error(
          "تم حظر النافذة المنبثقة. يرجى السماح بالنوافذ المنبثقة لهذا الموقع."
        );
      } else if (error.code === "auth/unauthorized-domain") {
        toast.error(
          "هذا النطاق غير مسموح به. يرجى التحقق من إعدادات Firebase."
        );
      } else if (error.code === "auth/network-request-failed") {
        toast.error(
          "مشكلة في الاتصال بالشبكة. يرجى التحقق من اتصالك بالإنترنت."
        );
      } else {
        toast.error(`فشل تسجيل الدخول بـ Google: ${error.message}`);
      }
    }
  };

  const handleResetPassword = async () => {
    if (!formData.email) {
      toast.warn("Please enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, formData.email);
      toast.success("Password reset email sent!");
    } catch (error) {
      toast.error(error.message || "Failed to send reset email.");
    }
  };

  return (
    <section className="w-full relative mt-32 mb-32 flex flex-wrap xl:flex-nowrap gap-10 items-center justify-center">
      <ToastContainer position="top-center" />

      <div className="xl:-ml-24">
        <LazyLoadImage
          effect="blur"
          src="/Contact/contactThumb2_1.png"
          alt="Contact"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Log In
          </h2>
          <div className="flex justify-center items-center flex-col gap-4">
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
            Log In →
          </button>

          <div className="mt-2 text-sm text-center">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-blue-600 font-bold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500">or</span>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold transition"
          >
            <FaGoogle />
            Log in with Google
          </button>

          <Link
            to={"/signup"}
            className="block text-sm font-bold text-blue-600 cursor-pointer mt-6 text-center"
          >
            Create Account?
          </Link>
        </form>
      </div>
    </section>
  );
}

export default LogIn;
