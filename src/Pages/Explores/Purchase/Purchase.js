import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Order from "../Order/Order";

const Purchase = () => {
  const { exploresId } = useParams();
  const [explores, setExplores] = useState({});

  useEffect(() => {
    const url = `https://assignment-12-server-kohl.vercel.app/explores/${exploresId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setExplores(data));
  }, [exploresId]);
  return (
    <div>
      <Navigation></Navigation>

      <Grid
        container
        columns={{ xs: 6, sm: 8, md: 12 }}
        sx={{ padding: "10px", marginTop: 10 }}
      >
        <Grid item xs={7} sx={{ margin: "auto" }}>
          <img
            style={{ width: "300px", margin: "auto" }}
            src={explores.image}
            alt=""
          />
          <Box sx={{ textAlign: "start", marginLeft: "15px" }}>
            <Typography
              sx={{ fontWeight: "700px", color: "#070100" }}
              variant="h6"
            >
              Name: {explores.name}
            </Typography>
            <Typography sx={{}} variant="subtitle2">
              <span style={{ color: "#1a237e", fontWeight: "900px" }}>
                Description:
              </span>
              {explores.description}
            </Typography>
            <Typography variant="h6">Price: ${explores.price}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ margin: "auto" }}>
          <Order></Order>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Purchase;
