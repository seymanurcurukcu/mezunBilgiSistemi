import React from "react";
import {
  Avatar,
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
import { useStyles } from "./HeaderStyles";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../logo/inonu-universitesi.png"
export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();
   
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
      
        <Typography variant='h6' className={classes.logo}>
        <Avatar src={logo} className={classes.navAvatar}></Avatar>
       <div style={{marginLeft:"10px",marginTop:"12px",fontSize:"14px"}}> {"İNÖNÜ ÜNİVERSİTESİ"}</div>
        </Typography>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
          <div style={{marginTop:"12px",fontSize:"14px",lineHeight:"28px",marginRight:'13px'}}>{"Siskon Yazılım Firması"}</div>
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
