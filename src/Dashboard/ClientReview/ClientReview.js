import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const ClientReview = () => {
  const { user } = useAuth();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://assignment-12-server-kohl.vercel.app/reviews", {
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
    <div>
      <Typography variant="h4">Order Your Product</Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          width: "500px",
          margin: "auto",
          gap: "10px",
          padding: "10px",
        }}
      >
        <input
          style={{ height: "40px", borderRadius: "5px " }}
          defaultValue={user.displayName}
          {...register("name")}
        />

        <input
          style={{ height: "40px", borderRadius: "5px " }}
          placeholder="Your Comment"
          type="text"
          defaultValue=""
          {...register("opinion")}
        />

        <input
          style={{ height: "40px", borderRadius: "5px " }}
          type="text"
          placeholder="Designation"
          defaultValue=""
          {...register("Designation")}
        />

        <input type="submit" style={{ height: "40px", borderRadius: "5px " }} />
      </form>
    </div>
  );
};

export default ClientReview;
