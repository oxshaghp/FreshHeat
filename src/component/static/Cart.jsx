import React, { useContext } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import AppContext from "../context/AppContext";
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa6";

function Cart() {
  const { setCartOpen } = useContext(AppContext);
  return (
    <div className="h-full w-[400px] bg-[var(--dark)] relative shadow-lg rounded-lg p-4 flex flex-col">
      <div>
        <h2 className="text-[var(--white)] text-2xl font-bold mb-4 text-center">
          Your Cart
        </h2>

        <button
          onClick={() => setCartOpen(false)}
          className="absolute top-4 right-4 text-[var(--white)] text-2xl cursor-pointer"
        >
          <IoClose />
        </button>
      </div>
      <div className="w-full flex items-center gap-4 mb-4 bg-[var(--white)] rounded-md p-2">
        <div className="w-16 h-16 flex-shrink-0 bg-black rounded-md">
          <img
            src="PATH_TO_IMAGE"
            alt="Item Name"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[var(--text)] text-lg capitalize">
              Item Title
            </span>
            <button className="cursor-pointer hover:text-[var(--red)] text-black transition-all duration-500">
              <FaTrash />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-700 font-bold">$19.99</span>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center cursor-pointer bg-[var(--dark)] rounded-full w-[20px] h-[20px] text-center text-[22px]">
                <IoIosRemove />
              </button>
              <span className="text-[var(--black)] font-bold">1</span>
              <button className="flex items-center justify-center cursor-pointer bg-[var(--dark)] rounded-full w-[20px] h-[20px] text-center text-[22px]">
                <IoIosAdd />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
