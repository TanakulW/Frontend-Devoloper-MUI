import { Box, Button, Grid, ImageList, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

const ContentSalad = () => {
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      sx={{ overflow: "auto", maxHeight: "500px" }}
      pl={2}
      pr={2}
    >
      <Grid item xs={12}>
        <ImageList sx={{ width: "100%" }} cols={4}>
          {dataSalad.map((item) => (
            <Grid item key={item.img}>
              <Box
                sx={{
                  bgcolor: "white",
                  "&:hover": {
                    backgroundColor: "#F9B044",
                    borderColor: "#F9B044",
                  },
                  borderRadius: "20px",
                  border: "2px solid green",
                }}
              >
                <img
                  key={item.img}
                  srcSet={`${item.img}`}
                  src={`${item.img}`}
                  alt={item.title}
                  style={{
                    width: "95%",
                    objectFit: "cover",
                    padding: 2,
                  }}
                />

                <Typography
                  sx={{
                    bottom: "10%",
                    color: "red",
                    borderRadius: "5px",
                    zIndex: "1",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.title}
                </Typography>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={() => {
                      // addMenu(item.idMenu, item.title);
                    }}
                    sx={{
                      bgcolor: "#008556",
                      "&:hover": {
                        backgroundColor: "#2C6837",
                        borderColor: "#2C6837",
                      },
                      m: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        display: "flex",
                      }}
                    >
                      {item.price}
                      <AddIcon />
                      เลือก
                    </Typography>
                  </Button>
                </div>
              </Box>
            </Grid>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default ContentSalad;

const dataSalad = [
  {
    idMenu: "1",
    img: "https://cdn.1112.com/1112/public//images/products/114022.png",
    title: "ไส้กรอกรวมย่าง",
    price: "279 ฿",
  },
  {
    idMenu: "2",
    img: "https://cdn.1112.com/1112/public//images/products/steak/114002.png",
    title: "ซี่โครงหมูบาร์บีคิว",
    price: "399 ฿",
  },
  {
    idMenu: "3",
    img: "https://cdn.1112.com/1112/public//images/products/salad/116508_1.png",
    title: "ซีซาร์สลัด",
    price: "149 ฿",
  },
  {
    idMenu: "4",
    img: "https://cdn.1112.com/1112/public//images/products/salad/website/itm116503.png",
    title: "การ์เดนสลัด และน้ำครีมสลัด",
    price: "129 ฿",
  },
];
