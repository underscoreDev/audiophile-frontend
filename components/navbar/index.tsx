import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { colors } from "utils/theme";
import Menu from "@mui/material/Menu";
import Cart from "components/cart/cart";
import { useLocation } from "react-use";
import { useRouter } from "next/router";
import Button2 from "components/buttons";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { routes, NavRoutes } from "components/navbar/data";
import {
  cartCss,
  cartLogoCss,
  logoMobilestyles,
  logoStyles,
  categoryTypeCss,
  categorydescCss,
} from "components/navbar/style";
import { useAppSelector } from "redux/store/store";
import cart from "assets/shared/desktop/icon-cart.svg";
import { categoryGroupCss } from "components/categoryGroup/style";
import { RandomlyPositionedModal, Backdrop } from "components/cart/style";
import speaker from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "assets/shared/desktop/image-category-thumbnail-headphones.png";
import Navlogo from "./navlogo";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const router = useRouter();
  const loc = useLocation();
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
    <AppBar sx={{ backgroundColor: "black", padding: "1rem 0" }} position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={logoStyles}>
            <Navlogo />
          </Box>

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
              <IconButton onClick={handleCloseNavMenu}>
                <CloseIcon fontSize="large" />
              </IconButton>
              <Box css={categoryGroupCss} style={{ marginTop: "10rem", marginBottom: "5rem" }}>
                <Box css={categoryTypeCss}>
                  <Box style={{ marginBottom: "-3rem" }}>
                    <Image width={146} height={146} alt="headphones image" src={headphones} />
                  </Box>

                  <Box css={categorydescCss}>
                    <h1>HEADPHONES</h1>

                    <Button2
                      onClick={() => router.push("/headphones")}
                      text="shop"
                      variant="BORDERLESS_BLACK"
                    />
                  </Box>
                </Box>

                <Box css={categoryTypeCss}>
                  <Box style={{ marginBottom: "-3rem" }}>
                    <Image width={146} height={146} alt="speaker image" src={speaker} />
                  </Box>

                  <Box css={categorydescCss}>
                    <h1>SPEAKER</h1>

                    <Button2
                      onClick={() => router.push("/speaker")}
                      text="shop"
                      variant="BORDERLESS_BLACK"
                    />
                  </Box>
                </Box>

                <Box
                  css={`
                    ${categoryTypeCss}
                    @media (max-width: 600px) {
                      margin-bottom: 0;
                    }
                  `}
                >
                  <Box style={{ marginBottom: "-3rem" }}>
                    <Image width={146} height={146} alt="earphones image" src={earphones} />
                  </Box>

                  <Box css={categorydescCss}>
                    <h1>EARPHONES</h1>

                    <Button2
                      onClick={() => router.push("/earphones")}
                      text="shop"
                      variant="BORDERLESS_BLACK"
                    />
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </Box>

          <Box sx={logoMobilestyles}>
            <Navlogo />
          </Box>

          <Box sx={{ flexGrow: 1, justifyContent: "center", display: { xs: "none", md: "flex" } }}>
            {routes.map((page: NavRoutes) => (
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
                <Avatar alt="User Photo" src="/static/images/avatar/2.jpg" />
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
                  <Typography fontSize="large" textAlign="center">
                    {setting}
                  </Typography>
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
