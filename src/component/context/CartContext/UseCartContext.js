import { useContext } from "react";
import CartContext from "./CartContext";

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
