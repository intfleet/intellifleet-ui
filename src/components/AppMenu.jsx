//https://github.com/szhsin/react-menu

import * as React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import Button from '@mui/material/Button';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link, useNavigate } from 'react-router-dom';
import MENU_LIST from '../constants/menuConstants';
import Utils from '../utils/utils';
import CONSTANSTS from '../constants/appConstants';
import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';

// Create a styled div that will contain our menu
const StyledMenuWrapper = styled.div`
  /* Target the SubMenu item using its class name */
  .szh-menu__item--submenu {
    padding-left: 7px;
    padding-right: 7px;
    height: 25px;
  }
`;

const AppMenu = () => {
    const navigate = useNavigate();

    return <StyledMenuWrapper>
        <Menu key={"app-menu-root"} menuClassName="my-menu" menuButton={<Button style={{ color: "#ffffff" }}>Menu</Button>}>
            {getMenuItems(getMenuList(), navigate)}
        </Menu>
    </StyledMenuWrapper>
}

export default AppMenu;


const getMenuItems = (list, navigate) => {
    return list.map(m => {
        if (m.subMenu) {
            return <SubMenu key={m.object + "-submenu"} menuClassName={m.object - "submenu"} style={{ height: 25, paddingLeft: 7, paddingRight: 7 }} label={<DisplayLabel {...m} />}>{getMenuItems(m.subMenu, navigate)}</SubMenu>
        } else {
            return <MenuItem key={m.object} menuclassname={m.object} sx={{ paddingLeft: 5 }} style={{ height: 25, paddingLeft: 7, paddingRight: 7 }} onClick={() => navigate(m.url)}>
                <DisplayLabel key={m.object+"-display-label"}{...m} />
            </MenuItem>
        }

    })
}

const getMenuList = () => {
    let list = [];
    MENU_LIST.filter(f => {
        if (!f.isHidden) {
            let a = f;
            if (f.subMenu) {
                a.subMenu = f.subMenu; //f.subMenu.filter(k => Utils.isPermission(k.object, CONSTANSTS.USER_PERMISSION.VIEW))
            }
            list.push(a);
        }
    })
    return list;
}

const DisplayLabel = ({ label, icon, ...props }) => {

    return <Stack direction="row" spacing={0.5}>
        {icon}
        <Typography component="span" variant="body3">{label}</Typography>
    </Stack>
}