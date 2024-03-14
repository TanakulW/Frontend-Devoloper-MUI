import React, { useState } from "react";
import AppBarComp from "../component/appBarComp";
import ContentComp from "../component/contentComp";
import FooterComp from "../component/footerComp"
import { Box } from "@mui/material";
import ContentGet1 from "../component/contentBy1get1";

const HomePage = () => {
    const [darkModeMain, setDarkModeMain] = useState(false)

  return (
    <Box>
      <div className="appbar">
        <AppBarComp setDarkModeMain={setDarkModeMain}/>
      </div>
      <div className="content">
        <ContentComp darkModeMain={darkModeMain}/>
      </div>
      <div className="footer">
        <FooterComp />
      </div>
    </Box>
  );
};

export default HomePage;
