import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Explore from "../Explore/Explore";

const Explores = () => {
  const [explores, setExplores] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-server-kohl.vercel.app/explores")
      .then((res) => res.json())
      .then((data) => setExplores(data));
  }, []);
  return (
    <Container>
      <h1>More Products </h1>

      {explores.length === 0 ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {explores.map((explore) => (
            <Explore key={explores._id} explore={explore}></Explore>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Explores;
