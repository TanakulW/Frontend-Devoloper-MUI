import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import theme from "./theme.jsx";
// import Login from "./page/loginPage/view/login.jsx";
import Login from "./page/loginPage/view/login.jsx"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
