import { Box, Button, Grid, ImageList, Typography } from "@mui/material";
import React from "react";

const contentBy1get1 = () => {
  return (
    <Grid container spacing={1} alignItems="center" sx={{  overflow: "auto",maxHeight:"500px"}}>
      <Grid item xs={12}>
        <ImageList sx={{ width: "100%" }} cols={4}>
          {dataPizza.map((item) => (
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
                    width: "100%",
                    objectFit: "cover",
                    padding: 2,
                  }}
                />

                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10%",

                    color: "red",

                    padding: "5px",
                    borderRadius: "5px",
                    zIndex: "1",
                    fontSize: "20px",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default contentBy1get1;

const dataPizza = [
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/220265.png",
    title: "ไส้กรอกยั่วนัวเบคอน",
    price: "2000",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/162216.png",
    title: "ดับเบิ้ลชีสพิซซ่า",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/162217.png",
    title: "ดับเบิ้ลเปปเปอโรนี",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102204.png",
    title: "ฮาวายเอี้ยน",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102208.png",
    title: "ซีฟู้ดค็อกเทล",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102201.png",
    title: "ซุปเปอร์เดอลุกซ์",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102734.png",
    title: "สไปซี่ ซุปเปอร์ซีฟู้ด",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102228.png",
    title: "ซีฟู้ดเดอลุกซ์",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102209.png",
    title: "ค็อกเทลกุ้ง",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102726.png",
    title: "โฟร์ชีสและเบคอน",
  },
  {
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102725.png",
    title: "ผักโขมอบและมะเขือเทศ",
  },
];
