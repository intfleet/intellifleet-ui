import React from 'react';
import Filter from './filter';

const styles = {
    select: {
        //maxWidth: 100,
        width: "30%",
        border: "none",
        borderRight: "1px solid #83818187",
        marginRight: 5,
        //focus event on listview css file
    },
    inputParent: {
        width:350,
        border: "1px solid #83818187",
        margin: "7px 0px",
        padding: 4,
        borderRadius: 3,
        display: "flex"
    },
    input: {
        marginLeft: 5,
        border: "none",
        height: "95%",
        width: '59%',
        '&:focus': {
            // borderColor: '#80bdff',
            // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            outline: "none"
        },
    },
    searchIcon: {
        cursor: 'pointer',
    },
    filterIcon: {
        cursor: 'pointer',
    }
};


const ListViewSearchBox = ({ object, classes, fields, onSearchEvent }) => {
    const arrFields = fields.filter( f => !f.hidden && f.type !== "EMPTY" && f.type !== "DATE"
/*&& f.dataField !== "createdByName" && f.dataField !== "modifiedByName"*/);
    const [fieldName, setFieldName] = React.useState(getFirstFiled(arrFields));
    const [fieldValue, setFieldValue] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);

    React.useEffect(() => {
        console.log("search-fieldName: " + fieldName, "search-fieldValue: " + fieldValue);
    }, [fieldName, fieldValue]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          console.log('do validate');
          if(onSearchEvent && onSearchEvent instanceof Function) {
            let fld = arrFields.find(f => f.dataField == fieldName);
            onSearchEvent([{dataField: fld.dataField, type: fld.type, value: fieldValue}]);
          }
        }
      }

      const handleFilter = (event) => {
        setAnchorEl(event ? event.currentTarget : null);
      };
    
      let filterFilds = fields.filter(f => !f.hidden && f.type == "DATE");
    return <div style={styles.inputParent}>
        <select className="listview-search-box-select-evt" style={styles.select} onChange={e => setFieldName(e.currentTarget.value)} title={fieldValue ? fieldValue : ""}>
            {arrFields && arrFields.map((m, index) => <option key={"listview-search-select-"+index} value={m.dataField} title={m.text}>{m.text}</option>)}
        </select>
        <i className={`fa fa-search`} style={styles.searchIcon} aria-hidden="true"></i>
        <input 
            className="listview-search-box-input-evt"
            style={styles.input} 
            placeholder='Type text here....' 
            title="Type text here & press enter to search."
            onChange={e => setFieldValue(e.currentTarget.value)}
            onKeyDown={handleKeyDown}></input>
        {(filterFilds && filterFilds.length > 0) && <i className={`fa fa-filter`} style={styles.filterIcon} aria-hidden="true" onClick={handleFilter} title="Click here to open Custom Filter"></i>}
        { (anchorEl) && <Filter anchorEl={anchorEl} handleClose={handleFilter} object={object} fields={filterFilds} onSearchEvent={onSearchEvent}/> }
    </div>
}


export default ListViewSearchBox; 

const getFirstFiled = (arrFields) => {
    if(arrFields) {
        let arr = arrFields.filter( f => !f.hidden);
        if(arr.length > 0) {
            return arr[0].dataField
        }
    }
    return "";
}