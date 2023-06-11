import { useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import PaymentForm from "../components/PaymentForm";

function Payment() {
  // Status of initiating payment
  const [processing, setProcessing] = useState(false);

  // Status of successful payment
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Function to initiate payment
  const handleInitiatePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccess(true);
    }, 3000);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center text-['rgb(93,89,91)'] bg-gray-pink">
      {!processing && !paymentSuccess && (
        <PaymentForm handleInitiatePayment={handleInitiatePayment} />
      )}

      {processing && !paymentSuccess && (
        <div className="w-1/2 flex flex-col justify-center items-center">
          <img src="/loader.png" alt="Loading" className="w-7 animate-spin" />
          <h5 className="mb-2 mt-4 text-base font-semi-bold">
            Payment is processing...
          </h5>
          <small className="text-center text-xs text-custom-gray">
            Please wait, do not close this screen
          </small>
        </div>
      )}

      {paymentSuccess && (
        <div className="w-1/2 flex flex-col justify-center items-center">
          <BiCheckCircle className="text-lg text-green" />
          <h5 className="mb-2 mt-4 text-base font-semi-bold">
            Payment received!
          </h5>
          <small className="text-center text-xs leading-3 text-custom-gray">
            Your order is now on the way. Please check your email for the
            reciept.
          </small>
        </div>
      )}
    </div>
  );
}

export default Payment;
