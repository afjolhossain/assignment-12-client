import { Avatar, Box } from "@mui/material";
import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Reviews = ({ reviews }) => {
  const { name, opinion, Designation } = reviews;
  const { user } = useAuth();

  return (
    <Box
      style={{
        background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
        color: "white",
        width: "50%",
        margin: "auto",
        padding: "15px",
      }}
    >
      <Avatar
        src={user.photoURL}
        sx={{ width: 80, height: 80, margin: "auto" }}
      />
      <p className="text-2xl text-slate-50 py-2">Name : {name}</p>
      <p className="text-2xl text-slate-50 py-2">Designation : {Designation}</p>

      <p className="font-bold text-slate-200 italic">Opinion : {opinion}</p>
    </Box>
  );
};

export default Reviews;
