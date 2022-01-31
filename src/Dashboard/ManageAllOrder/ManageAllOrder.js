import React, { useEffect, useState } from "react";

const ManageAllOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-wildwood-44278.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`https://sheltered-wildwood-44278.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = manageOrders.filter(
              (booking) => booking._id !== id
            );
            setManageOrders(remaining);
          }
        });
    }
  };

  //   const handleUpdateId = (id) => {
  //     fetch(`https://sheltered-wildwood-44278.herokuapp.com/orders/${id}`, {
  //       method: "PUT",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.deletedCount > 0) {
  //           alert("Deleted successfully");
  //           const remaining = manageOrders.filter(
  //             (booking) => booking._id !== id
  //           );
  //           setManageOrders(remaining);
  //         }
  //       });
  //   };
  return (
    <div xs={12} md={6}>
      <h1 style={{ color: "#0F5BF3" }}>Manage All Orders</h1>
      <h3 style={{ color: "#0BEF99" }}>
        Total Orders Available:{manageOrders.length}
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
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {manageOrders.map((manageOrder) => (
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
                {manageOrder.email}
              </td>
              <td style={{ backgroundColor: "#273746", width: 150 }}>
                {manageOrder.address}
              </td>
              <td className="text-center">
                <button onClick={() => handleDelete(manageOrder._id)}>
                  Delete
                </button>
              </td>
              {/* <td className="text-center">
                <button onClick={() =>}>
                  update
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
