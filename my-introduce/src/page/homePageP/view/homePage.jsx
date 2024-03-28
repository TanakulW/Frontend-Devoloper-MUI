import React, { useState } from "react";
import AppBarComp from "../component/appBarComp";
import ContentComp from "../component/contentComp";
import FooterComp from "../component/footerComp";
import { Box } from "@mui/material";

const HomePage = () => {
  const [darkModeMain, setDarkModeMain] = useState(false);
  const [cart, setCart] = useState([]);
console.log(cart);
  return (
    <Box>
      <div className="appbar">
        <AppBarComp setDarkModeMain={setDarkModeMain} cart={cart}/>
      </div>
      <div className="content">
        <ContentComp darkModeMain={darkModeMain} setCart={setCart} />
      </div>
      <div className="footer">
        <FooterComp darkModeMain={darkModeMain} />
      </div>
    </Box>
  );
};

export default HomePage;
