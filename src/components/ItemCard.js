import React from "react";
import defaultImg from "../assets/default.png";
import { addItem, sumItemPrice } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { DATA_IMG_URL } from "../Constant";

const ItemCard = ({ name, description, defaultPrice, price, imageId }) => {
  const item = { name, description, defaultPrice, price, imageId };
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(sumItemPrice(item.defaultPrice / 100 || item.price / 100));
  };
  return (
    <div className="flex justify-between gap-16 items-start px-2 pt-5 pb-6 mr-2 border-b border-light-gray">
      <div className="w-10/12">
        <div className="flex justify-start items-center ">
          <img
            className="h-4 w-[18px] sm:w-[14px] sm:h-3"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNQZEuoevpZLelQdB9nuoFFn_3mjyozjTAlUNwQTiI__Vm8BYY"
            alt=""
          />
          <span>⭐</span>
          <span className="text-orange-400 sm:text-xs"> Bestseller</span>
        </div>
        <h4 className="font-semibold text-md text-gray-800">{name}</h4>
        <p className="text-sm font-semibold text-black mt-1">
          ₹ {defaultPrice / 100 || price / 100}
        </p>
        <p className="text-xs mt-3 font-[500] text-[#a1a1aa] ">{description}</p>
      </div>
      <div className="w-[130px] h-[120px] relative">
        <img
          src={
            imageId ? DATA_IMG_URL + imageId : defaultImg
          }
          alt="hey"
          className="rounded-lg w-[100%] h-[120px] object-cover"
        />
        <button
          className="bg-white w-full rounded-lg py-2 text-yellow shadow relative top-[-24%] bottom-0 border border-yellow text-[12px] font-bold hover:bg-black hover:border-white hover:text-white"
          onClick={() => handleAddItem(item)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
