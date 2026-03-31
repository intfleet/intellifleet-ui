import { Box } from '@mui/material';
import React from 'react';
import CONSTANSTS from '../../../constants/appConstants';

const pageHeaderStyle = {
    root: {
        flexGrow: 1,
        padding: 5
    },
    iconContainer: {
        border: "1px solid #838181",
        borderRadius: 20,
        width: 25,
        height: 25
    },
    iconDashboard: {
        marginTop: 3,
        fontSize: 16,
        display: "grid",
        placeItems: "center"
    },
    iconForAll: {
        marginLeft: 6,
        marginTop: 6,
    },
    container: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        fontSize: 20
    },
    titleContainer: {
        display: "flex",
        lineHeight: 1
    },
    bodyContainer: {
        display: "flex",
        justifyContent: "flex-end"
    },
    label: {
        padding: 4,
        fontWeight: "bold",
        marginLeft: 5,
        fontSize: 18
    },
    iconSettings: {
        marginLeft: 8,
        marginTop: 6,
    },
};

const PageHeader = ({ object, rightElements=[], label, isDetailView=false, icon }) => {
    
    return <Box>
        <Box style={pageHeaderStyle.container}>
            <Box style={pageHeaderStyle.titleContainer}>
                {icon && <Box style={pageHeaderStyle.iconContainer}>
                    {icon}
                </Box>}
                {label && <Box style={pageHeaderStyle.label}>{label} </Box>}
            </Box>
            <Box style={pageHeaderStyle.bodyContainer}>                    
                    {rightElements}
            </Box>
        </Box>
    </Box>
}

export default PageHeader;




const getClass = (object) => {
    if (CONSTANSTS.OBJECTS.DASHBOARD === object) {
        return pageHeaderStyle.iconDashboard;
    } else {
        return pageHeaderStyle.iconForAll;
    }
}