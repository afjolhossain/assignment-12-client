import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [manageProducts, setManageProducts] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-wildwood-44278.herokuapp.com/explores")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`https://sheltered-wildwood-44278.herokuapp.com/explores/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = manageProducts.filter(
              (booking) => booking._id !== id
            );
            setManageProducts(remaining);
          }
        });
    }
  };
  return (
    <div xs={12} md={6}>
      <h1 style={{ color: "#0F5BF3" }}>Manage All Orders</h1>
      <h3 style={{ color: "#0BEF99" }}>
        Total Orders Available:{manageProducts.length}
      </h3>

      <table style={{ margin: "auto" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#F43213",
              width: 700,
              textAlign: "center",
              color: "white",
              marginTop: "40",
            }}
          >
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Images</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {manageProducts.map((manageOrder) => (
            <tr
              style={{
                backgroundColor: "#808B96",
                color: "white",
                height: 30,
              }}
            >
              <td style={{ backgroundColor: "#273746", width: 150 }}>
                {manageOrder.name}
              </td>
              <td style={{ backgroundColor: "#707B7C", width: 250 }}>
                {manageOrder.description}
              </td>
              <td style={{ backgroundColor: "#707B7C", width: 250 }}>
                {manageOrder.price}
              </td>
              <td style={{ backgroundColor: "#273746", width: 150 }}>
                <img
                  style={{ width: "200px" }}
                  src={manageOrder.image}
                  alt=""
                />
              </td>
              <td className="text-center">
                <button onClick={() => handleDelete(manageOrder._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
