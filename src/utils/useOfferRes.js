import { useEffect, useState } from "react";

const useOfferRes = () => {
  const [resList, setResList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D25.5940947%26lng%3D85.1375645%26page_type%3DDESKTOP_WEB_LISTING"
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
