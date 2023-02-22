import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Reviews from "../Reviews/Reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgress } from "@mui/material";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-server-kohl.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2 style={{ padding: "20px", color: "#151E11" }}>
        Our Customer Realtime Reviews
      </h2>
      {review.length === 0 ? (
        <CircularProgress />
      ) : (
        <Slider {...settings}>
          {review.map((reviews) => (
            <Reviews key={reviews._id} reviews={reviews}></Reviews>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Review;
