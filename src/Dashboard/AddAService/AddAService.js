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

    fetch("https://sheltered-wildwood-44278.herokuapp.com/explores", {
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

    e.eventDefault();
  };
  return (
    <div>
      <br />
      <form
        onSubmit={handleAddService}
        style={{
          border: "5px solid black",
          width: 400,
          height: 350,
          borderRadius: "10px",
          margin: "auto",
          backgroundColor: "#1BBB97",
        }}
      >
        <h3>ADD A SERVICE</h3>
        <input
          type="text"
          style={{ width: "300px", height: 30, marginTop: 15 }}
          placeholder="Service Name"
          ref={nameref}
        />
        <br />
        <input
          type="text"
          style={{ width: "300px", height: 30, marginTop: 10 }}
          placeholder="Image-Url"
          ref={imageref}
        />
        <br />

        <input
          type="text"
          style={{ width: "300px", height: 30, marginTop: 10 }}
          placeholder="Description"
          ref={descriptionref}
        />
        <br />
        <input
          type="number"
          style={{
            width: "300px",
            height: 30,
            marginTop: 10,
          }}
          placeholder="Price"
          ref={priceref}
        />
        <br />

        <input
          type="submit"
          style={{
            width: "310px",
            height: 40,
            marginTop: 10,
            backgroundColor: "#E2220C",
          }}
          value="SUBMIT"
        />
      </form>
    </div>
  );
};

export default AddAService;
