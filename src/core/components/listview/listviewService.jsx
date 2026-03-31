import ColumnFormatterComponent from "./ColumnFormatterComponent";
import HeaderFormatterComponent from "./HeaderFormatterComponent";

const ListViewService = {
    getColumns: (columns) => {
        let arr = [];
        if (columns) {
            arr = [...columns]; 
            arr = arr.map((m) => {
                return {
                    ...m,
                    omit: m.isHidden,    // used to hide fields
                    name: <HeaderFormatterComponent data={m} />,
                    // selector: row => row[m.dataField],
                    cell: (row, index, column, id) => <ColumnFormatterComponent row={row} index={index} column={column} id={id} />
                }
            })
        }
        return arr;
    },

    getSelectedRowIds: (selectedRows, cols) => {
        let pkField = cols.find(c => c.isPK);
        if(pkField) {
            return selectedRows.map(m => m[pkField.dataField]);
        }
        return [];
    }
}

export default ListViewService;