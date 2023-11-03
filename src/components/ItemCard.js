import React from "react";
import defaultImg from "../assets/default.png";
import { addItem, sumItemPrice } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({ name, description, defaultPrice, price, imageId }) => {
  const item = { name, description, defaultPrice, price, imageId };
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(sumItemPrice(item.defaultPrice/100 || item.price/100));
  };
  return (
    <div className="flex justify-between gap-16 items-start px-2 pt-5 pb-6 mr-2 border-b border-light-gray">
      <div className="w-11/12">
        <h4 className="font-semibold text-md text-gray-800">{name}</h4>
        <p className="text-sm font-semibold text-green-800">₹ {defaultPrice / 100 || price / 100}</p>
        <p className="text-[13px] mt-3 text-gray-300">{description}</p>
      </div>
      <div className="w-[160px] h-[110px] relative">
        <img
          src={
            imageId
              ? "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" +
                imageId
              : defaultImg
          }
          alt="hey"
          className="rounded-lg w-[100%] h-[100px] object-cover"
        />
        <button className="bg-white px-6 rounded-lg py-2 text-yellow shadow absolute left-[13%] lg:left-[20%] bottom-0 border border-yellow text-[12px] font-bold hover:bg-black hover:border-white hover:text-white" onClick={() => handleAddItem(item) }>ADD</button>
      </div>
    </div>
  );
};

export default ItemCard;
