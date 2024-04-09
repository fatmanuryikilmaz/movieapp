import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuItemCustom from "./MenuItemCustom";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const pages = [
  { name: "Products", items: ["card", "deli"] },
  { name: "Pricing", items: ["beleş", "ürün"] },
  { name: "Blog", items: ["a"] },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [searchIsActive, setSearchIsActive] = useState(false);
  const searchInputToggle = () => {
    setSearchIsActive(!searchIsActive);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              margin: "15px",
            }}
          >
            <Link to="/">
              <img
                src="/images/film-reel-home-feist-electronicsfeist-electronics-22.png"
                alt="logo"
                height={40}
              />
              <Typography
                variant="span"
                sx={{ ml: 4, mt: 1.4, mb: 0, fontSize: "26px" }}
              >
                Movie
              </Typography>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiMenu-list": {
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                },
              }}
            >
              {pages.map((page, index) => (
                <MenuItemCustom
                  key={index}
                  items={page.items}
                  name={page.name}
                />
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">
              <img
                src="/images/film-reel-home-feist-electronicsfeist-electronics-22.png"
                alt="logo"
                height={40}
              />
              <Typography variant="span" sx={{ ml: 4, mt: 1.4, mb: 0 }}>
                Movie
              </Typography>
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: "25px",
            }}
          >
            {pages.map((page, index) => (
              <MenuItemCustom
                key={index}
                items={page.items}
                name={page.name}
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexGrow: 0,
              ml: { md: 20 },
              mr: { md: 2 },
            }}
          >
            {searchIsActive && <SearchInput />}

            <SearchOutlinedIcon
              sx={{ fontSize: 25, mt: 0.5 }}
              onClick={searchInputToggle}
            />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <ManageAccountsOutlinedIcon
                  sx={{ color: "white", fontSize: 30 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
