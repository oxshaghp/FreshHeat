import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../static/Button";
import { sendReceipt } from "../../../email";
import useCartContext from "../../../context/CartContext/UseCartContext";
const initialForm = {
  firstName: "",
  lastName: "",
  telephone: "",
  address: "",
  city: "",
};
function CheckOutForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { cartItems } = useCartContext();
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
    if (!form.telephone) newErrors.telephone = "Required";
    if (!form.address) newErrors.address = "This value is required";
    if (!form.city) newErrors.city = "Required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    console.log("Submit clicked", validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      sendReceipt(cartItems, form);
      navigate("/payment-method");
    }
    console.log("Form data:", form);
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
          <label className="block text-xs font-medium mb-1">
            Mobile Number
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
        <div className="flex-1">
          <label className="block text-xs font-medium mb-1">CITY</label>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none text-sm text-[var(--text)]"
          >
            <option value="">Select Governorate</option>
            {/* List of Egyptian Governorates from public API */}
            <option value="Cairo">Cairo</option>
            <option value="Giza">Giza</option>
            <option value="Alexandria">Alexandria</option>
            <option value="Dakahlia">Dakahlia</option>
            <option value="Red Sea">Red Sea</option>
            <option value="Beheira">Beheira</option>
            <option value="Fayoum">Fayoum</option>
            <option value="Gharbiya">Gharbiya</option>
            <option value="Ismailia">Ismailia</option>
            <option value="Menofia">Menofia</option>
            <option value="Minya">Minya</option>
            <option value="Qaliubiya">Qaliubiya</option>
            <option value="New Valley">New Valley</option>
            <option value="Suez">Suez</option>
            <option value="Aswan">Aswan</option>
            <option value="Assiut">Assiut</option>
            <option value="Beni Suef">Beni Suef</option>
            <option value="Port Said">Port Said</option>
            <option value="Damietta">Damietta</option>
            <option value="Sharkia">Sharkia</option>
            <option value="South Sinai">South Sinai</option>
            <option value="Kafr El Sheikh">Kafr El Sheikh</option>
            <option value="Matrouh">Matrouh</option>
            <option value="Luxor">Luxor</option>
            <option value="Qena">Qena</option>
            <option value="North Sinai">North Sinai</option>
            <option value="Sohag">Sohag</option>
          </select>
          {errors.city && (
            <span className="text-red-500 text-xs">{errors.city}</span>
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

      <button className="bg-[var(--red)] text-white py-2 px-10 rounded-sm cursor-pointer">
        CONTINUE
      </button>
    </form>
  );
}

export default CheckOutForm;
