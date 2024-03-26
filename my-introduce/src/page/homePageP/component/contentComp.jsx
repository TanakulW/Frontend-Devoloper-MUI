import { Box } from "@mui/material";
import React from "react";
import CardContent from "../component/cardContent";

const contentComp = (props) => {
  const { darkModeMain } = props;

  return (
    <Box
      sx={{
        backgroundColor: darkModeMain ? "#666666" : " #cccccc",
        backgroundImage: darkModeMain ? "none" : "#666666",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: darkModeMain ? "#595959" : "  #d9d9d9",
          backgroundImage: darkModeMain ? "none" : " #595959",
          width: "90vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          boxShadow: "2px 2px 0px 0px black",
          borderRadius: "20px",
        }}
      >
        <CardContent />
      </Box>
    </Box>
  );
};

export default contentComp;
