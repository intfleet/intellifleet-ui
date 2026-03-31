/*
//react-bootstrap-table-next help link
//https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Pagination&selectedStory=Fully%20Custom%20Pagination&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

npm install react-bootstrap-table-next --save --legacy-peer-deps

*/
import BootstrapTable from 'react-bootstrap-table-next';
import './react-bootstrap-table2.min.css';
import './react-bootstrap-table2.css';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import React from 'react';
import ToolBar from '../toolbar/toolBar';
import ColumnFormatterComponent from './ColumnFormatterComponent';
import HeaderFormatterComponent from './HeaderFormatterComponent';


const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,    
};


const ListView = React.forwardRef(({
    object,
    columns,
    rows = [],
    toolBarIcon,
    rightElements=[],
    getData,
    getListViewData = () => { },
    isSearchRequired = true,
    wrapperClasses = "table_overflow",
    isPagingRequired = true,
    rowStyle = {},
    isDetailView = false
}, ref) => {

    let [selectedRow, setSelectedRow] = React.useState([]);
    const [reqParams, setReqParams] = React.useState({});
    const wrapperClassesCust = isDetailView ? "table_overflow-detail-view" : wrapperClasses;

    React.useImperativeHandle(ref, () => ({
        getSelectedRow: () => selectedRow,
    }));

    React.useEffect(() => {
        setSelectedRow([]);
    }, [rows.length])

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

    const onRowSelect = (row, isSelect, rowIndex, e) => {
        let arr = [...selectedRow];
        if (isSelect) {
            arr.push(row);
        } else {
            arr = arr.filter(f => f.id !== row.id);
        }
        setSelectedRow(arr)
    }

    const onAllRowSelect = (isSelect, rows) => {
        if (isSelect) {
            setSelectedRow(rows);
        } else {
            setSelectedRow([]);
        }
    }

    const getColumns = (columns) => {
        let arr = [];
        if (columns) {
            arr = [...columns];
            arr = isDetailView ? arr.filter(f => f.dataField !== "emptyCol") : arr;
            arr = arr.map((m) => {
                return {
                    ...m,
                    headerFormatter: HeaderFormatterComponent,
                    formatter: ColumnFormatterComponent,
                }
            })
        }
        return arr;
    }

    return <div className="react-bootstrap-table-container" key={"list-view-" + rows.length}>       
        {isPagingRequired && <PagingTable
            object={object}
            options={options} toolBarIcon={toolBarIcon}
            isSearchRequired={isSearchRequired}
            onSearchEvent={onSearchEvent}
            rightElements={rightElements}
            columns={columns} rows={rows} getColumns={getColumns} selectedRow={selectedRow.map(m => m.id)} onRowSelect={onRowSelect} onAllRowSelect={onAllRowSelect}
            wrapperClasses={wrapperClassesCust}
            rowStyle={rowStyle} />}
        {!isPagingRequired && <Table
            object={object}
            options={options} toolBarIcon={toolBarIcon}
            isSearchRequired={isSearchRequired}
            onSearchEvent={onSearchEvent}
            rightElements={rightElements}
            columns={columns} rows={rows} getColumns={getColumns} selectedRow={selectedRow.map(m => m.id)} onRowSelect={onRowSelect} onAllRowSelect={onAllRowSelect}
            wrapperClasses={wrapperClassesCust}
            rowStyle={rowStyle} />}
            
    </div>
});

export default ListView;



const Table = ({ key = "default-table", object, options, toolBarIcon, isSearchRequired, onSearchEvent, rightElements,
    columns, rows, getColumns, selectedRow, onRowSelect, onAllRowSelect, wrapperClasses, rowStyle }) => {
    return <div>
        {(toolBarIcon && isSearchRequired) && <ToolBar
            object={object}
            icons={toolBarIcon}
            search={isSearchRequired ? { columns: columns, onSearchEvent: onSearchEvent } : null}
            rightElements={rightElements} />}
        <BootstrapTable
            key={"list-view" + key}
            keyField='id' data={[...rows]} columns={getColumns(columns)}
            striped
            hover
            condensed
            selectRow={{ ...selectRow, selected: selectedRow, onSelect: onRowSelect, onSelectAll: onAllRowSelect }}
            wrapperClasses={wrapperClasses}
            rowStyle={rowStyle}
        />
    </div>
}

const PagingTable = ({ key = "default-table", object, classes, options, toolBarIcon, isSearchRequired, onSearchEvent, rightElements,
    columns, rows, getColumns, selectedRow, onRowSelect, onAllRowSelect, wrapperClasses, rowStyle }) => {
    return <PaginationProvider pagination={paginationFactory(options)}>
        {
            ({ paginationProps, paginationTableProps }) => (
                <div>
                    <ToolBar
                        object={object}
                        icons={toolBarIcon}
                        search={isSearchRequired ? { columns: columns, onSearchEvent: onSearchEvent } : null}
                        rightElements={rightElements ? [<PaginationListStandalone {...paginationProps} />, ...rightElements] : <PaginationListStandalone {...paginationProps} />} />
                    <BootstrapTable
                        key={"list-view" + key}
                        keyField='id' data={[...rows]} columns={getColumns(columns)}
                        striped
                        hover
                        condensed
                        selectRow={{ ...selectRow, selected: selectedRow, onSelect: onRowSelect, onSelectAll: onAllRowSelect }}
                        {...paginationTableProps}
                        wrapperClasses={wrapperClasses}
                        rowStyle={rowStyle}
                    />
                </div>
            )
        }
    </PaginationProvider>
}