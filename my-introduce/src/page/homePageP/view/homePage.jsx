import React from "react";
import AppBarComp from "../component/appBarComp";
import ContentComp from "../component/contentComp";
import FooterComp from "../component/footerComp"
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <div className="appbar">
        <AppBarComp />
      </div>
      <div className="content">
        <ContentComp />
      </div>
      <div className="footer">
        <FooterComp />
      </div>
    </Box>
  );
};

export default HomePage;
