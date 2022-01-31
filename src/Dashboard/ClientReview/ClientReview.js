import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const ClientReview = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://sheltered-wildwood-44278.herokuapp.com/reviews", {
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: " #3A754D",
          height: "310px",
          width: "400px",
          margin: "auto",
          borderRadius: "10px",
        }}
        xs={12}
      >
        <h1>Order Your Product</h1>
        <input
          style={{ width: "70%", height: "20px", marginTop: "8px" }}
          defaultValue={user.displayName}
          {...register("name")}
        />

        <input
          style={{ width: "70%", height: "20px", marginTop: "8px" }}
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        <input
          style={{ width: "70%", height: "40px", marginTop: "8px" }}
          placeholder="Your Opinion"
          type="text"
          defaultValue=""
          {...register("opinion")}
        />
        <input
          style={{ width: "70%", height: "20px", marginTop: "8px" }}
          placeholder="1/2/3/4/5/"
          type="number"
          defaultValue=""
          {...register("rating")}
        />
        <br />
        <input
          style={{ width: "70%", height: "20px", marginTop: "8px" }}
          placeholder="image-url"
          defaultValue={user.photoURL}
          {...register("image")}
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

export default ClientReview;
