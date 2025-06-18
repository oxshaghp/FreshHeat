import { useContext } from "react";
import PaymentContext from "./PaymentContext";

const usePaymentContext = () => {
  return useContext(PaymentContext);
};

export default usePaymentContext;
