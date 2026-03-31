import { Box } from '@mui/material';
import React from 'react';
import { enqueueSnackbar } from "notistack";
import APIConstants from '../constants/apiConatants';
import { ListView } from '../core/components';
// import PageHeader from '../core/components/utility/PageHeader';
import { Utility, } from '../core/components';
import CONSTANSTS from '../constants/appConstants';
import { useEffectOnce } from '../core/custom-hook';
import AxiosApi from '../utils/httpRequestHandler';
import { AppContext } from '../core/context/appContext';
import StringUtility from '../core/utils/stringUtility';
import FormGeneratorContainer from '../core/components/form-generator/FormGeneratorContainer';
import ConfirmDialog from '../core/components/utility/confirmDialog';
const { PageHeader } = Utility;

const columns1 = [
    { dataField: 'id', text: 'ID', type: "TEXT", sortable: true, hidden: true, width: "50px" },
    { dataField: 'customerID', text: 'Customer ID', type: "TEXT", sortable: true, hidden: false, width: "100px" },
    { dataField: 'customerName', text: 'Customer Name', type: "TEXT", sortable: true, hidden: false, width: "200px" },
    { dataField: 'managerCustomerID', text: 'Manager Customer ID', type: "TEXT", sortable: true, hidden: false, width: "150px" },
    { dataField: 'customerClusterID', text: 'Customer Cluster ID', type: "TEXT", sortable: true, hidden: false, width: "150px" },
    { dataField: 'relationType', text: 'Relation Type', type: "TEXT", sortable: true, hidden: false, width: "150px" },
    { dataField: 'customerAuthentication', text: 'Customer Authentication', type: "TEXT", sortable: true, hidden: false, width: "150px" },
    { dataField: 'tmsCreate', text: 'Created Time', type: "TEXT", sortable: true, hidden: false, width: "150px" },
    { dataField: 'tmsUpdate', text: 'Update Time', type: "TEXT", sortable: true, hidden: false, width: "150px" },
    { dataField: 'activeRow', text: 'Active Row', type: "TEXT", sortable: true, hidden: false, width: "100px" },
    { dataField: 'note', text: 'Note', type: "TEXT", sortable: true, hidden: false, width: "150px" }
];

const tableFieldTemplate = { dataField: 'id', text: 'ID', type: "TEXT", sortable: true, hidden: true, reorder: false, width: "50px" };
const processAndGetColumns = (formFields=[]) => {
    let cols = new Array();
    //cols.push({...tableFieldTemplate}); // PK field
    
    for (const formCol of formFields) {
        cols.push({
            name: formCol.name,
            ...tableFieldTemplate, 
            dataField: formCol.name,
            text: formCol.label,
            fieldType: formCol.fieldType,
            sortable: true,
            isHidden: formCol.isHidden,
            isPK: formCol.isPK,
            width: "100px",
        });
    }
    return cols;
}

const CustomerContainer = ({ formId = 1 }) => {
    const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
    const listviewRef = React.useRef();
    const confrmDialogRef = React.useRef(null);

    const [data, setData] = React.useState();
    const [columns, setColumns] = React.useState([]);
    const [records, setRecords] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let params = { formId };
            handleBackDrop(true);
            let response = await AxiosApi.getData(APIConstants.RECORD_GET_LISTVIEW, params);
            handleBackDrop(false);
            if (response.data) {
                setData(response.data);
                setColumns(processAndGetColumns(response.data.fields));
                setRecords(response.data.records);
            }
        } catch (error) {
            console.error(error);
            setColumns([]);
            setRecords([]);
        }
    }

    const openDialogToCreateFormObject = (event) => {

        handleDialogOpen({
            title: "Create Customer",
            component: <FormGeneratorContainer id={0} formId={formId} callback={getData}/>,
            maxWidth: "sm",
        });
    }

    const openDialogToEditFormObject = async () => {
        let ids = listviewRef.current.getSelectedRowIds();
        if(!ids || ids.length > 1 ||  ids.length === 0) {
          enqueueSnackbar("Please select one record to edit.", { variant: "error" });
        } else {
          handleDialogOpen({
            title: "Edit Customer",
            component: <FormGeneratorContainer id={ids[0]} formId={formId} callback={getData}/>,
            maxWidth: "sm",
          });
        }
      }

    const toolBarIcon = [{ name: "ADD", title: "Add Owners", onClick: openDialogToCreateFormObject, type: "ICON", },
    { name: "EDIT", title: "Edit Owners", onClick: openDialogToEditFormObject, type: "ICON", },
    { name: "DELETE", title: "Delete Owners", onClick: null, type: "ICON", },
    { name: "PDF", title: "Export to .pdf file", onClick: () => { }, type: "ICON", },
    { name: "EXCEL", title: "Export to .excl file", onClick: () => { }, type: "ICON", }];

    return <>
        <PageHeader object={CONSTANSTS.OBJECTS.CUSTOMER} label={CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.CUSTOMER]} icon={CONSTANSTS.ICONS[CONSTANSTS.OBJECTS.CUSTOMER]} />
        <ListView ref={listviewRef} columns={columns} rows={records} isPagingRequired={false} toolBarIcon={toolBarIcon} />
        <ConfirmDialog ref={confrmDialogRef} />
    </>

    ///return <ListViewContainer object={CONSTANSTS.OBJECTS.CUSTOMER} CONSTANSTS={CONSTANSTS} columns={columns} />
};

export default CustomerContainer;


const resizable = (columns, setColumns) => () => {
    let table = document.getElementsByClassName("rdt_TableHeadRow");
    //let table = document.querySelectorAll("kMgreK");
    // table = document.querySelectorAll(".rdt_TableCol");
    // table = table[0].getElementsByClassName(".rdt_TableHead");
    // table = table[0].getElementsByClassName(".rdt_TableHeadRow");
    // table = table[0].firstChild
    const resizers = table && table.length > 0 ? table[0].querySelectorAll(".rdt_TableCol") : null;

    if(resizers) {
        let currentResizer;
        let startX;
        let startWidth;
    
        const resizeColumn = (index) => (e) => {
          if (!currentResizer) return;
          const dx = e.pageX - startX;
        //   currentResizer.parentElement.style.width = `${startWidth + dx}px`;
        //currentResizer.style.width = `${startWidth + dx}px`;
        // currentResizer.attributes.width.value = `${startWidth + dx}px`;
          console.log("index: "+index)
          console.log(currentResizer.className)
          console.log(currentResizer.attributes.width.value)

          let arr = [...columns];
          arr[index].width = `${startWidth + dx}px`;
          setColumns(arr);
        };
    
        const stopResize = () => {
          document.removeEventListener("mousemove", resizeColumn());
          document.removeEventListener("mouseup", stopResize);
          currentResizer = null;
        };
    
        resizers.forEach((resizer, index) => {
          resizer.addEventListener("mousedown", (e) => {
            e.preventDefault();
            currentResizer = resizer;
            startX = e.pageX;
            // startWidth = currentResizer.parentElement.offsetWidth;
            startWidth = currentResizer.offsetWidth;
    
            document.addEventListener("mousemove", resizeColumn(index));
            document.addEventListener("mouseup", stopResize);
          });
        });
    
        // cleanup
        return () => {
          resizers.forEach((resizer) => {
            resizer.replaceWith(resizer.cloneNode(true)); // remove old listeners
          });
        };
    }
    
  }