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
    user,
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
    <section className="min-h-screen bg-[#f8f9fa] flex flex-col items-center py-6 sm:py-10 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Your Shopping Cart
      </h1>

      {/* رسالة للمستخدمين غير المسجلين */}
      {!user && cartItems.length > 0 && (
        <div className="w-full max-w-7xl mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="text-blue-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-blue-800 font-medium">Guest User</p>
              <p className="text-blue-600 text-sm">
                You can continue shopping and add items to your cart. You'll
                need to log in when you're ready to checkout.
              </p>
            </div>
          </div>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="text-lg text-gray-600 text-center">
          Your cart is empty.
          <Button text="Visit shop" link="/shop" />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full max-w-7xl">
          {/* left side section*/}
          <div className="w-full lg:w-[950px] bg-white rounded-2xl shadow-md p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
              <h1 className="font-bold text-xl sm:text-2xl flex items-center gap-2">
                Cart
                <span className="font-normal text-sm text-[var(--text)]">
                  ({cartItems.length} products)
                </span>
              </h1>
              <button
                onClick={() => {
                  ClearCart();
                }}
                className="cursor-pointer text-[var(--red)] font-bold text-sm sm:text-base self-start sm:self-auto"
              >
                Clear Cart
              </button>
            </div>

            {/* cart items section*/}
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-3 sm:gap-4"
                >
                  <div className="w-full sm:w-auto flex items-center gap-3 sm:gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h1 className="font-semibold text-base sm:text-lg truncate">
                        {item.name}
                      </h1>
                      <p className="text-gray-500 text-sm sm:text-base">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          DecreaseQuantity(item.id);
                        }}
                        className="px-2 cursor-pointer py-1 bg-gray-200 w-[30px] h-[30px] sm:w-[25px] sm:h-[25px] flex items-center justify-center rounded-full text-sm sm:text-base"
                      >
                        -
                      </button>
                      <span className="text-sm sm:text-base min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => {
                          IncreaseQuantity(item.id);
                        }}
                        className="px-2 cursor-pointer py-1 bg-gray-200 w-[30px] h-[30px] sm:w-[25px] sm:h-[25px] flex items-center justify-center rounded-full text-sm sm:text-base"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="text-gray-500 text-sm sm:text-base font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => RemoveFromCart(item.id)}
                        className="cursor-pointer text-xl sm:text-2xl text-red-500 hover:text-red-700"
                      >
                        <TiDelete />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* right side section*/}
          <div className="w-full lg:w-[400px] bg-white rounded-2xl shadow-md p-4 sm:p-6 lg:p-8">
            {/* promo code section*/}
            <div className="mb-5 border-b border-gray-200 pb-5">
              <h1 className="font-bold text-base sm:text-lg mb-3">
                Promo Code
              </h1>
              <div className="w-full border border-[#eee] rounded-full p-2 flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Enter your promo code"
                  className="w-full border-none outline-none text-sm sm:text-base"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button
                  onClick={handlePromoCode}
                  className="bg-black text-white px-4 sm:px-6 py-1 rounded-full cursor-pointer text-sm sm:text-base whitespace-nowrap"
                >
                  Apply
                </button>
              </div>
              {promoMessage && (
                <div
                  className={`mt-2 text-xs sm:text-sm ${
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
              <div className="flex flex-col gap-2 mb-4">
                <div className="w-full flex items-center justify-between text-[#777] text-sm sm:text-base">
                  <h1>Subtotal</h1>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="w-full flex items-center justify-between text-[#777] text-sm sm:text-base">
                  <h1>Discount</h1>
                  <span>${discount.toFixed(2)}</span>
                </div>
                <div className="w-full flex items-center justify-between text-sm sm:text-base">
                  <h1 className="font-semibold">Total</h1>
                  <span className="font-bold text-lg sm:text-xl">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="w-full bg-black text-white px-6 py-3 sm:py-2 mt-4 rounded-full cursor-pointer text-sm sm:text-base font-medium">
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
