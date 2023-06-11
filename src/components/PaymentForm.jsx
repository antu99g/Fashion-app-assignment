/* eslint-disable react/prop-types */
import { FaLock } from "react-icons/fa";

function PaymentForm({ handleInitiatePayment }) {
  return (
    <form className="w-full px-5">
      <div className="mb-5 flex flex-col">
        <label className="mb-1.5">Card number</label>
        <input
          type="number"
          maxLength={16}
          className="py-2 pl-5 bg-white border-black border rounded-md"
        />
      </div>

      <div className="mb-5 flex flex-col">
        <label className="mb-1.5">Name on card</label>
        <input
          type="text"
          className="py-2 pl-5 bg-white border-black border rounded-md"
        />
      </div>

      <div className="mb-5 flex justify-between">
        <span className="w-[48.5%] flex flex-col">
          <label className="mb-1.5">Expiration date</label>
          <input
            type="number"
            maxLength={5}
            className="py-2 pl-5 bg-white border-black border rounded-md"
          />
        </span>

        <span className="w-[48.5%] flex flex-col">
          <label className="mb-1.5">Security code</label>
          <input
            type="number"
            maxLength={3}
            className="py-2 pl-5 bg-white border-black border rounded-md"
          />
        </span>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 flex justify-center items-center bg-pink font-medium text-white rounded-lg"
        onClick={handleInitiatePayment}
      >
        <FaLock className="mr-3" />
        <span>Pay now</span>
      </button>
    </form>
  );
}

export default PaymentForm;
