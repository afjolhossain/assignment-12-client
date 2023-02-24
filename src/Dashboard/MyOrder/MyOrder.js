import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyOrder = () => {
  const [orders, setOrder] = useState([]);
  const { email, user } = useAuth();

  useEffect(() => {
    fetch("https://assignment-12-server-kohl.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orders]);

  const myOrder = orders.filter((order) => order.email === email);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`https://assignment-12-server-kohl.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = orders.filter((purchase) => purchase._id !== id);
            setOrder(remaining);
          }
        });
    }
  };

  return (
    <div style={{ marginTop: "20px", padding: "15px" }}>
      <Typography variant="h6">
        Your Orders Available:{orders.length}
      </Typography>
      <table style={{ width: "100%" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#F43213",
              textAlign: "center",
              color: "white",
              height: "50px",
            }}
          >
            <th>NAME</th>
            <th>EMAIL</th>
            <th>MOBILE NUMBER</th>
            <th>ADDRESS</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((order) => (
            <tr
              style={{
                backgroundColor: "#808B96",
                color: "white",
                height: "40px",
              }}
            >
              <td style={{ backgroundColor: "#273746", width: 150 }}>
                {user.displayName}
              </td>
              <td
                style={{
                  backgroundColor: "#E5BEA9 ",
                  width: 250,
                  color: "black",
                }}
              >
                {user.email}
              </td>
              <td style={{ backgroundColor: "#707B7C", width: 250 }}>
                {order.phoneNumber}
              </td>

              <td style={{ backgroundColor: "#273746", width: 250 }}>
                {order.address}
              </td>
              <button onClick={() => handleDelete(order._id)}>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
