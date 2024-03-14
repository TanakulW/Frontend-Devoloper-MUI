import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ContentBy1get1 from "../component/contentBy1get1";

const cardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white ",
        width: "100vw",
        height: "80vh",
        borderRadius: "20px",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item marginLeft="20px">
              <RestaurantIcon sx={{ color: "#D98A54" }} />
            </Grid>
            <Grid item>
              <Typography fontSize="24px">หมวดอาหาร</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="center" marginLeft="4%">
          <Grid item xs={12}>
            <ImageList sx={{ width: "100%" }} cols={6}>
              {itemData.map((item) => (
                <Grid item key={item.img}>
                  <Button
                    sx={{
                      bgcolor: "#F9B044",
                      "&:hover": {
                        backgroundColor: "#D32F2F",
                        borderColor: "#D32F2F",
                      },
                      borderRadius: "20px",
                    }}
                  >
                    <img
                      key={item.img}
                      srcSet={`${item.img}`}
                      src={`${item.img}`}
                      alt={item.title}
                    />

                    <Typography
                      sx={{
                        position: "absolute",
                        bottom: "10%",

                        color: "#ffffff",

                        padding: "5px",
                        borderRadius: "5px",
                        zIndex: "1",
                        fontSize: "20px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </ImageList>
          </Grid>
        </Grid>

        <Divider
          sx={{
            backgroundColor: "black",
            width: "95%",
            ml: "3%",
            borderWidth: "2px",
          }}
        />
<Grid item xs={12}>
 <ContentBy1get1/>
</Grid>

      </Grid>
    </Box>
  );
};

export default cardContent;

const itemData = [
  {
    img: "https://cdn.1112.com/1112/public/images/Menu/ValuSet.png",
    title: "Buy 1 Get 1 Free",
  },
  {
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Chicken.png",
    title: "Chicken",
  },
  {
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Pasta.png",
    title: "Pasta",
  },
  {
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Salad.png",
    title: "Salad",
  },
  {
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Desserts.png",
    title: "Desserts",
  },
  {
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Appetizers.png",
    title: "Appetizers",
  },
];

