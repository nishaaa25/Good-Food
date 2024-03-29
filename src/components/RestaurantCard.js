import React from "react";
import { Link  } from "react-router-dom";
import "../index.css";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  const cuisinesNew = cuisines.join(", ");
  return (
    <div className="w-[94vw] md:w-[46vw] lg:w-[25vw] xl:w-[17vw] p-2 shadow relative mb-8 group">
      <div className="hover:text-orange-400 text-gray-800">
        <div className="w-[100%] h-[200px] relative">
          <img
            src={
              "https://corsproxy.org/?https%3A%2F%2Fres.cloudinary.com%2Fswiggy%2Fimage%2Fupload%2Ffl_lossy%2Cf_auto%2Cq_auto%2Cc_fill%2F"+cloudinaryImageId
            }
            className="w-[100%] h-[100%] object-cover rounded-b-xl group-hover:w-[95%] group-hover:h-[190px] m-auto transition-all transition-1s"
            alt="heyeyy"
          />
        </div>
        <div className="flex justify-between pt-3">
          <p className="font-bold text-lg">
            {name.length > 17 ? name.slice(0, 17) + "..." : name}
          </p>
          <p className="text-md font-semibold">
            {avgRating}
            <span>⭐</span>
          </p>
        </div>
        <p className="text-sm mt-1">
          {cuisinesNew.length > 36
            ? cuisinesNew.slice(0, 36) + "..."
            : cuisinesNew}
        </p>
      </div>

      <div className="mt-6 flex justify-between">
        <span className="font-semibold text-green-800">{costForTwo}</span>
        <button className="px-3 py-1 bg-yellow text-white rounded-md hover:bg-black">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const withOpenLabel = () => {
  return ({ resData }) => {
    const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <label className="absolute top-[48%] left-2 rounded-r-lg px-4 py-2 text-white z-10 font-extrabold bg-black text-lg">
          <p>{header + " " + subHeader} </p>
        </label>{" "}
        <Link key={resData.info.id} to={"/restaurant/" + resData.info.id}>
          <RestaurantCard resData={resData} />
        </Link>
      </div>
    );
  };
};
