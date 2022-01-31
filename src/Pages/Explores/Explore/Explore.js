import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Explore = ({ explore }) => {
  const { _id, name, description, image, price } = explore;
  return (
    <Grid xs={12} md={4}>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ margin: "auto", marginTop: "40px" }}
      >
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
          <Typography gutterBottom variant="h6" component="div">
            Price: ${price}
          </Typography>
          <Link style={{ textDecoration: "none" }} to={`/purchase/${_id}`}>
            <Button
              sx={{
                width: "100%",
                backgroundColor: "#0C246A",
                color: "#E5E7E9",
              }}
            >
              BUY NOW
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Explore;
