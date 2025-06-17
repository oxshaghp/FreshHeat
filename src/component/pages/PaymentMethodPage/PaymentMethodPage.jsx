import React, { useState } from "react";
import Button from "../../static/Button";
import { Link, useNavigate } from "react-router-dom";

const PaymentMethodPage = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Pascal Benoit",
      number: "0000 0000 0000 1600",
      expiration: "09/25",
      cvv: "123",
      type: "VISA",
    },
  ]);
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiration: "",
    cvv: "",
  });
  const navigate = useNavigate();

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    if (card.name && card.number && card.expiration && card.cvv) {
      const newCard = {
        id: Date.now(),
        name: card.name,
        number: card.number,
        expiration: card.expiration,
        cvv: card.cvv,
        type: "VISA",
      };
      setCards((prev) => [...prev, newCard]);
      setCard({ name: "", number: "", expiration: "", cvv: "" });
      setShowAdd(false);
    }
  };

  const removeCard = (cardId) => {
    setCards((prev) => prev.filter((c) => c.id !== cardId));
  };

  const formatCardNumber = (number) => {
    if (!number) return "0000 0000 0000 1600";
    const cleaned = number.replace(/\D/g, "");
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(" ").substring(0, 19) : "0000 0000 0000 1600";
  };

  return (
    <div
      className="min-h-screen bg-white bg-opacity-90 flex items-center justify-center"
      style={{ background: "#F4F1EA" }}
    >
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <nav className="text-xs mb-4">
          <Link to="/profile" className="text-[var(--red)] hover:underline">
            Account
          </Link>
          <span className="mx-1">→</span>
          <span className="text-purple-700 font-semibold">Payment methods</span>
        </nav>
        <h1 className="text-2xl font-semibold mb-6">
          Choose your payment method
        </h1>
        <div className="flex flex-col gap-4 mb-6">
          {cards.map((savedCard) => (
            <div
              key={savedCard.id}
              className="flex items-center gap-4 border border-gray-200 rounded-lg p-4"
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
          ))}
          <button
            className="flex items-center gap-2 border border-dashed border-gray-400 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 transition"
            onClick={() => setShowAdd(true)}
            type="button"
          >
            <span className="text-xl">+</span> Add Payment Method
          </button>
        </div>
        <Button text="Submit" w="100%" h="48px" link="#" />
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
            <div className="mb-6 flex flex-col items-center">
              <div className="w-72 h-40 rounded-xl bg-gradient-to-tr from-purple-700 to-pink-400 flex flex-col justify-between p-5 text-white mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs">
                    {card.name || "Cardholder Name"}
                  </span>
                  <span className="text-xs">{card.expiration || "MM/YY"}</span>
                </div>
                <div className="text-lg tracking-widest font-mono">
                  {formatCardNumber(card.number)}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">VISA</span>
                  <span className="text-xs">****</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleAddCard} className="flex flex-col gap-4">
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
                    name="expiration"
                    value={card.expiration}
                    onChange={handleCardChange}
                    className="w-full px-2 py-1 border rounded text-sm"
                    placeholder="MM/YY"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="block text-xs mb-1">Card Number</label>
                  <input
                    name="number"
                    value={card.number}
                    onChange={handleCardChange}
                    className="w-full px-2 py-1 border rounded text-sm"
                    placeholder="9876 9876 9876 9876"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs mb-1">CVV</label>
                  <input
                    name="cvv"
                    value={card.cvv}
                    onChange={handleCardChange}
                    className="w-full px-2 py-1 border rounded text-sm"
                    placeholder="***"
                    type="password"
                    required
                  />
                </div>
              </div>
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
    </div>
  );
};

export default PaymentMethodPage;
