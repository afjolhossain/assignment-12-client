import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://sheltered-wildwood-44278.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setEmail("");
        console.log(data);
      });

    e.preventDefault();
  };
  return (
    <div>
      <Typography variant="h4" sx={{ marginTop: 10, color: "white" }}>
        Make an Admin
      </Typography>

      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
