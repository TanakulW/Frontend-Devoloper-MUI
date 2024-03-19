import React, { useState } from "react";
import AppBarComp from "../component/appBarComp";
import ContentComp from "../component/contentComp";
import FooterComp from "../component/footerComp"
import { Box } from "@mui/material";


const HomePage = () => {
    const [darkModeMain, setDarkModeMain] = useState(false)
    // const [orderSelect, setOrderSelect] = useState([])
    const [orderSelect, setOrderSelect] = useState([])

  return (
    <Box>
      <div className="appbar">
        <AppBarComp setDarkModeMain={setDarkModeMain} orderSelect={orderSelect}/>
      </div>
      <div className="content">
        <ContentComp darkModeMain={darkModeMain} orderSelect={orderSelect}setOrderSelect={setOrderSelect}/>
      </div>
      <div className="footer">
        <FooterComp darkModeMain={darkModeMain}/>
      </div>
    </Box>
  );
};

export default HomePage;
