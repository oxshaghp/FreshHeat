import React, { useEffect, useState } from "react";
import { auth, db } from "/src/Config/Firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

function PaymentPage() {
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiration: "",
    cvv: "",
    type: "VISA",
  });
  const [cards, setCards] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  // Get current user's UID
  const user = auth.currentUser;

  // Fetch saved cards from Firestore
  const fetchCards = async () => {
    if (!user) return;
    try {
      const cardsRef = collection(db, "users", user.uid, "cards");
      const snapshot = await getDocs(cardsRef);
      const savedCards = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCards(savedCards);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

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

  const handleAddCard = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      const cardData = {
        ...card,
        number: card.number.replace(/\s/g, ""), // Remove spaces before storing
        createdAt: new Date(),
      };
      await addDoc(collection(db, "users", user.uid, "cards"), cardData);
      setCard({ name: "", number: "", expiration: "", cvv: "", type: "VISA" });
      setShowAdd(false);
      fetchCards(); // refresh list
    } catch (err) {
      console.error("Error saving card:", err);
    }
  };

  const handleRemoveCard = async (cardId) => {
    try {
      await deleteDoc(doc(db, "users", user.uid, "cards", cardId));
      setCards(cards.filter((c) => c.id !== cardId));
    } catch (err) {
      console.error("Error removing card:", err);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Payment Methods
      </h2>

      <div className="flex flex-col items-left gap-4 mb-6 w-[50%] mx-auto">
        {cards.length > 0 ? (
          cards.map((savedCard) => (
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
                onClick={() => handleRemoveCard(savedCard.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h3 className="text-gray-600 text-center">You have no cards saved</h3>
        )}

        <button
          className="flex items-center gap-2 border border-dashed border-gray-400 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100 transition"
          onClick={() => setShowAdd(true)}
        >
          <span className="text-xl">+</span> Add New Card
        </button>
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowAdd(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {/* Card Preview */}
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
                  <span className="text-xs">{card.type}</span>
                  <span className="text-xs">{card.cvv || "***"}</span>
                </div>
              </div>
            </div>

            {/* Add Card Form */}
            <form onSubmit={handleAddCard} className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  name="name"
                  value={card.name}
                  onChange={handleCardChange}
                  className="w-full px-2 py-1 border rounded text-sm"
                  placeholder="Cardholder Name"
                  required
                />
                <input
                  name="expiration"
                  value={card.expiration}
                  onChange={(e) => {
                    let raw = e.target.value.replace(/\D/g, "").slice(0, 4); // بس أرقام
                    const formatted = raw.replace(/(.{2})/, "$1/"); // MM/YY
                    handleCardChange({
                      target: { name: "expiration", value: formatted },
                    });
                  }}
                  className="w-full px-2 py-1 border rounded text-sm"
                  placeholder="MM/YY"
                  required
                  maxLength={5}
                />
              </div>

              {/* Card Number and CVV */}
              <div className="flex gap-2">
                <input
                  name="number"
                  value={card.number}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, "").slice(0, 16); // 16 رقم max
                    const formatted = raw.replace(/(.{4})/g, "$1 ").trim(); // 1234 1234...
                    handleCardChange({
                      target: { name: "number", value: formatted },
                    });
                  }}
                  inputMode="numeric"
                  pattern="^(\d{4} ?){3}\d{4}$"
                  className="w-full px-2 py-1 border rounded text-sm"
                  placeholder="1234 5678 9012 3456"
                  required
                  maxLength={19}
                />
                <input
                  name="cvv"
                  value={card.cvv}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
                    handleCardChange({
                      target: { name: "cvv", value },
                    });
                  }}
                  inputMode="numeric"
                  pattern="\d{3}"
                  className="w-full px-2 py-1 border rounded text-sm"
                  placeholder="CVV"
                  required
                  maxLength={3}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded bg-red-500 text-white hover:bg-black"
              >
                Save Card
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentPage;
