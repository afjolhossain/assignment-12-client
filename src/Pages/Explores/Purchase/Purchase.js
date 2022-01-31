import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Order from "../Order/Order";

const Purchase = () => {
  const { exploresId } = useParams();
  const [explores, setExplores] = useState({});

  useEffect(() => {
    const url = `https://sheltered-wildwood-44278.herokuapp.com/explores/${exploresId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setExplores(data));
  }, [exploresId]);
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        margin: "auto",
        backgroundColor: "#717D7E",
        width: "100%",
        height: "550px",
      }}
      item
      xs={12}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item={5}>
        <img xs={12} style={{ width: "450px" }} src={explores.image} alt="" />
        <Typography sx={{ fontWeight: "700px", color: "#070100" }} variant="h4">
          Name: {explores.name}
        </Typography>
        <Typography sx={{ color: "#F0F3F4 " }} variant="subtitle2">
          Description: {explores.description}
        </Typography>
        <Typography variant="h6">Price: ${explores.price}</Typography>
      </Grid>
      <Grid item={6} xs={12} sx={{ margin: "20px" }}>
        <Order></Order>
      </Grid>
    </Container>
  );
};

export default Purchase;
