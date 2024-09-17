import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import Card from "./Card";
import { DATA_IMG_URL } from "../Constant";

const DetailedCard = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [resOffers, setResOffers] = useState(null);
  const [resMenuList, setResMenuList] = useState(null);
  const { resMenuData } = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  useEffect(() => {
    if (resMenuData && resMenuData.length > 0) {
      setResInfo(
        resMenuData.find((item) => item?.card?.card?.info)?.card?.card?.info ||
          null
      );

      setResOffers(
        resMenuData.find(
          (item) => item?.card?.card?.gridElements?.infoWithStyle?.offers
        )?.card?.card?.gridElements?.infoWithStyle?.offers || []
      );

      setResMenuList(
        resMenuData.find(
          (item) => item?.groupedCard?.cardGroupMap?.REGULAR?.cards
        )?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
      );
    }
  }, [resMenuData]);

  if (resInfo === null) return <Shimmer />;
  const {
    city,
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
  } = resInfo;

  // Slick slider settings
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  if (onlineStatus === false)
    return (
      <Card
        text1="Something is wrong"
        text2="Sorry we couldn't find the page you are looking for"
        label="Go to Homepage"
      />
    );
  return (
    <div className="item-cont w-11/12 lg:w-8/12 m-auto my-16 ">
      <div className="flex justify-between items-center pb-5  border-b border-dashed border-light-gray">
        <div>
          <p className="font-bold text-xl text-gray-800">{name}</p>
          <p className="text-[13px] mt-2 text-gray-300">
            {cuisines.join(", ")}
            <br />
            <span>
              {city}, {areaName}
            </span>
          </p>
        </div>
        <div className="rating text-end">
          <p className="text-green-500 font-bold mb-2">
            <span className="text-lg">★</span>
            {avgRating}
          </p>
          <span>{totalRatingsString}</span>
        </div>
      </div>
      <div className="my-4 cursor-pointer border-b border-light-gray">
        <Slider {...settings}>
          {resOffers.map((offer, index) => (
            <div
              className="inline-block rounded-md border p-3 text-xs"
              key={index}
            >
              <div className="text-sm xs:text-xs font-bold text-zinc-600 whitespace-nowrap mb-1 flex items-center gap-2 ">
                <img
                  className="w-5 xs:w-3 xs:text-xs"
                  src={DATA_IMG_URL + offer?.info?.offerLogo}
                  alt=""
                />{" "}
                <span>{offer?.info?.header}</span>
              </div>
              <div className="whitespace-nowrap xs:text-xs font-bold text-gray-400">
                {offer?.info?.couponCode} | {offer?.info?.description}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="pb-4 border-b border-light-gray">
        {resMenuList.map((el, index) => {
          const { title, itemCards } = el?.card?.card;
          const isExpanded = expandedIndexes.includes(index);
          return (
            itemCards && (
              <div key={index} className="border-t border-gray-300 border-opacity-30">
                <MenuItem
                  title={title}
                  itemCards={itemCards}
                  index={index}
                  showItems={isExpanded}
                  showExpanded={() => {
                    if (isExpanded) {
                      setExpandedIndexes(
                        expandedIndexes.filter((i) => i !== index)
                      );
                    } else {
                      setExpandedIndexes([...expandedIndexes, index]);
                    }
                  }}
                />
              </div>
            )
          );
        })}
      </div>
      <p className="text-[13px] mt-5 text-gray-400 font-semibold">
        Made by Nisha Kumari🦋
      </p>
    </div>
  );
};

export default DetailedCard;
