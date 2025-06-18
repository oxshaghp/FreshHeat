import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../static/Button";
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
function CheckOutForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
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
    <form className="flex-1 bg-white" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-xs font-medium mb-1">FIRST NAME</label>
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
          <label className="block text-xs font-medium mb-1">LAST NAME</label>
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
          <label className="block text-xs font-medium mb-1">TELEPHONE</label>
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
      <button
        onClick={() => navigate("/payment-method")}
        className="bg-[var(--red)] text-white py-2 px-10 rounded-sm cursor-pointer"
      >
        CONTINUE
      </button>
    </form>
  );
}

export default CheckOutForm;
