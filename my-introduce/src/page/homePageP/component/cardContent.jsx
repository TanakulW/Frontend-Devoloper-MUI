import {
  Box,
  Button,
  Divider,
  Grid,
  ImageList,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ContentBy1get1 from "../component/contentBy1get1";
import ContentChicken from "../component/contentChicken";
import ContentPasta from "../component/contentPasta";
import ContentSalad from "../component/contentSalad"
import ContentDesserts from "../component/contentDesserts"
import ContentAppetizers from "../component/contentAppetizes"


const CardContent = (props) => {
  const { setOrderSelect ,orderSelect} = props;

  const [selectedId, setSelectedId] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedId(id);
  };

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
                    onClick={() => handleButtonClick(item.id)}
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
          {(selectedId === null || selectedId === "1") && (
            <ContentBy1get1 orderSelect={orderSelect}setOrderSelect={setOrderSelect} />
          )}
          {selectedId === "2" && (
            <ContentChicken setOrderSelect={setOrderSelect} />
          )}
          {selectedId === "3" && <ContentPasta />}
          {selectedId === "4" && <ContentSalad />}
          {selectedId === "5" && <ContentDesserts />}
          {selectedId === "6" && <ContentAppetizers />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardContent;

const itemData = [
  {
    id: "1",
    img: "https://cdn.1112.com/1112/public/images/Menu/ValuSet.png",
    title: "Pizza",
  },
  {
    id: "2",
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Chicken.png",
    title: "Chicken",
  },
  {
    id: "3",
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Pasta.png",
    title: "Pasta",
  },
  {
    id: "4",
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Salad.png",
    title: "Salad && Steak",
  },
  {
    id: "5",
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Desserts.png",
    title: "Desserts",
  },
  {
    id: "6",
    img: "https://cdn.1112.com/1112/public/images/Menu/card_Appetizers.png",
    title: "Appetizers",
  },
];
