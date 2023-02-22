import { Typography } from "@mui/material";
import React, { useRef } from "react";

const AddAService = () => {
  const nameref = useRef();
  const imageref = useRef();
  const descriptionref = useRef();
  const priceref = useRef();

  const handleAddService = (e) => {
    const name = nameref.current.value;
    const image = imageref.current.value;
    const description = descriptionref.current.value;
    const price = priceref.current.value;

    const newService = { name, description, price, image };

    fetch("https://assignment-12-server-kohl.vercel.app/explores", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully Added service");
          e.target.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h4">ADD A SERVICE</Typography>
      <form
        onSubmit={handleAddService}
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
          type="text"
          placeholder="Service Name"
          ref={nameref}
          style={{ height: "40px", borderRadius: "5px " }}
        />

        <input
          type="text"
          placeholder="Image-Url"
          ref={imageref}
          style={{ height: "40px", borderRadius: "5px " }}
        />

        <input
          type="text"
          placeholder="Description"
          ref={descriptionref}
          style={{ height: "40px", borderRadius: "5px " }}
        />

        <input
          type="number"
          placeholder="Price"
          ref={priceref}
          style={{ height: "40px", borderRadius: "5px " }}
        />

        <input
          type="submit"
          value="SUBMIT"
          style={{ height: "40px", borderRadius: "5px " }}
        />
      </form>
    </div>
  );
};

export default AddAService;
