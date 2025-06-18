import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../static/Button";
import useCheckOutContext from "../../../context/CheckOutContext/useCheckOutContext";
import useCartContext from "../../../context/CartContext/UseCartContext";
import CheckOutForm from "./CheckOutForm";

const CheckoutPage = () => {
  const { total, discount, finalTotal } = useCheckOutContext();
  const { cartItems } = useCartContext();

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
        <CheckOutForm />
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
