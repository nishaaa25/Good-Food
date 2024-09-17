import { useEffect, useState } from "react";
import getData from "./getData";
import { SWIGGY_DATA_URL } from "../Constant";

const useOfferRes = () => {
  const [resList, setResList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await getData(SWIGGY_DATA_URL);
    setResList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    console.log(resList);
  };

  return resList;
};

export default useOfferRes;
