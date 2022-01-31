import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-wildwood-44278.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <Container>
      <h1 style={{ color: "#441440", fontWeight: "700", fontSize: "50px" }}>
        Our Clients Reviews
      </h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {review.map((reviews) => (
          <Reviews key={reviews._id} reviews={reviews}></Reviews>
        ))}
      </Grid>
    </Container>
  );
};

export default Review;
