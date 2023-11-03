import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imgUrl, text1, text2, label }) => {
  return (
    <div className="w-full lg:w-5/12 h-screen m-auto flex flex-col mt-28 place-items-center">
      {imgUrl ? (
        <img src={imgUrl} alt="emptycart" className="w-[320px]" />
      ) : (
        <h1 className="text-[80px] font-bold">404</h1>
      )}
      <p className="text-2xl font-bold text-gray-800 mt-8">{text1}</p>
      <p className="text-base mt-2 w-7/12 text-center text-gray-300">{text2}</p>
      <Link to="/">
        <button className="px-5 py-2 rounded-sm text-white font-semibold bg-yellow mt-8 hover:bg-black">
          {label}
        </button>
      </Link>
    </div>
  );
};

export default Card;
