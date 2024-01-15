import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D25.5940947%26lng%3D85.1375645%26restaurantId%3D" +
        resId
    );
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
