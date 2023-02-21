import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../../../images/logo.jpg";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: 10,
        padding: 4,

        backgroundImage: "linear-gradient(181deg, #0093E9 0%, #80D0C7 100%)",
        lineHeight: 10,
      }}
    >
      <Grid style={{ color: "black" }} container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography sx={{ fontWeight: "700px" }}>AUTO ENTHUSIASTS</Typography>

          <Typography sx={{ mt: 2 }}>News</Typography>
          <Typography>Reviews</Typography>
          <Typography> Forum</Typography>
          <Typography>Autogasm</Typography>
          <Typography> Gallery</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{ fontWeight: "700px" }}>RESEARCH</Typography>
          <Typography sx={{ mt: 2 }}> New Cars</Typography>
          <Typography>New Bikes</Typography>
          <Typography>Used Cars</Typography>
          <Typography> Sell Car</Typography>
          <Typography>Compare Bikes</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography sx={{ fontWeight: "700px" }}>OUR ADDRESS</Typography>
          <Typography sx={{ mt: 2 }}> Bangladesh-3162</Typography>
          <Typography> Call Now</Typography>
          <Typography> 01741147274</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <img style={{ width: "100px" }} src={logo} alt="" />
        </Grid>
      </Grid>
      <Typography
        style={{ textAlign: "center", color: "#b71c1c", font: "bold" }}
      >
        Copyright © 2022.Company Mysterygift.Top All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
