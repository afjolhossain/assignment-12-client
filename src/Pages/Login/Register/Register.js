import {
  Alert,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import regBG from "../../../images/special.jpg";
import loginlogo from "../../../images/logo.jpg";

const registerBG = {
  background: `url(${regBG})`,
  backgroundRepeat: "round",
  backgroundColor: "rgba(70, 56, 69,0.) ",
  height: "600px",
  backgroundBlendMode: "darken, luminosity",
  marginBottom: "40px",
};
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
    <div style={registerBG}>
      <br />
      <div>
        {!isLoading && (
          <form
            style={{
              backgroundColor: "white",
              height: "550px",
              width: "370px",
              marginLeft: "30px",
              borderRadius: "10px",
            }}
            onSubmit={handleRegisterSubmit}
          >
            <Typography>Register</Typography>
            <img
              style={{
                width: "100px",
                marginTop: "10px",
                borderRadius: "10px",
              }}
              src={loginlogo}
              alt=""
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Your Name"
              sx={{ width: "70%", marginTop: "8px" }}
              name="name"
              onBlur={handleOnBlur}
              type="text"
              variant="outlined"
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Email"
              sx={{ width: "70%", marginTop: "8px" }}
              name="email"
              onBlur={handleOnBlur}
              type="email"
              variant="outlined"
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              sx={{ width: "70%", marginTop: "8px" }}
              name="password"
              onBlur={handleOnBlur}
              type="password"
              variant="outlined"
            />
            <br />

            <TextField
              id="outlined-basic"
              label="Confirm Password"
              sx={{ width: "70%", marginTop: "8px" }}
              name="password2"
              onBlur={handleOnBlur}
              type="password"
              variant="outlined"
            />
            <br />
            <br />
            <Button
              type="submit"
              sx={{
                width: "70%",
                backgroundColor: "#0C246A",
                color: "#E5E7E9",
              }}
            >
              Register
            </Button>
            <div>-----------------OR------------------</div>
            <Button
              sx={{
                width: "70%",
                backgroundColor: "#0C246A",
                color: "#E5E7E9",
              }}
              onClick={signInGoogle}
            >
              Sign-In_Google
            </Button>
            <NavLink
              style={{ textDecoration: "none", color: "#10B88F" }}
              to="/login"
            >
              <Button
                sx={{ color: "#0F2721 ", fontWeight: 700 }}
                variant="text"
              >
                Already Registered? Please Login
              </Button>
            </NavLink>
          </form>
        )}
        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">user created successfully</Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
      </div>
    </div>
  );
};

export default Register;
