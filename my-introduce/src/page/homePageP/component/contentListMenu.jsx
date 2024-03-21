import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const ContentListMenu = () => {
  const submit = () => {
    console.log("ส่ง");
  };
  return (
    <Box sx={{ width: 400 }}>
      <Grid container>
        <Grid xs={12} sx={{ p: 2 }}>
          <Typography fontSize={"20px"}>ตะกร้าสินค้า (x)</Typography>
        </Grid>
        <Grid xs={12} sx={{ p: 2 }} display="flex" justifyContent="center">
          <Button
           
            sx={{
              bgcolor: "#F9B044",
              "&:hover": {
                backgroundColor: "#D32F2F",
                borderColor: "#D32F2F",
              },
              borderRadius: "20px",
            }}
            onClick={submit}
          >
             <Typography color="#ffff   " fontSize={"16px"}>ดำเนินการต่อ</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentListMenu;
