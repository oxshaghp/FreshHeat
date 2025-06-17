import { useContext } from "react";
import CheckOutContext from "./CheckOutContext";

const useCheckOutContext = () => {
  return useContext(CheckOutContext);
};

export default useCheckOutContext;
