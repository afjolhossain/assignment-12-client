import {
  Alert,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError, signInGoogle } = useAuth();

  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[field] = value;
    setLoginData(newLogInData);
  };

  const handleRegisterSubmit = (e) => {
    console.log(handleRegisterSubmit);
    if (loginData.password !== loginData.password2) {
      alert("Your Password did not match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };

  return (
    <div>
      <Navigation></Navigation>
      <Typography sx={{ padding: 6 }}>Register</Typography>
      {!isLoading && (
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            width: "350px",
            marginInline: "auto",
            gap: "10px",
          }}
          onSubmit={handleRegisterSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Your Name"
            name="name"
            onBlur={handleOnBlur}
            type="text"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            onBlur={handleOnBlur}
            type="email"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Password"
            name="password"
            onBlur={handleOnBlur}
            type="password"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Confirm Password"
            name="password2"
            onBlur={handleOnBlur}
            type="password"
            variant="outlined"
          />

          <button
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
              color: "#E5E7E9",
              width: "100%",
              fontSize: "20px",
              border: "none",
              height: "50px",
              margin: "auto",
            }}
            type="submit"
          >
            Register
          </button>
          <Divider
            sx={{
              backgroundColor: "black",
              width: "100%",
              height: "10px",
              margin: "auto",
            }}
          ></Divider>
          <button
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
              color: "#E5E7E9",
              width: "100%",
              fontSize: "20px",
              border: "none",
              height: "50px",
              margin: "auto",
            }}
            onClick={signInGoogle}
          >
            Sign-In_Google
          </button>
          <NavLink
            style={{
              color: "#151E11",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "900px",
            }}
            to="/login"
          >
            Already Registered? Please Login
          </NavLink>
        </form>
      )}
      {isLoading && <CircularProgress />}
      {user?.email && (
        <Alert severity="success">user created successfully</Alert>
      )}
      {authError && (
        <Alert
          sx={{
            width: "380px",
            height: "50px",
            fontWeight: "700px",
            marginTop: "5px",
            margin: "auto",
          }}
          severity="error"
        >
          {authError}
        </Alert>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Register;
