import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../static/Button";
import useCheckOutContext from "../../../context/CheckOutContext/useCheckOutContext";
import useCartContext from "../../../context/CartContext/UseCartContext";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  telephone: "",
  address: "",
  city: "",
  zip: "",
  country: "",
  newsletter: false,
  shipToSame: true,
};

const CheckoutPage = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const { total, discount, finalTotal } = useCheckOutContext();
  const { cartItems } = useCartContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.telephone) newErrors.telephone = "Required";
    if (!form.address) newErrors.address = "This value is required";
    if (!form.city) newErrors.city = "Required";
    if (!form.zip) newErrors.zip = "Required";
    if (!form.country) newErrors.country = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/payment-method");
    }
  };

  return (
    <div className="max-w-[60%] mx-auto bg-white rounded-lg shadow-lg p-8 my-10">
      <nav className="text-[var(--text)] text-lg mb-4 flex items-center gap-2 justify-center">
        <Link
          className="font-bold text-black hover:text-[var(--red)] transition duration-500"
          to="/"
        >
          Home
        </Link>
        &gt;
        <Link
          className="font-bold text-black hover:text-[var(--red)] transition duration-500"
          to="/cart"
        >
          Cart
        </Link>
        &gt;
        <span>Checkout</span>
      </nav>

      <h1 className="text-center text-3xl font-semibold mb-4">Checkout</h1>
      {/* steps section*/}
      <div className="flex justify-center gap-10 mb-8 relative ">
        <div className="flex flex-col items-center relative after:content-[''] after:absolute after:top-[1rem] after:left-[3.6rem] after:w-[100px] after:h-[2px] after:z-10 after:bg-gray-300 text-orange-500 font-semibold">
          <span className="z-20 w-8 h-8 flex items-center justify-center rounded-full border-2 border-orange-500">
            1
          </span>
          <span className="text-xs mt-1">Billing Address</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="z-20 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300">
            2
          </span>
          <span className="text-xs mt-1">Payment Method</span>
        </div>
      </div>
      {/* billing information section*/}
      <div className="flex flex-col lg:flex-row gap-8">
        <form className="flex-1 bg-white" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-xs font-medium mb-1">
                FIRST NAME
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none text-sm text-[var(--text)]"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs">{errors.firstName}</span>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium mb-1">
                LAST NAME
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none text-sm text-[var(--text)]"
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-xs font-medium mb-1">EMAIL</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none text-sm text-[var(--text)]"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">{errors.email}</span>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium mb-1">
                TELEPHONE
              </label>
              <input
                name="telephone"
                value={form.telephone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none text-sm text-[var(--text)]"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              {errors.telephone && (
                <span className="text-red-500 text-xs">{errors.telephone}</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1">ADDRESS</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className={`w-full px-3 py-2 border text-[var(--text)] rounded focus:outline-none text-sm ${
                errors.address ? "border-red-500 focus:ring-red-400" : ""
              }`}
            />
            {errors.address && (
              <span className="text-red-500 text-xs">{errors.address}</span>
            )}
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-xs font-medium mb-1">CITY</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none text-sm text-[var(--text)]"
              />
              {errors.city && (
                <span className="text-red-500 text-xs">{errors.city}</span>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-xs font-medium mb-1">
                ZIP / POSTAL CODE
              </label>
              <input
                name="zip"
                value={form.zip}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none text-sm text-[var(--text)]"
              />
              {errors.zip && (
                <span className="text-red-500 text-xs">{errors.zip}</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-xs font-medium mb-1">COUNTRY</label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none text-sm text-[var(--text)]"
            >
              <option value="">Select...</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
            {errors.country && (
              <span className="text-red-500 text-xs">{errors.country}</span>
            )}
          </div>
          <div className="flex gap-6 items-center mb-4">
            <label className="flex items-center text-xs">
              <input
                type="checkbox"
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
                className="mr-2"
              />{" "}
              Sign Up for Newsletter
            </label>
            <label className="flex items-center text-xs">
              <input
                type="checkbox"
                name="shipToSame"
                checked={form.shipToSame}
                onChange={handleChange}
                className="mr-2 accent-[var(--red)]"
              />{" "}
              Ship to same Address
            </label>
          </div>
          <Button text="CONTINUE"></Button>
        </form>
        {/* order summary section*/}
        <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow min-w-[260px]">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Order Summary
          </h2>
          {cartItems.length === 0 ? (
            <div className="text-lg text-gray-600 text-center">
              Your cart is empty.
              <Button text="Visit shop" link="/shop" />
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-start mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded bg-gray-200 object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500 mb-1">
                      Price: ${item.price.toFixed(2)}
                    </div>
                    <div className="text-xs">Qty: {item.quantity}</div>
                  </div>
                  <div className="font-semibold text-sm ml-auto">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="border-t pt-3 text-sm">
                <div className="flex justify-between mb-1">
                  <span>Subtotal</span> <span>${total.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between mb-1 text-green-600">
                    <span>Discount</span> <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span> <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
