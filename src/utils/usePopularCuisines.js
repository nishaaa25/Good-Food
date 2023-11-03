import { useEffect, useState} from "react";

const  usePopularCuisines = () => {
    const [list, setList] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=25.5940947&lng=85.1375645");
      const json = await data.json();
      setList(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    };
  
    return list;
  };

export default usePopularCuisines;
