import { Box } from "@mui/material";
import React from "react";

const contentComp = () => {
  return (
    <Box
      sx={{
        backgroundColor: "brown",
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
