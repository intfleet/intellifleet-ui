
const customStyles = {
	rows: {
		style: {
			minHeight: 15, // override the row height
			fontSize: 10
		},
	},
	headCells: {
		style: {          
            "borderLeft": "1px solid rgba(0, 0, 0, .12)",  
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
            fontWeight: 'bold',
            // color: 'rgb(0 0 0 / 63%)',
			fontSize: 10,
			marginBottom: 1,			
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
			paddingTop: 2,
		},
	},
};

export default {
    customStyles
};