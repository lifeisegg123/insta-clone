import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { actions } from "../../action/user";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: "1",
  },
  appBar: {
    height: "50px",
    backgroundColor: "#ffffff",
  },
  toolBar: {
    minHeight: "0px",
    height: "50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menu: {
    marginTop: "34px",
    marginLeft: "35px",
  },
  title: {
    textDecoration: "none",
    color: "black",
    fontSize: "25px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  homeIcon: {
    color: "black",
    textDecoration: "none",
    height: "48px",
    width: "48px",
  },
}));

export default function Navbar({ userInfo }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const accountOnclickHandeler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(actions.requestLogout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Link to="/" className={classes.title}>
            Instaclone
          </Link>
          <span>
            <Link to="/" className={classes.homeIcon}>
              <IconButton color="inherit">
                <HomeIcon></HomeIcon>
              </IconButton>
            </Link>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={accountOnclickHandeler}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
              className={classes.menu}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  className={classes.link}
                  to={`/profile/${userInfo.userKey}`}
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>logout</MenuItem>
            </Menu>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
