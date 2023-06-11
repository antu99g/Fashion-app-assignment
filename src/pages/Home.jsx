import { useNavigate } from "react-router-dom";

function Home() {
  // List of products
  const products = [
    {
      title: "The Marc Jacobs",
      category: "Traveler Tote",
      imageUrl: "/product-1-img.png",
      imageAlt: "product 1",
      price: "$195.00",
    },
    {
      title: "Axel Arigato",
      category: "Clean 90 Triple Sneakers",
      imageUrl: "/product-2-img.png",
      imageAlt: "product 2",
      price: "$245.00",
    },
    {
      title: "Roller Rabbit",
      category: "Vado Odelle Dress",
      imageUrl: "/p-2-product-img.png",
      imageAlt: "product 3",
      price: "$198.00",
    },
  ];

  // Hook to redirect to other pages
  const navigate = useNavigate();

  // Function to show details of a product
  const openProductPage = () => {
    return navigate("/product");
  };

  return (
    <div className="h-screen w-screen pt-10 pb-12 pl-5 overflow-x-hidden">
      <div className="h-10 mb-5 pr-5 flex justify-between items-center">
        <div className="h-7 w-7 object-cover grid place-content-center bg-black rounded-full">
          <img src="/menu-icon.svg" alt="menu icon" className="w-3.5" />
        </div>
        <div className="bg-grey rounded-full">
          <img src="/user-img.png" alt="user" className="w-11" />
        </div>
      </div>

      <h1 className="text-xl font-bold">Welcome,</h1>
      <h2 className="mb-3.5 text-md font-semi-bold text-custom-gray">
        Our Fashions App
      </h2>

      <div className="mb-6 pr-5 flex justify-between">
        <span className="w-4/5 py-1 flex bg-light-gray rounded-full">
          <img src="/search-icon.svg" alt="search" className="w-4 ml-5 mr-3" />
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 text-xs bg-light-gray focus:outline-none"
          />
        </span>

        <div className="h-10 w-10 object-cover grid place-content-center rounded-full bg-black">
          <img
            src="/home-sort-icon.svg"
            alt="sort icon"
            className="h-3.5 w-3.5"
          />
        </div>
      </div>

      <div className="pr-5 flex w-auto overflow-x-auto hide-scrollbar">
        <span className="min-w-[70vw] mr-3 py-3.5 px-3 bg-offer-img bg-cover rounded-2xl">
          <h1 className="text-xl font-bold">50% off</h1>
          <p className="mb-0.5 text-sm">On everything today</p>
          <small className="text-xs text-custom-gray font-semi-bold">
            With code:FSCREATION
          </small>
          <button className="mt-2.5 px-3 py-1 block text-xs font-semi-bold text-white bg-black rounded-full">
            Get Now
          </button>
        </span>

        <span className="min-w-[70vw] py-3.5 px-3 bg-offer-img bg-cover rounded-2xl">
          <h1 className="text-xl font-bold">70% off</h1>
          <p className="text-sm">On everything today</p>
          <small className="text-xs text-custom-gray font-semi-bold">
            With code:FSCREATION
          </small>
          <button className="mt-2.5 px-3 py-1 block text-xs font-semi-bold text-white bg-black rounded-full">
            Get Now
          </button>
        </span>
      </div>

      <div className="w-full pr-5 mt-6 mb-2.5 flex justify-between items-center">
        <h2 className="font-bold text-[1rem]">New Arrivals</h2>
        <small className="text-xs text-gray-600">View All</small>
      </div>

      <div className="pr-5 flex overflow-x-auto hide-scrollbar">
        {products.map((product, index) => {
          return (
            <div
              className={`${
                index === products.length - 1 ? "" : "mr-3.5"
              } flex flex-col items-center`}
              onClick={openProductPage}
              key={index}
            >
              <div className="w-[42vw] h-[45vw] relative">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="h-full w-full rounded-xl"
                />
                <img
                  src="/love.svg"
                  alt="favourite icon"
                  className="w-[1.2rem] p-1 absolute top-2.5 right-2.5 bg-black rounded-full"
                />
              </div>
              <h4 className="mt-2 mb-[-2px] font-semi-bold text-[.73rem]">
                {product.title}
              </h4>
              <small className="text-xs text-gray-500">
                {product.category}
              </small>
              <h4 className="font-semi-bold text-[.73rem]">{product.price}</h4>
            </div>
          );
        })}
      </div>

      <footer className="w-screen px-5 pt-3 pb-3.5 fixed left-0 bottom-0 flex justify-around rounded-t-3xl shadow-lg bg-white">
        <div className="flex items-center bg-light-gray rounded-xl">
          <div className="p-1.5 bg-black rounded-full">
            <img src="/home-icon.png" alt="home icon" className="h-2.5 w-2.5" />
          </div>
          <span className="ml-1 mr-1.5 pb-[-1px] text-xs font-semi-bold">
            Home
          </span>
        </div>

        <div>
          <img src="/cart.svg" alt="cart icon" />
        </div>
        <div>
          <img src="/notification.svg" alt="notification icon" />
        </div>
        <div>
          <img src="/profile-icon.svg" alt="profile icon" />
        </div>
      </footer>
    </div>
  );
}

export default Home;
