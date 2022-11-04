import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route } from "react-router-dom";
import { useStyles } from "./HeaderStyles";
import Home from "../BodyComponent/Home/Home";
import BugunDoganMezunlar from "../BodyComponent/BugunDoganMezunlar/BugunDoganMezunlar";
import IsIlanlari from "../BodyComponent/IsIlanlari/IsIlanlari";
import CvArama from "../BodyComponent/CvArama/Cvarama";
import Sayilar from "../BodyComponent/Sayilar/Sayilar";
import Sorular from "../BodyComponent/SorulanSorular/SorulanSorular";
import Help from "../BodyComponent/Help/Help";
import Logout from "../BodyComponent/Logout";
import Raporlar from "../BodyComponent/Raporlar/Raporlar";
import HaberPaneli from "../BodyComponent/HaberPaneli/HaberPaneli";
import MezunBilgileri from "../BodyComponent/MezunBilgileri/MezunBilgileri";
import Mezunlar from "../BodyComponent/Mezunlar/Mezunlar";
export default function HeaderComponent() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <Navbar handleDrawerOpen={handleDrawerOpen} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
    
      <Box className={classes.wrapper}>
        <Switch>
        <Route exact path='/' render={() => <Home/>} />
          <Route exact path='/bugundoganmezunlar' render={() => <BugunDoganMezunlar />} />
          <Route exact path='/cvarama' render={() => <CvArama />} />
          <Route exact path='/isilanlari' render={() => <IsIlanlari />} />
          <Route exact path='/sayilar' render={() => <Sayilar />} />
          <Route exact path='/raporlar' render={() => <Raporlar />} />
          <Route exact path='/haberpaneli' render={() => <HaberPaneli />} />
          <Route exact path='/mezunlar' render={() => <Mezunlar />} />
          <Route exact path='/mezunbilgileri' render={() => <MezunBilgileri />} />
          <Route exact path='/sorular' render={() => <Sorular />} />
          <Route exact path='/help' render={() => <Help />} />
          
          <Route exact path='/logout' render={() => <Logout />} />
        </Switch>
      </Box>
    </div>
  );
}
