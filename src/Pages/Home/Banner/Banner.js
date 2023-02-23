import React from "react";
import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.png";
import banner3 from "../../../images/banner3.jpg";
import banner4 from "../../../images/banner4.jpg";

import banner6 from "../../../images/banner6.jpg";
import banner7 from "../../../images/banner7.jpg";
import banner8 from "../../../images/banner8.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/system";

const Banner = () => {
  const settings = {
    dots: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <Box sx={{ margin: "auto" }}>
          <img style={{ width: "100%" }} src={banner1} alt="" />
        </Box>
        <Box>
          <img style={{ width: "100%" }} src={banner2} alt="" />
        </Box>
        <Box>
          <img style={{ width: "100%" }} src={banner3} alt="" />
        </Box>
        <Box>
          <img style={{ width: "100%" }} src={banner4} alt="" />
        </Box>

        <Box>
          <img style={{ width: "100%" }} src={banner6} alt="" />
        </Box>
        <Box>
          <img style={{ width: "100%" }} src={banner7} alt="" />
        </Box>
        <Box>
          <img style={{ width: "100%" }} src={banner8} alt="" />
        </Box>
      </Slider>
    </div>
  );
};

export default Banner;
