
import React from 'react';
import PropTypes from 'prop-types';
import ListViewSearchBox from '../utility/listViewSearchBox';
import ToolBarIcon from './toolBarIcon';
import { Box } from '@mui/material';

const styles = {
    container: {
        height: 37,
        display: "flex",
        fontSize: 12
    },
    leftPanel: { "width": "60%", display: "flex" },
    rightPanel: { "width": "40%", display: "flex", alignItems:'center', justifyContent:'flex-end' },
    allToolBtnContainer: {
        display: 'flex',
        margin: "7px 0px"
    },
    rightAlign: {
        float: "right",
        display: "flex"
    },


    noteHeader: {
        display: "flex",
        background: "#f0f8ff",
        padding: "4px 10px",
        height: 30,
        fontWeight: 600,
        color: "#333333c7"
    },
    noteBody: {
        padding: "0px 10px",
    },
    toolBtnContainer: {
        marginLeft: 5,
        border: "1px solid #83818187",
        borderRadius: 2
    }
};


const ToolBar = ({ object, icons = [], search, rightElements = [] }) => {
    const { columns = [], onSearchEvent = () => { } } = search ? search : {};

    return <Box style={styles.container}>
        <Box style={styles.leftPanel}>
            <Box style={styles.allToolBtnContainer}>
                {icons && icons.filter(f => f.name !== "MORE" || (f.name === "MORE" && f.options && f.options.length > 0))
                    .map((m, index) => <ToolBarIcon key={"toolbaricon-"+index} {...m} />)}
            </Box>
            {search && <ListViewSearchBox object={object} fields={columns} onSearchEvent={onSearchEvent} />}
        </Box>
        <Box style={styles.rightPanel}>
            <Box style={styles.rightAlign}>
                {rightElements && rightElements.length > 0 && rightElements.map(e=>e)}
            </Box>
        </Box>
    </Box>
}

export default ToolBar;

ToolBar.propTypes = {
    icons: PropTypes.array, //[{ name: "PDF", title: "Export to .pdf file", onClick: () => { }, }, ]
    search: PropTypes.object,    //{ columns: columns, onSearchEvent: onSearchBoxEnterEvent }
    rightElements: PropTypes.array
}