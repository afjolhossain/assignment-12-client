import { Typography } from "@mui/material";
import React from "react";
import useAuth from "../../Hooks/useAuth";

const DashboardProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <Typography variant="h4" sx={{ marginTop: 15, color: "white" }}>
        WelCome To Dashboard {user.displayName}
      </Typography>
    </div>
  );
};

export default DashboardProfile;
