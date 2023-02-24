import { Typography } from "@mui/material";
import React from "react";
import useAuth from "../../Hooks/useAuth";

const DashboardProfile = () => {
  const { user } = useAuth();
  return (
    <div>
      <Typography variant="h4">
        WelCome To Dashboard <span>{user.displayName}</span>
      </Typography>
    </div>
  );
};

export default DashboardProfile;
