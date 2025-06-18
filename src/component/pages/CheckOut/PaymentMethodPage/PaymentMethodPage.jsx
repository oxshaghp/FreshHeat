import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import usePaymentContext from "../../../context/PaymentContext/UsePaymentContext";
import Button from "../../../static/Button";

const PaymentMethodPage = () => {
  const { paymentItems } = usePaymentContext();
  const [selectedCardId, setSelectedCardId] = useState(null);
  const navigate = useNavigate();

  const handleSubmitOrder = () => {
    if (!selectedCardId) {
      toast.error("Please select a payment method");
      return;
    }

    const selectedCard = paymentItems.find(
      (card) => card.id === selectedCardId
    );

    toast.success(
      `Order placed successfully. Paid with **** ${selectedCard.number.slice(
        -4
      )}`
    );

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="max-w-[60%] mx-auto bg-white rounded-lg shadow-lg p-8 my-10">
      <ToastContainer position="top-center" />
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
      <div className="flex justify-center gap-10 relative mb-8">
        <div className="flex flex-col items-center text-gray-400  relative after:content-[''] after:absolute after:top-[1rem] after:left-[3.6rem] after:w-[100px] after:h-[2px] after:z-10 after:bg-gray-300">
          <span className="z-20 w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300">
            1
          </span>
          <span className="text-xs mt-1">Payment Method</span>
        </div>
        <div className="flex flex-col items-center text-orange-500 font-semibold">
          <span className="z-20 w-8 h-8 flex items-center justify-center rounded-full border-2 border-orange-500">
            2
          </span>
          <span className="text-xs mt-1">Billing Address</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-2xl bg-[#F4F1EA] rounded-xl shadow-lg p-8">
          <nav className="text-xs mb-4">
            <Link to="/profile" className="text-[var(--red)] hover:underline">
              Account
            </Link>
            <span className="mx-1">→</span>
            <span className="text-purple-700 font-semibold">
              Payment methods
            </span>
          </nav>
          <h1 className="text-2xl font-semibold mb-6">
            Choose your payment method
          </h1>
          <div className="flex flex-col gap-4 mb-6">
            {paymentItems.length > 0 ? (
              paymentItems.map((savedCard) => (
                <div
                  key={savedCard.id}
                  className={`flex items-center gap-4 border rounded-lg p-4 bg-white cursor-pointer ${
                    selectedCardId === savedCard.id
                      ? "border-2 border-[var(--red)]"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedCardId(savedCard.id)}
                >
                  <div className="w-16 h-10 rounded bg-gradient-to-tr from-purple-700 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
                    {savedCard.type}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{savedCard.name}</div>
                    <div className="text-sm text-gray-600">
                      **** **** **** {savedCard.number.slice(-4)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h3 className="text-gray-600 text-center">
                  You have no cards saved
                </h3>
                <Button
                  text="Add Payment Method"
                  type="button"
                  link="/profile"
                />
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <button className="flex-1 py-2 rounded bg-[var(--black)] text-white cursor-pointer">
              <Link to="/checkout">Back To Checkout</Link>
            </button>
            <button
              className="flex-1 py-2 rounded bg-[var(--red)] text-white cursor-pointer"
              onClick={handleSubmitOrder}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodPage;
