import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Order = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://assignment-12-server-kohl.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Ordered Successfully");
        }
        data.reset();
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography
        sx={{
          marginTop: "10px",
          fontFamily: "serif",
          fontSize: "22px",
          fontWeight: "700px",
        }}
      >
        Order Peoduct
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "10px",
          paddingLeft: "15px",
          paddingTop: "10px",
        }}
      >
        <TextField label="Name" defaultValue={user.displayName} />

        <TextField label="Email" defaultValue={user.email} />
        <TextField label="Address" defaultValue="" {...register("address")} />
        <TextField label="Phone-Number" {...register("phoneNumber")} />

        <TextField style={{ color: "white" }} type="submit">
          SUBMIT
        </TextField>
      </Box>
    </form>
  );
};

export default Order;
