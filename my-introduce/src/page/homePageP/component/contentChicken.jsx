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

const ContentChicken = (props) => {
  const { setOrderSelect } = props;
  const [selectedItems, setSelectedItems] = useState({});

  const addMenu = (id, title) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: (prevSelectedItems[id] || 0) + 1,
    }));
  };

  const delMenu = (id) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = { ...prevSelectedItems };

      if (updatedItems[id] && updatedItems[id] > 0) {
        updatedItems[id] -= 1;
      }

      return updatedItems;
    });
  };
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
          {dataChicken.map((item) => (
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
                      width: "86%",
                      objectFit: "cover",
                      padding: 1,
                      paddingLeft:30
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
                        addMenu(item.idMenu);
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

export default ContentChicken;

const dataChicken = [
  {
    idMenu: "1",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116758.png",
    title: "ไส้กรอกยั่วนัวเบคอน",
    price: "149 ฿",
  },
  {
    idMenu: "2",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116760.png",
    title: "ไก่กรอบซอสสไปซี่ 6 ชิ้น",
    price: "149 ฿",
  },
  {
    idMenu: "3",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116756.png",
    title: "ไก่กรอบซอสกระเทียม 6 ชิ้น",
    price: "149 ฿",
  },
  {
    idMenu: "4",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116536_1.png",
    title: "ปีกไก่ บาร์บีคิว 6 ชิ้น",
    price: "149 ฿",
  },
  {
    idMenu: "5",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116554_1.png",
    title: "ปีกไก่ทอด สไตล์เกาหลี 6 ชิ้น",
    price: "149 ฿",
  },
  {
    idMenu: "6",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116759.png",
    title: "ไก่กรอบซอสหวาน 10 ชิ้น",
    price: "219 ฿",
  },
  {
    idMenu: "7",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116761.png",
    title: "ไก่กรอบซอสสไปซี่ 10 ชิ้น",
    price: "219 ฿",
  },
  {
    idMenu: "8",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116757.png",
    title: "ไก่กรอบซอสกระเทียม 10 ชิ้น",
    price: "219 ฿",
  },
  {
    idMenu: "9",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116539_1.png",
    title: "ปีกไก่บาร์บีคิว 10 ชิ้น",
    price: "219 ฿",
  },
  {
    idMenu: "10",
    img: "https://cdn.1112.com/1112/public//images/products/chicken/116561_1.png",
    title: "ปีกไก่ทอด สไตล์เกาหลี 10 ชิ้น",
    price: "219 ฿",
  },
];
