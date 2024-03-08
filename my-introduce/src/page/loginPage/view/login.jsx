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
import { useNavigate } from "react-router-dom/dist";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Pizza from "../../../assets/image/pizza.png";
import PizzaBg from "../../../assets/image/pizza-background.jpg";
import User from "../../../assets/image/user.png";
import Lock from "../../../assets/image/lock.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const hasSpecialCharacters = (event) => {
    const value = event.target.value;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      setUsername(value);
    }
  };
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleLogin = () => {
    const sendData = {
      username: username.toLocaleString(),
      password: password.toLocaleString(),
    };
    console.log(sendData);
    navigate("/home");
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
                width: { xs: "40%", sm: "40%", md: "35%", lg: "30%" },
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

            <Stack
              direction="row"
              display="flex"
              justifyContent="center"
              spacing={1}
            >
              <CardMedia
                component="img"
                image={User}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: "auto",
                  p: 1,
                  width: { xs: "13%", sm: "10%", md: "12%", lg: "10%" },
                }}
              />

              <TextField
                id="username"
                label="Username"
                variant="standard"
                value={username}
                onChange={hasSpecialCharacters}
              />
            </Stack>

            <Stack
              direction="row"
              display="flex"
              justifyContent="center"
              spacing={1}
              sx={{mt:"20px"}}
            >
              <CardMedia
                component="img"
                image={Lock}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: "auto",
                  p: 1,
                  width: { xs: "13%", sm: "10%", md: "12%", lg: "10%" },
                }}
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                value={password}
                onChange={handlePassword}
              />
            </Stack>

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
                  boxShadow: "2px 2px 0px 0px #4A1C04",
                  color: "#D98A54",
                  width: "60%",
                  mt: { xs: "5%", sm: "5%", md: "10%", lg: "10%" },
                  fontWeight: "bold",
                  fontSize: 20,
                }}
                onClick={handleLogin}
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
    width: "80%",
    height: "450px",
    boxShadow: "0px 0px 10px 0px #4A1C04",
  },
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "#FEFDDE",
    marginTop: "10%",
    borderRadius: "20px",
    width: "50%",
    height: "450px",
    boxShadow: "0px 0px 10px 0px #4A1C04",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: "#FEFDDE",
    borderRadius: "20px",
    marginTop: "15%",
    width: "30%",
    height: "400px",
    boxShadow: "0px 0px 10px 0px #4A1C04",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: "#FEFDDE",
    marginTop: "5%",
    borderRadius: "20px",
    width: "20%",
    height: "470px",
    boxShadow: "0px 0px 10px 0px #4A1C04",
  },
}));
