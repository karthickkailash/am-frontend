import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { headerlogo } from "../../components/imagepath";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none", // Remove the box shadow
    borderBottom: "none", // Remove the bottom border
    // height: "55px",
  },
}));

export const HeaderOne = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElMobile, setAnchorElMobile] =
    React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    // You can handle the click event for each item here
    console.log(`Clicked on ${item}`);
    handleClose();
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ProductionQuantityLimitsIcon />
          </Badge>
        </IconButton>
        <p>Quantity</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <SupervisedUserCircleIcon />
          </Badge>
        </IconButton>
        <p>User</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "12px" }}>▼</span>
            </div>
          </IconButton>
        </div>
        <p>Helpline</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <div>
          <IconButton
            aria-label="more"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "12px" }}>▼</span>
            </div>
          </IconButton>
        </div>
        <p>Your Name</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className={classes.appBar}
        color={"transparent"}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img
              src={headerlogo}
              alt="Header Logo"
              style={{ marginRight: 1, width: "45px" }}
            />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ProductionQuantityLimitsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <SupervisedUserCircleIcon />
              </Badge>
            </IconButton>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <HelpOutlineIcon />
                  <span>▼</span> {/* Down arrow character */}
                </div>
              </IconButton>
              <Menu
                id="dropdown-menu"
                anchorEl={anchorElMobile}
                keepMounted
                open={Boolean(anchorElMobile)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleMenuItemClick("Item 1")}>
                  Item 1
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Item 2")}>
                  Item 2
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Item 3")}>
                  Item 3
                </MenuItem>
              </Menu>
            </div>
            <div>
              <IconButton
                aria-label="more"
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "4px", fontSize: "16px" }}>
                    Your Name
                  </span>
                  <span>▼</span> {/* Down arrow character */}
                </div>
              </IconButton>
            </div>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
