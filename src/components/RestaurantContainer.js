import "../index.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";

const RestaurantContainer = () => {
  const [list, setList] = useState([]);
  const [varities, setVarities] = useState([]);
  const [banner, setBanner] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING"
    );
    // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4822335&lng=73.9470036&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setBanner(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setVarities(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    console.log(json?.data);
  };

  const filterRestaurants = () => {
    const filteredRes = list.filter((res) => {
      return res.info.name
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setFilteredRestaurant(filteredRes);
  };
  const handleFilterRatings = () => {
    const temp = list.filter((eleVal) => {
      return eleVal.info.avgRating > 4;
    });
    setFilteredRestaurant(temp);
  };
  const handleFilterVegRes = () => {
    const temp = list.filter((eleVal) => {
      return eleVal.info.veg === true;
    });
    setFilteredRestaurant(temp);
  };
  const handleFilterPrice = () => {
    const temp = list.filter((eleVal) => {
      const cost = eleVal.info.costForTwo.slice(1, 4);
      console.log(cost);
      return cost > 300 && cost < 600;
    });
    setFilteredRestaurant(temp);
  };
  const handleFilterPrice2 = () => {
    const temp = list.filter((eleVal) => {
      const cost = eleVal.info.costForTwo.slice(1, 4);
      console.log(cost);
      return cost < 300;
    });
    setFilteredRestaurant(temp);
  };
  const handleFilterAll = () => {
    setFilteredRestaurant(list);
  };
  if (list.length === 0) return <Shimmer />;
  return (
    <>
    <div className="w-full my-6 lg:my-16 px-2 lg:w-10/12 xl:w-9/12 lg:m-auto  ">
      <div>
    {banner && <Banner
          items={banner}
          show={banner.length >= 3 ? 3 : 2}
          label="Best offers for you"
        />}
      </div>
      <div>
        <Banner items={varities} show={7} label="What's on your mind?" />
      </div>
      <div>
        <h1 className="py-2 ml-1 text-xl lg:text-2xl  font-bold lg:py-4 lg:ml-2">
          Restaurants with online food delivery in your area
        </h1>
        <div className="flex flex-col place-items-start lg:flex-row lg:justify-between my-2 mb-8">
          <div className="lg:ml-2">
            <button className="btn" onClick={handleFilterAll}>
              All
            </button>
            <button className="btn " onClick={handleFilterRatings}>
              Ratings 4.0+
            </button>
            <button className="btn " onClick={handleFilterVegRes}>
              Pure Veg
            </button>
            <button className="btn" onClick={handleFilterPrice}>
              Rs.300 - Rs.600
            </button>
            <button className="btn" onClick={handleFilterPrice2}>
              Less than Rs.300
            </button>
          </div>
          <div className="mt-1">
            <input
              placeholder="Search for restaurants"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="outline-none mr-1 pl-2 lg:w-[240px] border border-black py-1 rounded-sm"
            ></input>
            <button
              onClick={filterRestaurants}
              className="bg-yellow border border-yellow text-white py-1 px-4 rounded-sm"
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-[1%] place-items-center relative">
          {filteredRestaurant &&
            filteredRestaurant.map((ele) => {
              return (
                <Link key={ele.info.id} to={"/restaurant/" + ele.info.id}>
                  <RestaurantCard resData={ele} />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default RestaurantContainer;
