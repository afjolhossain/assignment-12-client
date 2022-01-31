import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import logo from "../../../images/logo.jpg";

const Footer = () => {
  return (
    <Container sx={{ mt: "30px", backgroundColor: "#070300" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        xs={12}
      >
        <Grid item xs={3} sx={{ textAlign: "start", color: "#AAB7B8 " }}>
          <Typography sx={{ color: "#053755", fontWeight: "700px" }}>
            AUTO ENTHUSIASTS
          </Typography>

          <Typography>News</Typography>
          <Typography>Reviews</Typography>
          <Typography> Forum</Typography>
          <Typography>Autogasm</Typography>
          <Typography> Gallery</Typography>
        </Grid>
        <Grid sx={{ textAlign: "start", color: "#AAB7B8" }} item xs={3}>
          <Typography sx={{ color: "#053755", fontWeight: "700px" }}>
            RESEARCH
          </Typography>
          <Typography> New Cars</Typography>
          <Typography>New Bikes</Typography>
          <Typography>Used Cars</Typography>
          <Typography> Sell Car</Typography>
          <Typography>Compare Cars</Typography>
          <Typography>Compare Bikes</Typography>
        </Grid>
        <Grid sx={{ textAlign: "start", color: "#AAB7B8" }} item xs={3}>
          <Typography sx={{ color: "#053755", fontWeight: "700px" }}>
            OUR ADDRESS
          </Typography>
          <Typography> Bangladesh-3162</Typography>
          <Typography> Call Now</Typography>
          <Typography> 01741147274</Typography>
        </Grid>
        <Grid sx={{ color: "#AAB7B8" }} item xs={3}>
          <img style={{ width: "100px" }} src={logo} alt="" />
        </Grid>
      </Grid>
      <br />
      <Typography style={{ textAlign: "center", color: "#B8A8A0" }}>
        Copyright © 2022.Company Mysterygift.Top All Rights Reserved
      </Typography>
    </Container>
  );
};

export default Footer;
