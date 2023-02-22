import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-server-kohl.vercel.app/explores")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container sx={{ margin: "auto", padding: "10px" }}>
      <h1
        style={{
          color: "#441440",
          fontWeight: "700",
          fontSize: "40px",
        }}
      >
        Our Products Available
      </h1>
      {Products.length === 0 ? (
        <CircularProgress />
      ) : (
        <Grid
          style={{ margin: "auto" }}
          container
          gap={3}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Products.slice(0, 6).map((product) => (
            <Product product={product}></Product>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Products;
