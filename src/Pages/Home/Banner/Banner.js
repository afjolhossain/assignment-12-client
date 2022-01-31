import React from "react";
import Carousel from "react-material-ui-carousel";
import banner2 from "../../../images/bannere.jpg";
import banner3 from "../../../images/banner-3.jpg";
import banner4 from "../../../images/banner-2.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img
            style={{ width: "100%", height: "550px" }}
            src={banner2}
            alt=""
          />
        </div>
        <img style={{ width: "100%", height: "550px" }} src={banner3} alt="" />
        <img style={{ width: "100%", height: "550px" }} src={banner4} alt="" />
      </Carousel>
    </div>
  );
};

export default Banner;
