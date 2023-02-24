import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, description } = product;
  return (
    <Grid sx={{ margin: "auto" }}>
      <Card sx={{ maxWidth: 345 }}>
        <img style={{ width: "280px", height: "200px" }} src={image} alt="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            sx={{ textAlign: "center" }}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <br />
          <Link style={{ textDecoration: "none" }} to={`/purchase/${_id}`}>
            <button
              style={{
                width: "100%",
                padding: "15px",
                color: "white",
                border: "none",
                fontSize: "18px",
                fontWeight: "900px",
                borderRadius: "10px",
                backgroundImage:
                  "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
              }}
            >
              BUY NOW
            </button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
