
import { IconButton } from '@mui/material';
import React from 'react';
import Utility from '../utility';
const { CustomMenu } = Utility;
const {MoreMenu} = CustomMenu;

const styles = {
    buttonStyle: {
        padding: "5px 4px",
        marginTop: -1
    },
    toolBtnContainer: {
        marginRight: 5,
        border: "1px solid #83818187",
        borderRadius: 2
    }
};

const ToolBarIcon = ({ name, type, ...others }) => {

    let props = { style: { fontSize: 15 }, ...others }
    if (name === "MORE") {
        let { options = [], onClick = () => { } } = props;
        return <MoreMenu onClick={onClick} options={options} />
    }
    return <div style={styles.toolBtnContainer}>
        <IconButton aria-label={name} style={styles.buttonStyle}>
            {type === "ICON" && <i className={iconClass[name]} aria-hidden="true" {...props}></i>}
            {type === "SELECT" && <Dropdown {...props}/>}
        </IconButton>
    </div>
}

export default ToolBarIcon;

const iconClass = {
    "ADD": "fa fa-plus",
    "EDIT": "fa fa-pencil",
    "DELETE": "fa fa-trash-o",
    "EXCEL": "fa fa-file-excel-o",
    "CSV": "fa fa-file-excel-o",
    "PDF": "fa fa-file-pdf-o",
    "LINK": "fa fa-link",
    "REFRESH": "fa fa-refresh",
    "PRINT": "fa fa-print",
}


const Dropdown = (props) => {
    let { options = [], onClick = () => { } } = props;
    const [value, setValue] = React.useState({value: 0, text: ""});
    
    const onChange = (event) => {
        let val = options.find(f => f.value == event.target.value);
        setValue(val);
        onClick(val);
    }

    return <select key={"query-dropdown"} style={{border: "none", width: 90}} title={getQueryLabel(options, value)} onChange={onChange} className="listview-query-select-evt">
        {options.map( m => <option key={"id-"+m.value} value={m.value} selected={getSelectedValue(options, m.value)}>{m.text}</option>)}
    </select>

}

const getQueryLabel = (options = [], query) => {
    if(query && query.text && query.text !== "") {
        return "Query: " + query.text;
    } else if(options.some( s => s.isDefaultValue)) {
        return "Query: " + options.find( s => s.isDefaultValue).text;
    }
    return "Query:";
}

const getSelectedValue = (array=[], value) => {
    let selectedValue = array.find(f => f.isDefaultValue);
    if(selectedValue && selectedValue.value === value) {
        return true;
    }
    return false;
}