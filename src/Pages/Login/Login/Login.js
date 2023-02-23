import React, { useState } from "react";
import {
  Alert,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";

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
    <div>
      <Navigation></Navigation>
      <Typography sx={{ padding: 6 }}>Login</Typography>
      {!isLoading && (
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            width: "400px",
            margin: "auto",
            gap: "10px",
            padding: "10px",
          }}
          onSubmit={handleLogInSubmit}
        >
          {/* <img
            style={{
              width: "100px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
            src={loginlo}
            alt=""
          /> */}

          <TextField
            id="outlined-basic"
            label="Your Email"
            name="email"
            style={{ width: "100%", margin: "auto" }}
            onChange={handleOnChange}
            type="email"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Password"
            style={{ width: "100%", margin: "auto" }}
            name="password"
            onChange={handleOnChange}
            type="password"
            variant="outlined"
          />

          <button
            type="submit"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
              color: "#E5E7E9",
              width: "100%",
              border: "none",
              height: "50px",
              fontSize: "20px",
              margin: "auto",
            }}
          >
            Login
          </button>

          <Divider
            sx={{
              backgroundColor: "black",
              width: "100%",
              height: "10px",
              margin: "auto",
            }}
          />
          <button
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)",
              color: "#E5E7E9",
              width: "100%",
              height: "50px",
              fontSize: "20px",
              margin: "auto",
              border: "none",
            }}
            onClick={signInGoogle}
          >
            Sign-In_Google
          </button>
          <NavLink
            to="/register"
            style={{
              color: "#151E11",
              textDecoration: "none",
              fontSize: "20px",
              fontWeight: "900px",
            }}
          >
            New User? Please Register
          </NavLink>
        </form>
      )}
      {isLoading && <CircularProgress />}
      {user?.email && <Alert>user created successfully</Alert>}
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

export default Login;
