import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const ManageAllOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://assignment-12-server-gamma.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`https://assignment-12-server-gamma.vercel.app/orders/${id}`, {
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

  return (
    <div xs={12} md={6}>
      <Typography variant="h4" sx={{ marginTop: 10, color: "white" }}>
        Total Orders Available:{manageOrders.length}
      </Typography>

      <table style={{ margin: "auto", width: "100%" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#F43213",
              textAlign: "center",
              color: "white",
              height: "50px",
            }}
          >
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {manageOrders.map((manageOrder) => (
            <tr
              style={{
                backgroundColor: "#808B96",
                color: "white",
                height: "40px",
              }}
            >
              <td style={{ backgroundColor: "#273746", width: 250 }}>
                {user.displayName}
              </td>
              <td style={{ backgroundColor: "#707B7C", width: 250 }}>
                {user.email}
              </td>
              <td style={{ backgroundColor: "#273746", width: 250 }}>
                {manageOrder.address}
              </td>
              <td style={{ backgroundColor: "#273746", width: 150 }}>
                {manageOrder.phoneNumber}
              </td>

              <td
                className="text-center"
                style={{ backgroundColor: "#273746", width: 250 }}
              >
                <button onClick={() => handleDelete(manageOrder._id)}>
                  <span
                    style={{
                      marginTop: "8px",
                      fontSize: "30px",
                      color: "red",
                      border: "none",
                    }}
                  >
                    X
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrder;
