import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import PizzaMenu from "../../../assets/image/pizza-full.png";

const Home = () => {
  const [openTab, setOpenTab] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenTab(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClose={() => setOpenTab(false)}
    >
      <List>
        {[
          { text: "Home", icon: <HomeOutlinedIcon /> },
          { text: "Order", icon: <AddShoppingCartOutlinedIcon /> },
          { text: "Menu", icon: <LocalOfferOutlinedIcon /> },
          { text: "Wallet", icon: <AccountBalanceWalletOutlinedIcon /> },
          { text: "History", icon: <HistoryOutlinedIcon /> },
          { text: "Promos", icon: <LocalAtmOutlinedIcon /> },
          { text: "Bills", icon: <LocalOfferOutlinedIcon /> },
          { text: "Setting", icon: <SettingsApplicationsOutlinedIcon /> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#D98A54" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
            <Drawer open={openTab} onClose={() => setOpenTab(false)}>
              {DrawerList}
            </Drawer>
          </IconButton>
          <Typography
            color={"#FCD258"}
            sx={{ fontSize: 24, fontWeight: "bold" }}
          >
            Pazii
          </Typography>
          <Typography
            color={"#FFFF"}
            sx={{ fontSize: 24, fontWeight: "bold", flexGrow: 1 }}
          >
            Pizza
          </Typography>

          <Search sx={{ mr: 5 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Stack direction="row" spacing={1}>
            <Button
              sx={{
                bgcolor: "#F9B044",
                "&:hover": {
                  backgroundColor: "#D32F2F",
                  borderColor: "#D32F2F",
                },
                borderRadius: "20px",
                boxShadow: "2px 2px 0px 0px #4A1C04",
              }}
            >
              <ShoppingBagOutlinedIcon sx={{ color: "#ffff" }} />
            </Button>

            <Button
              sx={{
                bgcolor: "#F9B044",
                "&:hover": {
                  backgroundColor: "#D32F2F",
                  borderColor: "#D32F2F",
                },
                borderRadius: "20px",
                boxShadow: "2px 2px 0px 0px #4A1C04",
              }}
            >
              <QrCode2OutlinedIcon sx={{ color: "#ffff" }} />
            </Button>

            <Button
              sx={{
                bgcolor: "#F9B044",
                "&:hover": {
                  backgroundColor: "#D32F2F",
                  borderColor: "#D32F2F",
                },
                borderRadius: "20px",
                boxShadow: "2px 2px 0px 0px #4A1C04",
              }}
            >
              <NotificationsOutlinedIcon sx={{ color: "#ffff" }} />
            </Button>
          </Stack>

          <IconButton color="inherit" sx={{ ml: 2 }}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Home;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
