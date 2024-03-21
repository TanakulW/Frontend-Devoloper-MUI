import {
  Badge,
  Box,
  Button,
  CardMedia,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import QR from "../../../assets/image/QRCODE.png";

const AppBarComp = (props) => {
  const { setDarkModeMain, orderSelect } = props;
  const [openTab, setOpenTab] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  const toggleDrawer = (newOpen) => () => {
    setOpenTab(newOpen);
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setDarkModeMain(!darkMode);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openList = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseList = () => {
    setAnchorEl(null);
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
        <Toolbar
          sx={{
            // background: "linear-gradient(90deg, #F0BA56 10%, #D98A54 100%)",
            backgroundColor: darkMode
              ? "black"
              : "linear-gradient(90deg, #F0BA56 10%, #D98A54 100%)",
            backgroundImage: darkMode
              ? "none"
              : "linear-gradient(90deg, #F0BA56 10%, #D98A54 100%)",
            boxShadow: "2px 2px 0px 0px white",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={openTab} onClose={() => setOpenTab(false)}>
            {DrawerList}
          </Drawer>

          <Typography color={"#FFFF"} sx={{ fontSize: 24, fontWeight: "bold" }}>
            P
          </Typography>
          <Typography
            color={"#D98A54"}
            sx={{ fontSize: 24, fontWeight: "bold" }}
          >
            azii
          </Typography>
          <Typography color={"#FFFF"} sx={{ fontSize: 24, fontWeight: "bold" }}>
            P
          </Typography>
          <Typography
            color={"#D32F2F"}
            sx={{ fontSize: 24, fontWeight: "bold", flexGrow: 1 }}
          >
            izza
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
            <Badge badgeContent={0} color="error">
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
                onClick={handleClick}
              >
                <ShoppingBagOutlinedIcon sx={{ color: "#ffff" }} />
              </Button>

              <Menu
             
                anchorEl={anchorEl}
                open={openList}
                onClose={handleCloseList}
                
              >
                <MenuItem onClick={handleCloseList}>Profile</MenuItem>
                <MenuItem onClick={handleCloseList}>My account</MenuItem>
                <MenuItem onClick={handleCloseList}>Logout</MenuItem>
              </Menu>
            </Badge>

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
              onClick={handleOpen}
            >
              <QrCode2OutlinedIcon sx={{ color: "#ffff" }} />
            </Button>

            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <CardMedia
                  component="img"
                  image={QR}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    m: "auto",
                    p: 1,
                  }}
                />
              </Box>
            </Modal>

            <Badge badgeContent={4} color="error">
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
            </Badge>
          </Stack>

          <div>
            <Button
              onClick={toggleDarkMode}
              sx={{ color: darkMode ? "white" : "black", ml: 2 }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>

          <Tooltip title="Log Out">
            <IconButton
              color="inherit"
              sx={{
                ml: 2,
                bgcolor: "#F9B044",
                "&:hover": {
                  backgroundColor: "#D32F2F",
                  borderColor: "#D32F2F",
                },
                borderRadius: "20px",
                boxShadow: "2px 2px 0px 0px #4A1C04",
              }}
              onClick={handleLogout}
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComp;

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
