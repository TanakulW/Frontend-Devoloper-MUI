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

const ContentPasta = () => {
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
          {dataPasta.map((item) => (
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
                    mt:2
                  }}
                >
                  <img
                    key={item.img}
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
                    alt={item.title}
                    style={{
                      width: "90%",
                      objectFit: "cover",
                      paddingLeft: 20,
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

export default ContentPasta;

const dataPasta = [
  {
    idMenu: "1",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115687.png",
    title: "สปาเก็ตตี้คาโบนาร่า",
    price: "139 ฿",
  },
  {
    idMenu: "2",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115812.png",
    title: "สปาเก็ตตี้แฮมและเห็ดในครีมซอส",
    price: "129 ฿",
  },
  {
    idMenu: "3",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115654_2.png",
    title: "สปาเก็ตตี้ขี้เมาไส้กรอก",
    price: "129 ฿",
  },
  {
    idMenu: "4",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/website/itm115536.png",
    title: "สปาเก็ตตี้ใส้กรอกผัดพริกแห้ง",
    price: "129 ฿",
  },
  {
    idMenu: "5",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115688.png",
    title: "สปาเก็ตตี้หมูสับ",
    price: "139 ฿",
  },
  {
    idMenu: "6",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/website/itm115539.png",
    title: "สปาเก็ตตี้เบคอนผัดพริกแห้ง",
    price: "139 ฿",
  },
  {
    idMenu: "7",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115580_1.png",
    title: "สปาเก็ตตี้ ขี้เมาทะเล",
    price: "169 ฿",
  },

  {
    idMenu: "8",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115671.png",
    title: "มักกะโรนีแฮมและเห็ดอบชีส",
    price: "129 ฿",
  },
  {
    idMenu: "9",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115672.png",
    title: "มักกะโรนีไก่บาร์บีคิวอบชีส",
    price: "129 ฿",
  },
  {
    idMenu: "10",
    img: "https://cdn.1112.com/1112/public//images/products/pasta/115673.png",
    title: "มักกะโรนีเบคอนอบชีส",
    price: "139 ฿",
  },
];
