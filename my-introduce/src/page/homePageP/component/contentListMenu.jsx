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

  const mergedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.idMenu === item.idMenu);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

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
          }}
        >
          {mergedCart.map((item, index) => (
            <div key={index}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={item.img} alt={item.title} style={{ width: "50%" }} />
                <div style={{ marginLeft: 1 }}>
                  <Typography>
                    x{item.quantity} {item.title}{" "}
                    {`฿ ${(item.price * item.quantity).toLocaleString()}`}
                  </Typography>
                </div>
              </div>

              <Grid
                item
                xs={12}
                sx={{ p: 2 }}
                display="flex"
                justifyContent="center"
              >
                <Button
                  variant="outlined"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#DC283B",
                      borderColor: "#DC283B",
                      "& .MuiTypography-root": {
                        color: "#ffffff",
                      },
                    },
                    borderRadius: "20px",
                    border: "1px solid #DC283B",
                  }}
                  onClick={submit}
                >
                  <Typography color="#DC283B" fontSize="16px">
                    ลบสินค้า
                  </Typography>
                </Button>
              </Grid>
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
              width: "50%",
              boxShadow: "2px 2px 0px 0px black",
            }}
            onClick={submit}
          >
            <Typography color="#ffff   " fontSize={"16px"}>
              สั่งสินค้า
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentListMenu;
