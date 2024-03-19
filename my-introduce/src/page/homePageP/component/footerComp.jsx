import { Box, Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import React from "react";

const footerComp = (props) => {
  const { darkModeMain } = props;

  return (
    <Box
      sx={{
        backgroundColor: darkModeMain ? "black" : " #D98A54",
        backgroundImage: darkModeMain ? "none" : "#666666",
        boxShadow: "0px 0px 0px 2px white",
        // height: "7vh",
      }}
    >
      <Grid
        container
        rowSpacing={4}
        columnSpacing={3}
        display="flex"
        justifyContent="center"
        color="white"
      >
        <Grid item xs={3} display="flex" justifyContent="center">
          <div>
            <Typography>
              ©{" "}
              {`${new Date().getDate()}/${
                new Date().getMonth() + 1
              }/${new Date().getFullYear()}`}{" "}
              {`${
                new Date().getHours() > 12
                  ? new Date().getHours() - 12
                  : new Date().getHours()
              }:${new Date().getMinutes()} ${
                new Date().getHours() >= 12 ? "PM" : "AM"
              }`}
            </Typography>

            <Typography>Create by : Mr.Tanakul Wasuwattanapong</Typography>
          </div>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body1" align="center">
            Connect with us:
            <IconButton aria-label="GitHub" href="https://github.com/TanakulW">
              <GitHubIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="GitHub" href="https://github.com/TanakulW">
              <FacebookIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="GitHub" href="https://github.com/TanakulW">
              <InstagramIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="GitHub" href="https://github.com/TanakulW">
              <XIcon sx={{ color: "white" }} />
            </IconButton>
          </Typography>
          <Typography variant="body1" align="center">
            Line : capptann
          </Typography>
          <Typography variant="body1" align="center">
            Email : super_captan@hotmail.co.th
          </Typography>
          <Typography variant="body1" align="center">
            Tel : 092-283-4324
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default footerComp;
