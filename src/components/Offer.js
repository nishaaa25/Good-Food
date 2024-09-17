import React from "react";
import useOfferRes from "../utils/useOfferRes";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Offer = () => {
  const restaurants = useOfferRes();
  const CardOpen = withOpenLabel(RestaurantCard);
  if(restaurants === null) return <Shimmer/>
  return (
    <div className="my-6 lg:my-16 px-2 lg:w-10/12 xl:w-9/12 lg:m-auto  ">
      <p className="text-sm px-2 mb-4 font-semibold text-gray-800">
        Home/<span>Offers</span>
      </p>
      <p className="text-2xl px-2 font-bold mb-6"> 
        Restaurants With Great Offers Near Me
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between place-items-center lg:justify-start lg:gap-[1%]">
        {restaurants &&
          restaurants.map((res) => {
            if (res?.info?.aggregatedDiscountInfoV3?.header !== undefined) {
              return (
                <div>
                  <CardOpen resData={res} />
                </div>
              );
            } else return "";
          })}
      </div>
    </div>
  );
};

export default Offer;
