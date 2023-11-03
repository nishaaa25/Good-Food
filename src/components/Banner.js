import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Banner = ({ items, show, label}) => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: show,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h1 className="text-xl lg:text-2xl font-bold py-2 ml-1 lg:py-4 lg:ml-2">{label}</h1>
      <Slider {...settings}>
          {items &&
            items.map((item) => {
              return (
                <div key={item.id} className="p-1 lg:p-2 outline-0 cursor-pointer">
                  <img
                    src={
                      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" +
                      item.imageId
                    }
                    alt="img"
                  />
                </div>
              );
            })}
      </Slider>
    </div>
  );
};

export default Banner;
