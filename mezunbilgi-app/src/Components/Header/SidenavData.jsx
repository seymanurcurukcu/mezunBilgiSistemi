import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from '@material-ui/icons/School';
import SearchIcon from "@material-ui/icons/Search";
import Work from "@material-ui/icons/Work";

import BarChart from "@material-ui/icons/BarChart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InfoIcon from "@material-ui/icons/Info";
import Help from "@material-ui/icons/Help";
import ContentPasteIcon from '@material-ui/icons/EventNote';
import Report from '@material-ui/icons/Report';
import Announcement from '@material-ui/icons/AddAlert';
import Announcementd from '@material-ui/icons/SchoolTwoTone';
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyles";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Home", link: "/", icon: <HomeIcon /> },
    { label: "Bugün Doğan Mezunlar", link: "/bugundoganmezunlar", icon: <SchoolIcon /> },
    { label: "CV Arama", link: "/cvarama", icon: <SearchIcon /> },
    { label: "İş İlanları", link: "/isilanlari", icon: <Work />,},
    { label: "Sayilar", link: "/sayilar", icon: <BarChart /> },
    { label: "Raporlar", link: "/raporlar", icon: <Report /> },
    { label: "Haber Paneli", link: "/haberpaneli", icon: <Announcement /> },
    { label: "Mezunlar", link: "/mezunlar", icon: <Announcementd /> },
    { label: "Mezun Bilgileri", link: "/mezunbilgileri", icon: <ContentPasteIcon /> },
    { label: "S.S.S", link: "/sorular", icon: <Help /> },
    { label: "Help", link: "/help", icon: <InfoIcon /> },
    { label: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size='small'
          className={classes.navButton}
          onClick={() => handleDrawerClose()}
          key={i}>
          <ListItem
            exact
            component={NavLink}
            to={item.link}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
