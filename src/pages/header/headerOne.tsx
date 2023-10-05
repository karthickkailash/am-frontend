import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { makeStyles } from "@mui/styles";
import MoreIcon from "@mui/icons-material/MoreVert";
import { headerlogo } from "../../components/imagepath";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

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
    setAnchorElMobile(null);
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
