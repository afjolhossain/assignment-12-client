import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Order = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://sheltered-wildwood-44278.herokuapp.com/orders", {
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
    <div xs={12} columns={{ xs: 4, sm: 8, md: 12 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: " #3A754D",
          height: "310px",
          width: "400px",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
        <h1>Order Your Product</h1>
        <input
          style={{ width: "70%", height: "20px", marginTop: "8px" }}
          defaultValue={user.displayName}
          {...register("name", { required: true })}
        />

        <input
          style={{ width: "70%", height: "20px", marginTop: "8px" }}
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <input
          style={{ width: "70%", height: "20px", marginTop: "8px" }}
          placeholder="Address"
          defaultValue=""
          {...register("address")}
        />
        <input
          style={{ width: "70%", height: "20px", marginTop: "8px" }}
          placeholder="phone Number"
          defaultValue=""
          {...register("phoneNumber")}
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          style={{
            width: "72%",
            height: "30px",
            marginTop: "8px",
            backgroundColor: "#DD6821",
            fontWeight: "700px",
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Order;
