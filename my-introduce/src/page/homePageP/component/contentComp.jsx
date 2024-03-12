import { Box } from "@mui/material";
import React from "react";

const contentComp = (props) => {
    const {darkModeMain}=props
    
  return (
    <Box
      sx={{
        backgroundColor: darkModeMain
              ? "#666666"
              : " #cccccc",
              backgroundImage: darkModeMain
              ? "none"
              : "#666666",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "skyblue",
          width: "60vw",
          height:"80vh",
          display: "flex",
          justifyContent: "center",
          boxShadow: "2px 2px 0px 0px #4A1C04",
          borderRadius:"20px"
        }}
      >
        contentComp
      </Box>
    </Box>
  );
};

export default contentComp;
