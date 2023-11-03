import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart from "../assets/shopping-cart.png";
import home from "../assets/home.png";
import offers from "../assets/offers.png";
import search from "../assets/search.png";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [label, setLabel] = useState("Login");

  const CartItems = useSelector((store) => store.cart.items);

  return (
    <div className="w-full shadow sticky top-0 bg-white z-20 py-1">
      <div className="flex lg:w-10/12 lg:m-auto flex-col lg:flex-row justify-between items-center my-4 mx-2">
        <div className="logo flex place-items-center">
          <img src={logo} width={60} alt="heyyyy" />
          <p className="text-orange-400 text-2xl font-bold">GoodFood</p>
        </div>
        <div className="w-[90%] lg:w-[60%] xl:w-[50%] ">
          <ul className="flex justify-between items-center font-semibold">
            <li>
              <Link to="/" className="flex place-items-center gap-2 ">
                <img src={home} alt="img" className="w-[22px] lg:w-[18px]" /> <span  className="hidden md:inline">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/search" className="flex place-items-center gap-2">
                <img src={search} alt="img" className="w-[22px] lg:w-[18px]" />
                <span className="hidden md:inline">Search</span>
              </Link>
            </li>
            <li>
              <Link to="/offer" className="flex place-items-center gap-2">
                <img src={offers} alt="img" className="w-[22px] lg:w-[18px]" /> <span className="hidden md:inline">Offers</span>
              </Link>
            </li>

            <li>
              <Link to="/cart" className="flex place-items-center gap-2">
                <img src={cart} alt="jeyyfg" className="w-[22px] lg:w-[24px]" />
                <span className="hidden md:inline">{"( " + CartItems.length + " items )"}</span>
              </Link>
            </li>
            <button
              className="px-4 text-white bg-yellow py-1 rounded-sm"
              onClick={() => {
                //   console.log("Button clicked");
                label === "Login" ? setLabel("LogOut") : setLabel("Login");
              }}
            >
              {label}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
