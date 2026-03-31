import { Logout, PersonAdd, Settings, AccountCircleOutlined, CorporateFareOutlined, LibraryBooksOutlined } from '@mui/icons-material';
import { Avatar, Box, ListItemIcon } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import CONSTANSTS from '../constants/appConstants';
import LocalStorageHandler from '../utils/localStorageHandler';
import CustomMenu from "../core/components/CustomMenu"
import APIConstants from "../constants/apiConatants";
import AxiosApi from "../utils/httpRequestHandler"
import useEffectOnce from '../core/custom-hook/useEffectOnce';
import Utils from '../utils/utils';


const styles = {
    userProfile: {
        width: 32,
        border: "2px solid #ffffff",
        height: 32,
        borderRadius: 20,
        cursor: "pointer"
    },
    profileIcon: {
        fontSize: 20,
        margin: "2px 5.5px"
    },
}

const ProfileMenu = () => {
    const [imgUrl, setImgUrl] = React.useState(null);
    const navigate = useNavigate();

    useEffectOnce(()=>{
        getProfileImage();
    })

    const getProfileImage = async () => {
        try {
            // let response = await AxiosApi.getImgFileUrl(APIConstants.USER_DETAILS_PROFILE_PICTURE_GET);
            // setImgUrl(response.data);
            // localStorage.setItem("profileImgUrl", response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const onClick = (value) => {

        if (value == CONSTANSTS.OBJECTS.MY_DETAILS) {
            navigate("/" + CONSTANSTS.OBJECTS.MY_DETAILS);
        } else if (value === CONSTANSTS.OBJECTS.ORG_DETAILS) {
            navigate("/"+CONSTANSTS.OBJECTS.ORG_DETAILS);
        } else if (value === CONSTANSTS.OBJECTS.USER_PROFILE) {
            navigate("/"+CONSTANSTS.OBJECTS.USER_PROFILE);
        } else if (value === "logout") {
            LocalStorageHandler.resetStorage();
            navigate("/login");
        } else if (value === CONSTANSTS.OBJECTS.SETTINGS) {
            navigate("/"+CONSTANSTS.OBJECTS.SETTINGS);
        }
    }

    const validateMenuItems = (items) => {
        let menuItems = [...items];
        let refId = '';//LocalStorageHandler.getLoggedInUserRefId();
        if(!refId || refId === "") {
            menuItems = menuItems.filter( f => f.name !== CONSTANSTS.OBJECTS.MY_DETAILS);
        }

        let userRole = Utils.getUserRole();
        if (userRole !== CONSTANSTS.USER_ROLE.SADMIN) {
            menuItems = menuItems.filter( f => f.name === "logout" || Utils.isPermission(f.name, CONSTANSTS.USER_PERMISSION.VIEW));
        }
        
        return menuItems;
    }
    
    return <CustomMenu items={validateMenuItems(arr)} onClick={onClick}>
        <Avatar src={imgUrl} style={styles.userProfile} />
    </CustomMenu>
}

export default ProfileMenu;

const arr = [
    {
        name: CONSTANSTS.OBJECTS.USER_PROFILE,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.USER_PROFILE],
        type: "item",
        props: {},
        icon: <ListItemIcon><AccountCircleOutlined /></ListItemIcon>,
    },
    {
        name: CONSTANSTS.OBJECTS.MY_DETAILS,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.MY_DETAILS],
        type: "item",
        props: {},
        icon: <ListItemIcon><LibraryBooksOutlined /></ListItemIcon>,
    },
    {
        name: "org-details",
        label: "Organisation",
        type: "item",
        props: {},
        icon: <ListItemIcon><CorporateFareOutlined /></ListItemIcon>,
    },
    {

    },
    // {
    //     name: "add-account",
    //     label: "Add another account",
    //     type: "item",
    //     props: {},
    //     icon: <ListItemIcon> <PersonAdd fontSize="small" /> </ListItemIcon>,
    // },
    {
        name: "settings",
        label: "Settings",
        type: "item",
        props: {},
        icon: <ListItemIcon> <Settings fontSize="small" /> </ListItemIcon>,
    },
    {
        name: "logout",
        label: "Logout",
        type: "item",
        props: {},
        icon: <ListItemIcon> <Logout fontSize="small" /> </ListItemIcon>,
    },
]
