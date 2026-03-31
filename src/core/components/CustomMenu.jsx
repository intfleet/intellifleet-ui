
import * as React from 'react';
import { Box, Avatar } from '@mui/material'; import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Notifications';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



const CustomMenu = ({children, items=[], style={}, onClickOpenMenu=()=>{}, onClick=()=>{}, ...props}) => {
    const { root= {}, containerStyle={} } = style;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
        onClickOpenMenu();
    };

    const handleClose = (value) => (event) => {
        setAnchorEl(null);
        onClick(value);
    };

    return <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', ...root }}>
        <Box onClick={handleClickListItem} style={{...containerStyle}}>
            {children}
        </Box>        
        {items.length > 0 && <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose()}
            style={{ paddingLeft: 100 }}
            PaperProps={{                
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
                style: {marginLeft:12}
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {getItemElements(items, handleClose)}
        </Menu>}
    </Box>
}

const getItemElements = (items, handleClose =() => {}) => {
    let arr = [];
    items.map( m => {
        if(m.type == "item") {
            arr.push(<MenuItem onClick={handleClose(m.name)} {...m.props}>
                {m.icon}{m.label}
            </MenuItem>);
        } else {
            arr.push(<Divider />);
        }
    });
    return arr;
} 


export default CustomMenu;


/*



<MenuItem onClick={handleClose}>
                <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>

            */