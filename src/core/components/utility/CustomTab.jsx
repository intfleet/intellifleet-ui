import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CONSTANSTS from '../../../constants/appConstants';
import { styled } from '@mui/material';


const Style = {
    tabHeight: {height: 30, minHeight: 30},
}


const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize: 12
}));

const CustomTab = (props) => {
    const { tabs=[], ...other } = props;
    console.log(tabs)
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                // variant="scrollable"
                // scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={Style.tabHeight}
            >
                {tabs.map( tab => <StyledTab label={tab.label} icon={tab.icon} {...allyProps(tab.id)}/>)}
            </Tabs>
        </Box>
        {tabs.map((tab, index) => <CustomTabPanel key={tab.id+index} value={value} index={index} children={tab.component}> {tab.component}</CustomTabPanel>)}
    </Box>
}

export default CustomTab;

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
        iconPosition: `start`,
        sx: Style.tabHeight
    };
}

const CustomTabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box style={{padding: "5px 0px"}}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};