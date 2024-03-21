import {
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

const ContentAppetizes = () => {
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
        {dataAppetize.map((item) => (
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

               
              </div>
            </Box>
          </Grid>
        ))}
      </ImageList>
    </Grid>
  </Grid>
  )
}

export default ContentAppetizes


const dataAppetize = [
  {
    idMenu: "1",
    img: "https://cdn.1112.com/1112/public//images/products/icecream/125278_2.png",
    title: "ไอศกรีม มอคค่า อัลมอนด์ ฟัดจ์",
    price: "259 ฿",
  },
  {
    idMenu: "2",
    img: "https://cdn.1112.com/1112/public//images/products/icecream/125271_2.png",
    title: "ไอศกรีม ช็อคโกแลต",
    price: "259 ฿",
  },
  {
    idMenu: "3",
    img: "https://cdn.1112.com/1112/public//images/products/icecream/125272_2.png",
    title: "ไอศกรีม ช็อคโกแลตชิพ",
    price: "259 ฿",
  },
  {
    idMenu: "4",
    img: "https://cdn.1112.com/1112/public//images/products/icecream/125274_2.png",
    title: "ไอศกรีม รัมเรซิน",
    price: "259 ฿",
  },
  {
    idMenu: "5",
    img: "https://cdn.1112.com/1112/public//images/products/icecream/125275_2.png",
    title: "ไอศกรีม เวรี่ สตอเบอร์รี่",
    price: "259 ฿",
  },
  {
    idMenu: "6",
    img: "https://cdn.1112.com/1112/public//images/products/beverage/117564_3.png",
    title: "โค้ก 1.25 ลิตร",
    price: "45 ฿",
  },
  {
    idMenu: "7",
    img: "https://cdn.1112.com/1112/public//images/products/beverage/117565_2.png",
    title: "โค้ก (ไม่มีน้ำตาล) 1.25 ลิตร",
    price: "45 ฿",
  },
];
