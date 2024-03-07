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
} from "@mui/material";
import Pizza from "../../../assets/image/pizza.png";
import PizzaBg from "../../../assets/image/pizza-background.jpg";

const Login = () => {
  const [password, setPassword] = useState("");

  //   const handleChangePassword = (event) => {
  //     const value = event.target.value;
  //     if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
  //       setPassword(value);
  //     }
  //   };

  return (
    <Box
      sx={{
        backgroundImage: `url(${PizzaBg})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Stack>
        <Container
          sx={{
            backgroundColor: "#FEFDDE",
            borderRadius: "20px",
            width: "20%",
            height: "450px",
            mt: "12%",
            boxShadow: "0px 0px 10px 0px #4A1C04",
          }}
        >
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
                width: "40%",
              }}
            />

            <Grid item sm={12} md={12} xs={12} lg={12}>
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
              lg={12}
              display="flex"
              justifyContent="center"
              sx={{ p: 1 }}
            >
              <TextField id="username" label="Username" variant="standard" />
            </Grid>

            <Grid
              item
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
                // value={password}
                // onChange={handleChangePassword}
              />
            </Grid>

            <Grid item lg={12} display="flex" justifyContent="center">
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
                  mt: "10%",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default Login;
