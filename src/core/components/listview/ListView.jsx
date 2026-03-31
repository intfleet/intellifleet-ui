/*
// react-data-table-component help link
//https://react-data-table-component.netlify.app/?path=/docs/getting-started-intro--docs
npm install react-data-table-component styled-components

*/


import React from 'react';
import DataTable from 'react-data-table-component';
import ToolBar from '../toolbar/toolBar';
import ColumnFormatterComponent from './ColumnFormatterComponent';
import HeaderFormatterComponent from './HeaderFormatterComponent';
// import './react-bootstrap-table2.min.css'
import Style from './style';
import ListViewService from './listviewService';
import ListViewColumnResizeService from './listViewColumnResizeService';

//loaded at end of page because it's required to override. so dont move this line on top
import './listview.css';


const ListView = React.forwardRef(({
    object,
    columns,
    rows = [],
    toolBarIcon,
    rightElements = [],
    getData,
    getListViewData = () => { },
    isSearchRequired = true,
    wrapperClasses = "table_overflow",
    isPagingRequired = true,
    rowStyle = {},
    isDetailView = false,
    onColumnResize = () => {}
}, ref) => {

    let [cols, setCols] = React.useState([]);
    let [selectedRows, setSelectedRows] = React.useState([]);
    const [reqParams, setReqParams] = React.useState({});
    const wrapperClassesCust = isDetailView ? "table_overflow-detail-view" : wrapperClasses;

    React.useImperativeHandle(ref, () => ({
        getSelectedRow: () => selectedRows,
        getSelectedRowIds: () => ListViewService.getSelectedRowIds(selectedRows, cols)
    }));

    React.useEffect(() => {
        if(columns.length > 0) {
            setCols(ListViewService.getColumns(columns));
        }        
    }, [columns.length]);    

    React.useEffect(() => {
        setSelectedRows([]);
    }, [rows.length]);    

    //ListView Column resize events add after update dom
    React.useEffect(() => {
        let rtnFunc;
        // wait until table DOM updates are flushed
        const id = setTimeout(() => {
            rtnFunc = ListViewColumnResizeService.init(cols, setCols, onColumnResize);
        }, 10);

        return () => {
            clearTimeout(id);
            return rtnFunc;
        }
    }, [cols.length, rows.length]);

    const options = {
        onSizePerPageChange: (sizePerPage, page) => {
            console.log('Size per page change!!!');
            console.log('Newest size per page:' + sizePerPage);
            console.log('Newest page:' + page);
        },
        // onPageChange: (page, sizePerPage) => {
        //   console.log('Page change!!!');
        //   console.log('Newest size per page:' + sizePerPage);
        //   console.log('Newest page:' + page);
        // }
        custom: true,
        totalSize: rows.length
    };

    const onSearchEvent = (fieldValues) => {
        // setReqParams({ searchFieldName: fieldName, searchFieldValue: searchValue });

        if (fieldValues) {
            getListViewData({ seacrchFields: fieldValues });
        }
    }

    const onRowSelect = ({ selectedRows, allSelected, selectedCount }) => {
        setSelectedRows(selectedRows);
    }

    return <div className="react-bootstrap-table-container" key={"list-view-" + rows.length}>
        <Table
            object={object}
            options={options} toolBarIcon={toolBarIcon}
            isSearchRequired={isSearchRequired}
            onSearchEvent={onSearchEvent}
            rightElements={rightElements}
            columns={cols}
            rows={rows}
            onRowSelect={onRowSelect}
            customStyles={Style.customStyles}
        />

    </div>
});

export default ListView;



const Table = ({
    key = "default-table", fixedHeader = true, fixedHeaderScrollHeight = "434px", customStyles,
    object, toolBarIcon, isSearchRequired, onSearchEvent, rightElements,
    columns, rows, onRowSelect }) => {
    return <div>
        {(toolBarIcon && isSearchRequired) && <ToolBar
            object={object}
            icons={toolBarIcon}
            search={isSearchRequired ? { columns: columns, onSearchEvent: onSearchEvent } : null}
            rightElements={rightElements} />}
        <DataTable
            key={"list-view" + key}
            id={"list-view" + key}
            columns={columns}
            data={[...rows]}
            fixedHeader={fixedHeader}
            fixedHeaderScrollHeight={fixedHeaderScrollHeight}
            customStyles={customStyles}
            selectableRows
            onSelectedRowsChange={onRowSelect}
            className="my-custom-table"
        />
    </div>
}

