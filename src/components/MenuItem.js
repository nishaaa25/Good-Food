import React from "react";
import ItemCard from "./ItemCard";
import arrow from "../assets/arrow.png";

const MenuItem = ({ title, itemCards, showItems, showExpanded }) => {
  const handleClick = ()=>{
    showExpanded();
  }
  return (
    <div className="cursor-pointer ">
      <div
        className={`flex justify-between items-center mt-8 py-4 px-2 rounded-sm ${
          showItems ? "bg-light-gray" : "bg-white"
        }`}
        onClick={handleClick}
      >
        <p className="font-bold text-lg text-gray-800">
          {title + " (" + itemCards.length + ")"}
        </p>
        <img src={arrow} alt="arrow" width={22} />
      </div>
      {showItems && (
        <div>
          {itemCards &&
            itemCards.map((item) => {
              const { name, id, description, imageId, defaultPrice, price } =
                item?.card?.info;
              return (
                <div key={id}>
                  <ItemCard
                    name={name}
                    description={description}
                    imageId={imageId}
                    defaultPrice={defaultPrice}
                    price={price}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
