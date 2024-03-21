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

const ContentBy1get1 = (props) => {
  const { setOrderSelect, orderSelect } = props;

  const [selectedItems, setSelectedItems] = useState({});

  // const addMenu = (idMenu, title) => {
  //   count++;
  //   const sendData = {
  //     id: idMenu,
  //     title: title,
  //     count: count,
  //   };

  //   console.log(sendData);
  // };
  let count = 0;
  const addMenu = (id, title) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: (prevSelectedItems[id] || 0) + 1,
    }));
    const sendData = {
      id: id,
      title: title,
      count: ++count,
    };
    console.log(sendData);
    // setOrderSelect(sendData);
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
                      addMenu(item.idMenu, item.title);
                    }}
                    sx={{
                      bgcolor: "#008556",
                      "&:hover": {
                        backgroundColor: "#2C6837",
                        borderColor: "#2C6837",
                      },
                      m: 1,
                      width: 200,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#ffff",
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

export default ContentBy1get1;

const dataPizza = [
  {
    idMenu: "1",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/220265.png",
    title: "ไส้กรอกยั่วนัวเบคอน",
    price: "479 ฿",
  },
  {
    idMenu: "2",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/162216.png",
    title: "ดับเบิ้ลชีสพิซซ่า",
    price: "279 ฿",
  },
  {
    idMenu: "3",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/162217.png",
    title: "ดับเบิ้ลเปปเปอโรนี",
    price: "279 ฿",
  },
  {
    idMenu: "4",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102204.png",
    title: "ฮาวายเอี้ยน",
    price: "379 ฿",
  },
  {
    idMenu: "5",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102208.png",
    title: "ซีฟู้ดค็อกเทล",
    price: "439 ฿",
  },
  {
    idMenu: "6",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102201.png",
    title: "ซุปเปอร์เดอลุกซ์",
    price: "379 ฿",
  },
  {
    idMenu: "7",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102734.png",
    title: "สไปซี่ ซุปเปอร์ซีฟู้ด",
    price: "439 ฿",
  },
  {
    idMenu: "8",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102228.png",
    title: "ซีฟู้ดเดอลุกซ์",
    price: "439 ฿",
  },
  {
    idMenu: "9",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102209.png",
    title: "ค็อกเทลกุ้ง",
    price: "439 ฿",
  },
  {
    idMenu: "10",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102726.png",
    title: "โฟร์ชีสและเบคอน",
    price: "439 ฿",
  },
  {
    idMenu: "11",
    img: "https://cdn.1112.com/1112/public//images/products/pizza/Topping/102725.png",
    title: "ผักโขมอบและมะเขือเทศ",
    price: "379 ฿",
  },
];
