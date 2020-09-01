import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { actions } from "../../action/user";

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
}));

export default function Navbar({ user }) {
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
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>logout</MenuItem>
            </Menu>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
