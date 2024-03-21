import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  ImageList,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";

const ContentDesserts = () => {
  const [selectedItems, setSelectedItems] = useState({});
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
          {dataDessert.map((item) => (
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
                  m: "5px",
                  mt: 2,
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

                  <IconButton
                    onClick={() => {
                      // delMenu(item.idMenu);
                    }}
                    sx={{
                      m: 1,
                    }}
                  >
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </div>
              </Box>
            </Grid>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default ContentDesserts;

const dataDessert = [
  {
    idMenu: "1",
    img: "https://cdn.1112.com/1112/public//images/products/appetizer/116601.png",
    title: "เบรดสติ๊ก",
    price: "79 ฿",
  },
  {
    idMenu: "2",
    img: "https://cdn.1112.com/1112/public//images/products/appetizer/116603.png",
    title: "ขนมปังกระเทียมชีส",
    price: "89 ฿",
  },
  {
    idMenu: "3",
    img: "https://cdn.1112.com/1112/public//images/products/appetizer/116525_4.png",
    title: "ขนมปังกระเทียม",
    price: "79 ฿",
  },
  {
    idMenu: "4",
    img: "https://cdn.1112.com/1112/public//images/products/appetizer/116816.png",
    title: "ไวาฟเฟิล ฟรายส์",
    price: "79 ฿",
  },
  {
    idMenu: "5",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116569.png",
    title: "ชิกเก้น นักเก็ตส์ 6 ชิ้น พร้อมซอสมะเขือเทศ",
    price: "89 ฿",
  },
  {
    idMenu: "6",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116520_1.png",
    title: "ชิกเก้นสติ๊กส์",
    price: "89 ฿",
  },
  {
    idMenu: "7",
    img: "https://cdn.1112.com/1112/public//images/products/appetizer/116805.png",
    title: "ปลาชุปเกล็ดขนมปังทอด",
    price: "89 ฿",
  },
  {
    idMenu: "8",
    img: "https://cdn.1112.com/1112/public//images/products/appetizer/116624.png",
    title: "ชีสสติ๊กส์",
    price: "89 ฿",
  },
  {
    idMenu: "9",
    img: "https://cdn.1112.com/1112/public//images/products/appetizer/116571.png",
    title: "ปลาหมึกชุปแป้งทอด",
    price: "99 ฿",
  },
  {
    idMenu: "9",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115505.png",
    title: "ผักโขมอบชีส",
    price: "179 ฿",
  },
];
