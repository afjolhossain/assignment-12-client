import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Reviews = ({ reviews }) => {
  const { name, image, rating, opinion } = reviews;
  return (
    <Grid item xs={4} sm={4} md={4} sx={{}}>
      <Container
        sx={{
          backgroundColor: "#C6A481",
          display: "flex",
          borderRadius: "10px",
        }}
      >
        <Box>
          <img
            style={{ borderRadius: "50%", marginTop: "30px" }}
            src={image}
            alt=""
          />
        </Box>
        <Box
          sx={{
            m: 1,
            width: 258,
            height: 200,
            textAlign: "start",
            marginLeft: "20px",
          }}
        >
          <Typography sx={{ color: "#2B3430" }}>Md:{name}</Typography>
          <Typography sx={{ color: "#61405F" }}>
            <span style={{ color: "#34495E " }}>Opinion:</span> {opinion}
          </Typography>
          <Typography sx={{ color: "#010F0A" }}>Rating: {rating}</Typography>
        </Box>
      </Container>
    </Grid>
  );
};

export default Reviews;
