import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import specialBanner from "../../../images/special.jpg";

const SpecialBannerBG = {
  background: `url(${specialBanner})`,
  backgroundRepeat: "round",
  backgroundColor: "#5D6D7E ",
  height: "600px",
  backgroundBlendMode: "darken, luminosity",
  marginBottom: "40px",
};

const SpicalBanner = () => {
  return (
    <div>
      <h1 style={{ color: "#441440", fontWeight: "700", fontSize: "40px" }}>
        Our Upcoming Products
      </h1>
      ;
      <Container style={SpecialBannerBG}>
        <Box sx={{ width: "330px", marginRight: 20 }}>
          <br />
          <br />
          <br />
          <Typography variant="h5" sx={{ color: "white", textAlign: "start" }}>
            Do not go unnoticed on the new Streetfighter V2
          </Typography>
          <br />
          <br />
          <Typography variant="h6" sx={{ color: "white", textAlign: "start" }}>
            Express your gritty spirit to the full and move nimbly through the
            city without ever going unnoticed. Choose your look on the Ducati
            Shop
          </Typography>
          <br />
          <Button
            sx={{
              color: "white",
              alignItems: "start",
              width: "150px",
              height: "50px",
              backgroundColor: "#E44923",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default SpicalBanner;
