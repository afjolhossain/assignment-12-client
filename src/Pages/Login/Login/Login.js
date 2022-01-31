import React, { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import LogBG from "../../../images/special.jpg";
import loginlo from "../../../images/logo.jpg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const LoginBG = {
  background: `url(${LogBG})`,
  backgroundRepeat: "round",
  backgroundColor: "#5D6D7E ",
  height: "600px",
  backgroundBlendMode: "darken, luminosity",
  marginBottom: "40px",
};

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, authError, loginUser, signInGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[field] = value;
    setLoginData(newLogInData);
  };

  const handleLogInSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  return (
    <Container style={LoginBG} sx={{}}>
      <br />
      {!isLoading && (
        <form
          style={{
            backgroundColor: "white",
            height: "500px",
            width: "360px",
            borderRadius: "10px",
          }}
          xs={12}
          onSubmit={handleLogInSubmit}
        >
          <Typography>Login</Typography>
          <img
            style={{
              width: "100px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
            src={loginlo}
            alt=""
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Your Email"
            sx={{ width: "70%", marginTop: "8px" }}
            name="email"
            onChange={handleOnChange}
            type="email"
            variant="outlined"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            sx={{ width: "70%", marginTop: "8px" }}
            name="password"
            onChange={handleOnChange}
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
            Login
          </Button>
          <br />
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
            style={{ textDecoration: "none" }}
            to="/register"
            sx={{ textDecoration: "none" }}
          >
            <Button sx={{ color: "#0F2721 ", fontWeight: 700 }} variant="text">
              New User? Please Register
            </Button>
          </NavLink>
        </form>
      )}
      {isLoading && <CircularProgress />}
      {user?.email && (
        <Alert severity="success">user created successfully</Alert>
      )}
      {authError && <Alert severity="error">{authError}</Alert>}
    </Container>
  );
};

export default Login;
