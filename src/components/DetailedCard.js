import { useParams } from "react-router-dom";
import { useState } from "react";
import offerIcon from "../assets/offerIcon.gif";
import Shimmer from "./Shimmer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import Card from "./Card";

const DetailedCard = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  if (resInfo === null) return <Shimmer />;

  // Restaurant info
  const { name, cuisines, locality, avgRating, totalRatingsString, areaName } =
    resInfo?.cards[0]?.card?.card?.info;

  // Special Offers
  const offer =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  // Restaurant Menu
  const menu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(menu);

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
    <div className="item-cont w-11/12 lg:w-6/12 m-auto my-16 ">
      <div className="flex justify-between items-center pb-5  border-b border-dashed border-light-gray">
        <div>
          <p className="font-bold text-xl text-gray-800">{name}</p>
          <p className="text-[13px] mt-2 text-gray-300">
            {cuisines.join(", ")}
            <br />
            <span>
              {locality}, {areaName}
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
          {offer.map((el) => {
            const { couponCode, description, header, offerIds } = el?.info;
            return (
              <div key={offerIds} className="offers p-2 mb-4">
                <div className=" border rounded-lg border-black flex  flex-col place-items-center p-2">
                  <div className="top flex place-items-center gap-1">
                    <img src={offerIcon} alt="offerIcon" width={22} />
                    <p className="text-sm font-bold text-gray-800">{header}</p>
                  </div>
                  <p className="text-gray-300 font-semibold text-[12px]">
                    {couponCode} | {description}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="py-4 border-b border-light-gray">
        {menu.map((el, index) => {
          const { title, itemCards } = el?.card?.card;
          const isExpanded = expandedIndexes.includes(index);
          return (
            itemCards && (
              <div key={index}>
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
