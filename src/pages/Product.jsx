import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  // List of sizes
  const allSizes = ["S", "M", "L", "XL", "XXL"];

  // Current selected size
  const [selectedSize, setSelectedSize] = useState("L");

  // Price of current product
  const price = 198;

  // Quantity of product in cart
  const [quantity, setQuantity] = useState(1);

  // Total price of product in cart
  const [total, setTotal] = useState(() => price * quantity);

  // Function to redirect
  const navigate = useNavigate();

  // Function to reduce product quantity
  const handleReduceQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQty) => prevQty - 1);
    }
  };

  // Function to increase product quantity
  const handleAddQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  // Function to change size
  const handleSizeChange = (newSize) => {
    setSelectedSize(() => newSize);
  };

  // Function start payment
  const openPaymentPage = () => {
    return navigate("/payment");
  };

  // Function to go back to previous page
  const handleBackClick = () => {
    return navigate("/");
  };

  useEffect(() => {
    // change total when quantity changes
    setTotal(() => price * quantity);
  }, [quantity]);

  return (
    <div className="h-screen w-screen relative overflow-x-hidden">
      <div
        className="w-full h-[54%] pt-3 flex flex-col bg-cover"
        style={{ backgroundImage: `url(p-2-product-img.png)` }}
      >
        <div className="mb-1.5 px-5 flex justify-end items-center">
          <span className="mr-auto text-[0.7rem] font-thin">4:46</span>
          <img src="/wifi.svg" alt="wifi icon" className="w-3 mr-2" />
          <img src="/battery.png" alt="battery icon" className="w-5" />
        </div>

        <div className="px-6 flex justify-between">
          <img
            src="/arrow.png"
            alt="back button"
            className="w-6"
            onClick={handleBackClick}
          />
          <img src="/bag-img.png" alt="cart" className="w-6" />
        </div>

        <div className="mt-auto mb-6 px-6 flex justify-center">
          <div className="ml-auto flex items-center self-end">
            <img src="/img-list.png" className="ml-8" />
            <img src="/active-img.png" className="mx-2" />
            <img src="/img-list.png" />
          </div>

          <img
            src="/product-like.png"
            alt="like icon"
            className="w-6 ml-auto"
          />
        </div>
      </div>

      <div className="w-screen h-[48%] pt-5 px-5 absolute bottom-0 flex flex-col rounded-3xl bg-white">
        <div className="flex justify-between rounded-full">
          <div className="flex flex-col justify-center">
            <h2 className="text-base font-semi-bold">Roller Rabbit</h2>
            <small className="mb-1 text-custom-gray text-xs">
              Vado Odelle Dress
            </small>
            <div className="flex">
              <img
                src="/star-icon.svg"
                alt="star icon"
                className="w-2.5 mr-0.5"
              />
              <img
                src="/star-icon.svg"
                alt="star icon"
                className="w-2.5 mr-0.5"
              />
              <img
                src="/star-icon.svg"
                alt="star icon"
                className="w-2.5 mr-0.5"
              />
              <img
                src="/star-icon.svg"
                alt="star icon"
                className="w-2.5 mr-0.5"
              />
              <img
                src="/star-icon.svg"
                alt="star icon"
                className="w-2.5 mr-1.5"
              />
              <span className="text-xs">{`(320 Review)`}</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="ml-auto px-3 py-1 text-sm rounded-full bg-custom-gray">
              <span onClick={handleReduceQuantity}>-</span>
              <span className="mx-2">{quantity}</span>
              <span onClick={handleAddQuantity}>+</span>
            </div>
            <h5 className="mt-2 text-xs font-semi-bold">Avaliable in stock</h5>
          </div>
        </div>

        <div>
          <h4 className="mt-5 mb-2 text-sm font-semi-bold">Size</h4>
          <div className="flex">
            {allSizes.map((size) => {
              return (
                <span
                  className={`${
                    size === selectedSize
                      ? "bg-black text-white"
                      : "text-medium-gray border border-['rgb(221, 221, 221)']"
                  } w-7 h-7 mr-3 flex justify-center items-center text-[0.7rem] font-semi-bold rounded-full`}
                  onClick={() => handleSizeChange(size)}
                  key={size}
                >
                  {size}
                </span>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="mt-5 mb-2.5 text-sm font-semi-bold">Description</h4>
          <p className="text-xs text-custom-gray">
            Get a little lift from these Sam Edelman sandals featuring ruched
            straps and leather lace-up ties, while a braided jute sole makes a
            fresh statement for summer.
          </p>
        </div>

        <div className="mt-auto mb-2 flex justify-between">
          <div className="flex flex-col justify-center">
            <small className="mb-[-4px] text-[0.45rem] text-custom-gray">
              Total Price
            </small>
            <h3 className="font-bold">${total.toFixed(2)}</h3>
          </div>

          <button
            className="w-[55%] py-2.5 flex items-center bg-black text-[0.75rem] text-white font-semi-bold rounded-full"
            onClick={openPaymentPage}
          >
            <img src="/bag-icon-btn.svg" className="w-3 ml-[25%] mr-3" />
            <h4 className="mb-[-1.5px]">Buy Now</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
