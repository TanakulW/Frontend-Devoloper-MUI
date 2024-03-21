import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const ContentListMenu = () => {
  const submit = () => {
    console.log("ส่ง");
  };
  return (
    <Box sx={{ width: 400 }}>
      <Grid container>
        <Grid xs={12} sx={{ p: 2 }}>
          <Typography fontSize={"20px"} fontWeight="20px">
            ตะกร้าสินค้า (x)
          </Typography>
        </Grid>
        <Divider
          sx={{
            backgroundColor: "black",
            width: "95%",
            ml: "3%",
          }}
        />

        <Grid xs={12} sx={{ p: 2 }}>
          <Typography fontSize={"20px"} fontWeight="20px">
            ราคารวม
            <Typography color="#414142"   fontSize={"10px"}>
            *ยังไม่รวมส่วนลด
            </Typography>
          </Typography>
        </Grid>
        <Grid xs={12} sx={{ p: 2 }} display="flex" justifyContent="center">
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
