import React, { useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import MilkTea from "../../../assets/image/milk-tea.png";
import Pizza from "../../../assets/image/pizza.png";
import PizzaBg from "../../../assets/image/pizza-background.jpg";

const Login = () => {
  const [username, setUsername] = useState("");

  const hasSpecialCharacters = (event) => {
    const value = event.target.value;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setUsername(value);
    }
  };

  return (
    <StyledBox
      sx={{
        backgroundImage: `url(${PizzaBg})`,
      }}
    >
      <Stack>
        <StyledContainer sx={{ m: "auto" }}>
          <Grid container>
            <CardMedia
              component="img"
              image={Pizza}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: "auto",
                p: 1,
                width: { xs: "50%", sm: "40%", md: "25%", lg: "43%" },
              }}
            />

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                display="flex"
                justifyContent="center"
                sx={{ fontSize: 24, fontWeight: "bold", p: 1 }}
                color={"#D98A54"}
              >
                Sign In
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={12}
              sx={{ p: 2 }}
              display="flex"
              justifyContent="center"
            >
              <Box>
                <TextField
                  id="username"
                  label="Username"
                  variant="standard"
                  value={username}
                  onChange={hasSpecialCharacters}
                />
                <Typography
                  display="flex"
                  justifyContent="left"
                  sx={{ fontSize: 10 }}
                  color={"#D98A54"}
                >
                  ห้ามใช้อักขระพิเศษ
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={12}
              display="flex"
              justifyContent="center"
              sx={{ p: 2 }}
            >
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              display="flex"
              justifyContent="center"
            >
              <Button
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#FCD258",
                  "&:hover": {
                    backgroundColor: "#FCD258",
                    borderColor: "#FCD258",
                  },
                  color: "#D98A54",
                  width: "60%",
                  mt: { xs: "5%", sm: "5%", md: "0%", lg: "10%" },
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </StyledContainer>
      </Stack>
    </StyledBox>
  );
};

export default Login;

const StyledBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  [theme.breakpoints.up("sm")]: {
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  [theme.breakpoints.up("md")]: {
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100vw",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

const StyledContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    backgroundColor: "#FEFDDE",
    marginTop: "20%",
    borderRadius: "20px",
    width: "50%",
    height: "450px",
    boxShadow: "0px 0px 10px 0px #4A1C04",
  },
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "#FEFDDE",
    marginTop: "10%",
    borderRadius: "20px",
    width: "40%",
    height: "450px",
    boxShadow: "0px 0px 10px 0px #4A1C04",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: "#FEFDDE",
    borderRadius: "20px",
    marginTop: "15%",
    width: "50%",
    height: "350px",
    boxShadow: "0px 0px 10px 0px #4A1C04",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: "#FEFDDE",
    marginTop: "5%",
    borderRadius: "20px",
    width: "15%",
    height: "470px",
    boxShadow: "0px 0px 10px 0px #4A1C04",
  },
}));
