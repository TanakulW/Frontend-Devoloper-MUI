import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const ContentListMenu = (props) => {
  const { cart } = props;
  const submit = () => {
    console.log("ส่ง");
  };

  const totalPrice = () => {
    let totalPrice = 0;
    cart.forEach(function (item) {
      totalPrice += item.price;
    });

    return totalPrice.toLocaleString();
  };

  return (
    <Box sx={{ width: 450 }}>
      <Grid container>
        <Grid item xs={12} sx={{ p: 2 }}>
          <Typography fontSize={"20px"} fontWeight="20px">
            ตะกร้าสินค้า ({cart.length})
          </Typography>
        </Grid>
        <Divider
          sx={{
            backgroundColor: "black",
            width: "95%",
            ml: "3%",
          }}
        />

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {cart.map((item, index) => (
            <div
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
          
                <img src={item.img} alt={item.title} style={{ width: "50%" }} />
                <Typography>x</Typography>
                &nbsp;
                <Typography>{item.title}</Typography>
                &nbsp;
                <Typography display="flex" justifyContent="right">
                  ฿ {item.price}
                </Typography>
              </div>
            </div>
          ))}
        </Grid>

        <Grid item xs={12} sx={{ p: 2 }}>
          <Typography
            fontSize={"20px"}
            fontWeight="20px"
            display="flex"
            justifyContent="space-between"
          >
            <span>ราคารวม</span>
            <span style={{ marginLeft: "auto" }}>฿ {totalPrice()}</span>
          </Typography>
          <Typography color="#414142" fontSize={"10px"}>
            *ยังไม่รวมส่วนลด
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ p: 2 }} display="flex" justifyContent="center">
          <Button
            sx={{
              bgcolor: "#008556",
              "&:hover": {
                backgroundColor: "#2C6837",
                borderColor: "#2C6837",
              },
              borderRadius: "20px",
            }}
            onClick={submit}
          >
            <Typography color="#ffff   " fontSize={"16px"}>
              ยังไม่รวมส่วนลด
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentListMenu;
