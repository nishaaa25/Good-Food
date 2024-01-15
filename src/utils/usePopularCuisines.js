import { useEffect, useState} from "react";

const  usePopularCuisines = () => {
    const [list, setList] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Flanding%2FPRE_SEARCH%3Flat%3D25.5940947%26lng%3D85.1375645");
      const json = await data.json();
      setList(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    };
  
    return list;
  };

export default usePopularCuisines;
