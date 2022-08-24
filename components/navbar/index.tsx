import * as React from "react";
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
import { routes } from "./data";
import { cartCss, cartLogoCss, logoMobilestyles, logoStyles } from "./style";
import Drawer from "@mui/material/Drawer";
import cart from "assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { colors } from "utils/theme";
import { useAppSelector } from "redux/store/store";
import { RandomlyPositionedModal, Backdrop } from "components/cart/style";
import Cart from "components/cart/cart";
import { useLocation } from "react-use";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const router = useRouter();
  const loc=useLocation()
  const [open, setOpen] = React.useState(false);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);
  const renderBackdrop = (props: any) => <Backdrop {...props} />;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar sx={{ backgroundColor: "black" }} position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h2" noWrap component="a" href="/" sx={logoStyles}>
            audiophile
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
              <MenuIcon fontSize="large" />
            </IconButton>

            <Drawer
              id="menu-appbar"
              anchor="top"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {routes.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Drawer>
          </Box>

          <Typography variant="h2" noWrap component="a" href="/" sx={logoMobilestyles}>
            audiophile
          </Typography>

          <Box sx={{ flexGrow: 1, justifyContent: "center", display: { xs: "none", md: "flex" } }}>
            {routes.map((page) => (
              <Button
                key={page.name}
                onClick={() => router.push(`${page.path}`)}
                sx={{
                  my: 2,
                  fontSize: "medium",
                  fontWeight: "bold",
                  color: loc.pathname == page.path ? colors.colorDarkPink : "#fafafa",
                  display: "block",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box css={cartLogoCss} onClick={() => setOpen(!open)}>
              {cartProducts.length > 0 && <p css={cartCss}>{cartProducts.length}</p>}
              <Image src={cart} alt="cart" />
            </Box>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography fontSize="large" textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <RandomlyPositionedModal
        show={open}
        onHide={() => setOpen(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
      >
        <Cart setOpen={setOpen} />
      </RandomlyPositionedModal>
    </AppBar>
  );
};
export default ResponsiveAppBar;
