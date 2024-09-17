import React from "react";

const CircleShimmer = () => (
  <div className="relative overflow-hidden rounded-full">
    <div className="w-[110px] h-[110px] rounded-full bg-light-gray"></div>
    <div className="shimmer"></div>
  </div>
);

const BoxShimmer = () => (
  <div className="box">
    <div className="img"></div>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="w-11/12 md:w-9/12 m-auto my-16 relative overflow-hidden">
      <div className="flex flex-wrap gap-4 justify-center my-8">
        {[...Array(9)].map((_, index) => (
          <CircleShimmer key={index} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-between my-16">
        {[...Array(8)].map((_, index) => (
          <BoxShimmer key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
