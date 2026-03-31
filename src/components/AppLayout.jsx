import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import {Box, Avatar, Grid, Typography} from '@mui/material';
import { Outlet, } from "react-router-dom";
import AppMenu from './AppMenu';
import appLayoutStyles from '../styles/appLayoutStyles';
import LocalStorageHandler from '../utils/localStorageHandler';
import { useNavigate, useLocation } from "react-router-dom";
import { AppContext } from '../core/context/appContext';
import CONSTANSTS from '../constants/appConstants';
// import NotificationsComponent from "./notifications/NotificationsComponent";
import ProfileMenu from './ProfileMenu';
import logoFile from '../org-logo.png'

const AppLayout = () => {

  return <div style={appLayoutStyles.root} >
    <AppHeader />
    <Box component={"div"} style={{ padding: "5px 10px" }}><Outlet /></Box>
  </div>
}

export default AppLayout;


const AppHeader = () => {
  const { handleBackDrop } = React.useContext(AppContext);
  const navigate = useNavigate();
  let location = useLocation();
  const [data, setData] = React.useState({ entityDetails: null });
  const { entityDetails } = data;

  let token = LocalStorageHandler.getToken();
  React.useEffect(() => {
    if (!token && allowsPath.indexOf(location.pathname) < 0) {
      navigate("/login");
    }
    
    setData(prev=>({...prev, entityDetails:LocalStorageHandler.getEntity()}));
  }, []);

  const onClick = (value) => {
    if (value === "logout") {
      LocalStorageHandler.resetStorage();
      navigate("/login");
    } else if (value === CONSTANSTS.OBJECTS.SETTINGS) {
      navigate("/settings");
    }
  }

  const getProfileMenus = () => {
    const profileMenus = [
      { value: CONSTANSTS.OBJECTS.SETTINGS, text: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.SETTINGS] }
    ];
    profileMenus.push({ value: "logout", text: "Logout" });
    return profileMenus;
  }

  let entityName = entityDetails ? entityDetails.name : "Empty";

  return <AppBar position="static">
    <Box style={appLayoutStyles.headerRow}>
      <AppIdentity/>
      <Box><AppMenu /></Box>
      <Box style={{marginLeft: "auto", display: "flex"}} >
        {/* <NotificationsComponent /> */}
        <Box style={appLayoutStyles.appTitle} title={"Current Entity: " + entityName}>
            <Typography>{entityName}</Typography>
        </Box>
        <ProfileMenu onClick={onClick}/>
      </Box>
    </Box>
  </AppBar>
}

const allowsPath = ["/register"];


const AppIdentity = () => {


  return <Grid container alignItems={'center'}>
    <Avatar src={logoFile} style={{height:32, width:32}}/>
    <Box style={appLayoutStyles.appTitle}>IntelliFleet Service</Box>
  </Grid>
}




