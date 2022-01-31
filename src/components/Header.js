import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/styles/useTheme";

//Menu
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";

const useStyles = makeStyles((theme) => ({
  brand__name: {
    paddingRight: theme.spacing(10),
    color: "#2D5E54",
  },
  links__container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  links__left: {
    display: "flex",
  },
  links__right: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    padding: theme.spacing(1),
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm")); // Variable for media query
  const [show, setShow] = useState(false);
  return (
    <AppBar sx={{ backgroundColor: "#FFFFFF" }} position="fixed">
      <Container>
        <Toolbar>
          <Link to="/">
            <Typography className={classes.brand__name} variant="h6">
              Es
            </Typography>
          </Link>

          {matches ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div className={classes.link}>
                <span style={{ borderRadius: "100%" }}>
                  <ShoppingCartIcon sx={{ color: "#000" }} />
                </span>
              </div>
              <div className={classes.link}>
                <span>
                  <MenuIcon
                    sx={{ color: "#000" }}
                    onClick={() => setShow(!show)}
                  />
                </span>
              </div>
            </div>
          ) : (
            <div className={classes.links__container}>
              <div className={classes.links__left}>
                <div className={classes.link}>
                  <Link to="/explore">
                    <span style={{ color: "#DADADA" }}>Explore</span>
                  </Link>
                </div>
                <div className={classes.link}>
                  <span style={{ color: "#DADADA" }}>Guides</span>
                </div>
                <div className={classes.link}>
                  <span style={{ color: "#DADADA" }}>Shop</span>
                </div>
                <div className={classes.link}>
                  <span style={{ color: "#DADADA" }}>Articles</span>
                </div>
              </div>
              <div className={classes.links__right}>
                <div className={classes.link}>
                  <span>
                    <ShoppingCartIcon
                      sx={{
                        color: "#000",
                      }}
                    />
                  </span>
                </div>
                <div className={classes.link}>
                  <span>
                    <Link to="/create-post">
                      <Button
                        sx={{ backgroundColor: "#3A3A3A" }}
                        size="small"
                        variant="contained"
                      >
                        Create Post
                      </Button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          )}
        </Toolbar>
        {show ? (
          <Paper
            sx={{
              backgroundColor: "#FFFFFF",
              width: 320,
              position: "absolute",
              right: 40,
              top: 40,
            }}
          >
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText inset>Explore</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText inset>Guides</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText inset>Shop</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText inset>Create Post</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText inset>Profile</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText inset>Collections</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText inset>Settings</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem sx={{ backgroundColor: "#F9F9FA" }}>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText inset>Logout</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        ) : (
          ""
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
