import { Box } from '@mui/material';
import React from 'react';
import { enqueueSnackbar } from "notistack";
import APIConstants from '../../constants/apiConatants';
import { ListView } from '../../core/components';
// import PageHeader from '../core/components/utility/PageHeader';
import { Utility } from '../../core/components';
import CONSTANSTS from '../constants/appConstants';
import { useEffectOnce } from '../core/custom-hook';
import AxiosApi from '../utils/httpRequestHandler';
import { AppContext } from '../core/context/appContext';
import StringUtility from '../core/utils/stringUtility';
import FormGeneratorContainer from '../core/components/form-generator/FormGeneratorContainer';
import ConfirmDialog from '../core/components/utility/confirmDialog';
const { PageHeader } = Utility;


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

const ListViewContainer = forwardRef(({ 
    object, 
    // parentObject, 
    // parentRecordId = 0, 
    // isDetailView = false, 
    // onListViewGetData = () => { },
    CONSTANSTS = {},
    apiInfo = {url: ""}
}, ref) => {
    const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
    const listviewRef = React.useRef();
    const confrmDialogRef = React.useRef(null);

    const [data, setData] = React.useState();
    const [columns, setColumns] = React.useState([]);
    const [records, setRecords] = React.useState([]);


    React.useEffect(() => {
        getDataFromAPI();
    }, []);

    const getDataFromAPI = async () => {
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
});
export default ListViewContainer;

const toolBarIcon = [{ name: "ADD", title: "Add Owners", onClick: null, type: "ICON", }, 
    { name: "EDIT", title: "Edit Owners", onClick: null, type: "ICON",}, 
    { name: "DELETE", title: "Delete Owners", onClick: null, type: "ICON",}, 
    { name: "PDF", title: "Export to .pdf file", onClick: () => { }, type: "ICON",}, 
    { name: "EXCEL", title: "Export to .excl file", onClick: () => { }, type: "ICON",}];

// const rows = [
//     {id: 22, name: "sss", price:"545", dob: "2023-09-23"},
//     {id: 23, name: "asfdob", price:"2323", dob: "2023-02-24"},
//     {id: 24, name: "daobas", price:"234", dob: "2023-02-25"},
//     {id: 25, name: "asas", price:"765", dob: "2023-02-26"}
// ]

const rows = transport_companies.map(m => {
    return {
        id: m.id,
        companyName: m.companyName,
        address: Object.values(m.address).join(","),
        phone: m.contact.phone,
        email: m.contact.email,
        services: m.services.join(","),
        rating: m.rating,
        active: m.active
    }
})