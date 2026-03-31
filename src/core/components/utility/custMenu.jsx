import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const ITEM_HEIGHT = 48;

const styles =  {
    toolBtnContainer: {
        marginRight: 5,
        border: "1px solid #83818187",
        borderRadius: 2
    },
    buttonStyle: {
        padding: 7,
        marginTop: -2
    }
};
const MoreMenu = React.forwardRef(({ name = "menu", options = [], ...others }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    React.useImperativeHandle(ref, () => ({
        handleOpen: handleOpen
    }));

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onClickEvt = (value, onClick) => (event) => {
        handleClose();
        onClick && onClick(value)
    }

    let props = { style: { fontSize: 20 }, ...others }

    return <div style={styles.toolBtnContainer}>
        <IconButton aria-label={name} style={styles.buttonStyle} onClick={handleOpen}>
            <i className={"fa fa-ellipsis-v"} aria-hidden="true" {...props}></i>
        </IconButton>
        <Menu
            id={name + "-id"}
            key={name + "-key"}
            name={name}
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            {options.map((option) => (
                <MenuItem key={option.value} title={option.text} selected={option === 'Pyxis'} onClick={onClickEvt(option.value, option.onClick)}>
                    {option.text}
                </MenuItem>
            ))}
        </Menu>
    </div>
});

export default { MoreMenu };