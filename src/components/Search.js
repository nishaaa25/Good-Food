import React from "react";
import searchLogo from "../assets/search.png";
import usePopularCuisines from "../utils/usePopularCuisines";
import Shimmer from "./Shimmer";

const Search = () => {
  const popularCuisines = usePopularCuisines();
  if(popularCuisines === null) return <Shimmer/>;
  return (
    <div className="w-10/12 lg:w-6/12 my-16 m-auto">
      <p className="text-sm mb-4 font-semibold text-gray-800">Home/<span>Search</span></p>
      <div className="flex border border-gray-400 p-3 rounded-sm mb-8">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for restaurants and food"
          className="outline-none font-semibold tracking-wide text-gray-800 text-sm w-full "
        ></input>
        <button>
          <img src={searchLogo} alt="searchLogo" width={20} />
        </button>
      </div>
      <div>
        <p className="font-bold text-xl mb-6">Popular Cuisines</p>
        <div className="flex flex-wrap cursor-pointer">
          {popularCuisines &&
            popularCuisines.map((el) => {
              return (
                <div key={el.id}>
                  <img
                    src={
                      "https://corsproxy.org/?https%3A%2F%2Fres.cloudinary.com%2Fswiggy%2Fimage%2Fupload%2Ffl_lossy%2Cf_auto%2Cq_auto%2Cc_fill%2F" +
                      el.imageId
                    }
                    alt="cuisines"
                    width={85}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Search;
