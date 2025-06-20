import React, { useEffect } from "react";
import Button from "/src/component/static/Button";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import useCartContext from "/src/component/context/CartContext/UseCartContext";
import useCheckOutContext from "/src/component/context/CheckOutContext/useCheckOutContext";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    cartItems,
    DecreaseQuantity,
    IncreaseQuantity,
    ClearCart,
    RemoveFromCart,
  } = useCartContext();
  const {
    total,
    discount,
    finalTotal,
    promoCode,
    setPromoCode,
    promoMessage,
    handlePromoCode,
  } = useCheckOutContext();

  return (
    <section className="min-h-screen bg-[#f8f9fa] flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-lg text-gray-600 text-center">
          Your cart is empty.
          <Button text="Visit shop" link="/shop" />
        </div>
      ) : (
        <div className="flex flex-col flex-wrap lg:flex-row gap-10">
          {/* left side section*/}
          <div className="w-full lg:w-[950px] bg-white rounded-2xl shadow-md p-8 grow-1">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl flex items-center gap-2">
                Cart
                <span className="font-normal text-sm text-[var(--text)]">
                  ({cartItems.length} products)
                </span>
              </h1>
              <button
                onClick={() => {
                  ClearCart();
                }}
                className="cursor-pointer text-[var(--red)] font-bold"
              >
                Clear Cart
              </button>
            </div>

            {/* cart items section*/}
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-4 gap-4"
                >
                  <div className="lg:w-[400px] w-full flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <h1 className="font-semibold text-lg">{item.name}</h1>
                  </div>

                  <div className="flex items-center gap-2 w-[125px]">
                    <button
                      onClick={() => {
                        DecreaseQuantity(item.id);
                      }}
                      className="px-2 cursor-pointer py-1 bg-gray-200 w-[25px] h-[25px] flex items-center justify-center rounded-full"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => {
                        IncreaseQuantity(item.id);
                      }}
                      className="px-2 cursor-pointer py-1 bg-gray-200 w-[25px] h-[25px] flex items-center justify-center rounded-full"
                    >
                      +
                    </button>
                  </div>

                  <div className="w-[125px] flex items-center">
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>

                  <button
                    onClick={() => RemoveFromCart(item.id)}
                    className="cursor-pointer text-2xl"
                  >
                    <TiDelete />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* right side section*/}
          <div className="w-full lg:w-[400px] bg-white rounded-2xl shadow-md p-8">
            {/* promo code section*/}
            <div className="mb-5 border-b border-gray-200 pb-5">
              <h1 className="font-bold">Promo Code</h1>
              <div className="w-full border border-[#eee] rounded-full p-2 flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Enter your promo code"
                  className="w-full border-none outline-none"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button
                  onClick={handlePromoCode}
                  className="bg-black text-white px-6 py-1 rounded-full cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoMessage && (
                <div
                  className={`mt-2 text-sm ${
                    promoMessage.includes("applied")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {promoMessage}
                </div>
              )}
            </div>

            {/* total price section*/}
            <div>
              <div className="flex flex-col gap-2">
                <div className="w-full flex items-center justify-between text-[#777]">
                  <h1>Subtotal</h1>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="w-full flex items-center justify-between text-[#777]">
                  <h1>Discount</h1>
                  <span>${discount.toFixed(2)}</span>
                </div>
                <div className="w-full flex items-center justify-between">
                  <h1>Total</h1>
                  <span className="font-bold text-lg">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="w-full bg-black text-white px-6 py-2 mt-4 rounded-full cursor-pointer">
                <Link to="/checkout">Go to checkout</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
