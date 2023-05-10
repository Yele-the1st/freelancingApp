import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  const active = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", active);

    return () => {
      window.removeEventListener("scroll", active);
    };
  }, []);
  const normalStyle = {
    // define the normal style without the box shadow
    // ...
  };

  const hoverStyle = {
    // define the hover style with the box shadow
    boxShadow: "4px 4px 0 black",
    transition: "box-shadow 0.5s ease-out", // added transition
    // ...
  };

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div
      className={`flex-col items-center  duration-500 top-0 sticky z-40 ${
        isActive || pathname !== "/" ? "bg-white" : "bg-[#FFFD63]"
      }`}
    >
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="text-[30px] font-bold">
          <Link to={`/`}>
            <span>Lancerr</span>
            <span className="text-[#FFFD63]">.</span>
          </Link>
        </div>
        <div className="space-x-6 items-center text-sm font-medium hidden lg:flex  ">
          <span>Lancerr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Features</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
        </div>
        {!currentUser?.isSeller && (
          <div className="flex space-x-6 text-sm items-center font-medium">
            <>
              <button
                className={`py-3.5 px-3 rounded-xl hidden sm:block cursor-pointer duration-500 hover:shadow ${
                  isActive ? "hover:bg-[#E6E6E6]" : "hover:bg-[#E6E45C]"
                }`}
              >
                Sign in
              </button>
              <button
                className={`py-3.5 px-3 rounded-xl cursor-pointer shadow ${
                  isActive ? "bg-black text-white" : "bg-[#E6E45C]"
                }`}
                style={isHovered ? hoverStyle : normalStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Sign up for free
              </button>
            </>
          </div>
        )}
        {/* <!-- Mobile menu button--> */}
        <button
          type="button"
          class="inline-flex items-center sm:hidden justify-center rounded-xl p-3 bg-black text-white hover:bg-gray-700"
          aria-controls="mobile-menu"
        >
          <span class="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <Bars3Icon
            className="block h-6 w-6 stroke-[3px]"
            aria-hidden="true"
          />
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          {/* <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> */}
        </button>
        {/* UserMenu drop-down */}
        {currentUser?.isSeller && (
          <div
            className="hidden sm:flex space-x-6 text-sm items-center font-medium cursor-pointer relative"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img
              src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="
              alt=""
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
            <span>{currentUser?.username}</span>
            {isOpen && (
              <div className="absolute flex  flex-col top-[45px] right-0  p-[20px] space-y-4 bg-white rounded-md border w-[200px] text-gray-500 font-light">
                {currentUser?.isSeller && (
                  <>
                    <Link to={`/mygigs`}>Gigs</Link>
                    <Link to={`/add`}>Add New Gigs</Link>
                  </>
                )}
                <Link to={`/orders`}>Orders</Link>
                <Link to={`/messages`}>Messages</Link>
                <Link to={`/logout`}>Logout</Link>
              </div>
            )}
          </div>
        )}
      </div>
      {(isActive || pathname !== "/") && (
        <>
          <hr className="w-full h-0 border-[0.5px] border-solid border-gray-300" />
          <div className="hidden lg:flex max-w-screen-xl mx-auto justify-between py-2.5 px-4 font-light text-sm text-gray-500">
            <Link to="/">Graphics & Design</Link>
            <Link to="/">Video & Animation</Link>
            <Link to="/">Writing & Translation</Link>
            <Link to="/">AI Services</Link>
            <Link to="/">Digital Marketing</Link>
            <Link to="/">Music & Audio</Link>
            <Link to="/">Programming & Tech</Link>
            <Link to="/">Business</Link>
            <Link to="/">Lifestyle</Link>
          </div>
          <hr className="w-full border-none h-0 lg:border-[0.5px] lg:border-solid border-gray-300" />
        </>
      )}
    </div>
  );
};

export default Navbar;
