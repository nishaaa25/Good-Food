import { useEffect, useState } from "react";

const useOfferRes = () => {
  const [resList, setResList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    console.log(resList);
  };

  return resList;
};

export default useOfferRes;
