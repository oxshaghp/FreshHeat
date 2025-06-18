import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePaymentContext from "../../context/PaymentContext/UsePaymentContext";
function PaymentPage() {
  const [showAdd, setShowAdd] = useState(false);
  const {
    paymentItems,
    card,
    setCard,
    handleAddCard,
    removeCard,
    clearPayments,
  } = usePaymentContext();
  const formatCardNumber = (number) => {
    if (!number) return "0000 0000 0000 0000";
    const cleaned = number.replace(/\D/g, "");
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(" ").substring(0, 19) : "0000 0000 0000 0000";
  };
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Payment Methods
      </h2>

      <div className="flex flex-col items-left gap-4 mb-6 w-[50%] mx-auto">
        {paymentItems.length > 0 ? (
          paymentItems.map((savedCard) => (
            <div
              key={savedCard.id}
              className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 bg-white"
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
              <button
                onClick={() => removeCard(savedCard.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div>
            <h3 className="text-gray-600 text-center">
              You have no cards saved
            </h3>
          </div>
        )}
        <button
          className="flex items-center gap-2 border border-dashed border-gray-400 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 transition"
          onClick={() => setShowAdd(true)}
          type="button"
        >
          <span className="text-xl">+</span> Add New Card
        </button>
      </div>
      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <div className="absolute top-2 right-2">
              <button
                onClick={() => setShowAdd(false)}
                className="text-gray-400 hover:text-red-500 text-2xl"
              >
                &times;
              </button>
            </div>
            {/* preview card */}
            <div className="mb-6 flex flex-col items-center">
              <div className="w-72 h-40 rounded-xl bg-gradient-to-tr from-purple-700 to-pink-400 flex flex-col justify-between p-5 text-white mb-4">
                {/* card holder name and expiration date */}
                <div className="flex justify-between items-center">
                  <span className="text-xs">
                    {card.name || "Cardholder Name"}
                  </span>
                  <span className="text-xs">
                    {card.expiration
                      ? card.expiration
                          .replace(/[^0-9]/g, "")
                          .slice(0, 4)
                          .replace(/(\d{2})(\d{2})/, "$1/$2")
                      : "MM/YY"}
                  </span>
                </div>
                {/* card number */}
                <div className="text-lg tracking-widest font-mono">
                  {formatCardNumber(card.number)}
                </div>
                {/* card type and cvv */}
                <div className="flex justify-between items-center">
                  <span className="text-xs">VISA</span>
                  <span className="text-xs">{card.cvv ? card.cvv : "***"}</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleAddCard} className="flex flex-col gap-4"> 
              {/* name and expiration date */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs mb-1">Name</label>
                  <input
                    name="name"
                    value={card.name}
                    onChange={handleCardChange}
                    className="w-full px-2 py-1 border rounded text-sm"
                    placeholder="Cardholder Name"
                    required
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-xs mb-1">Expiration</label>
                  <input
                    type="text"
                    name="expiration"
                    value={
                      card.expiration
                        .replace(/\D/g, "") // Remove non-digits
                        .slice(0, 4) // Only 4 digits
                        .replace(/(.{2})/g, "$1/") // Add slash every 2 digits
                        .replace(/\/$/, "") // Remove trailing slash
                    }
                    onChange={(e) => {
                      // Only allow numbers, max 4 digits
                      const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
                      // Format with slash every 2 digits
                      const formatted = raw
                        .replace(/(.{2})/g, "$1/")
                        .replace(/\/$/, "");
                      handleCardChange({
                        target: {
                          name: "expiration",
                          value: formatted,
                        },
                      });
                    }}
                    className="w-full px-2 py-1 border rounded text-sm"
                    placeholder="MM/YY"
                    required
                    maxLength={5} // 4 digits + 1 slash
                  />
                </div>
              </div>
              {/* card number and cvv */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs mb-1">Card Number</label>
                  <input
                    name="number"
                    value={card.number}
                    onChange={(e) => {
                      // Remove all non-digits and limit to 16 digits
                      const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
                      // Format with spaces every 4 digits
                      const formatted = raw.replace(/(.{4})/g, "$1 ").trim();
                      handleCardChange({
                        target: {
                          name: "number",
                          value: formatted,
                        },
                      });
                    }}
                    inputMode="numeric"
                    pattern="^(\d{4} ?){3}\d{4}$"
                    className="w-full px-2 py-1 border rounded text-sm"
                    placeholder="9876 9876 9876 9876"
                    required
                    maxLength={19} // 16 digits + 3 spaces
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs mb-1">CVV</label>
                  <input
                    name="cvv"
                    value={card.cvv.replace(/\D/g, "").slice(0, 3)}
                    onChange={(e) => {
                      // Only allow numbers, max 3 digits
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 3);
                      handleCardChange({
                        target: {
                          name: "cvv",
                          value,
                        },
                      });
                    }}
                    className="w-full px-2 py-1 border rounded text-sm"
                    placeholder="***"
                    required
                    inputMode="numeric"
                    pattern="\d{3}"
                    maxLength={3}
                  />
                </div>
              </div>
              {/* submit button */}
              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setShowAdd(false)}
                  className="flex-1 py-2 rounded bg-[var(--black)] text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded bg-[var(--red)] text-white cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentPage;
