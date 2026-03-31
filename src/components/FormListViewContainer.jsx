import React from "react";
import { ListView } from "../core/components";
import PageHeader from "../core/components/utility/PageHeader";
import CONSTANSTS from "../constants/appConstants";
import { useNavigate } from "react-router-dom";
import { SelectTextField, TextField } from "../core/components/fields";
import { AppContext } from "../core/context/appContext";
import { Box, Grid, Stack } from "@mui/material";
import { Button } from "../core/components/buttons";
import { enqueueSnackbar } from "notistack";
import FORM_CONSTANTS from "../constants/formConstants";
import AxiosApi from '../utils/httpRequestHandler';
import APIConstants from '../constants/apiConatants';
import StringUtility from "../core/utils/stringUtility";
import ConfirmDialog from "../core/components/utility/confirmDialog";

const FIELD_TYPES = FORM_CONSTANTS.FIELD_TYPES;
const DATA_TYPES = FORM_CONSTANTS.DATA_TYPES;

const FormListViewContainer = React.forwardRef(({ }, ref) => {
  const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
  const navigate = useNavigate();
  
  const listviewRef = React.useRef();
  const confrmDialogRef = React.useRef(null);
  const [rows, setRows] = React.useState([...rowsConstants]);

  React.useImperativeHandle(ref, () => ({

  }));

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async (selectedGroupId) => {
    try {
      let params = {  };
      handleBackDrop(true);
      let response = await AxiosApi.getData(APIConstants.FORM_LISTVIEW_GET, params);
      handleBackDrop(false);
      if (response.data) {
        setRows(response.data);
      }
    } catch (error) {
      console.error(error);
      setRows([]);
    }
  }
  const openFormBuilder = (object) => {
    navigate(`/${CONSTANSTS.OBJECTS.UI_FORM_BUILDER}/${object}`); // same tab
  }

  const openDialogToCreateFormObject = (event) => {

    handleDialogOpen({
      title: "Create Object",
      component: <CreateObjectContainer id={0} addEvent={saveFormObject} />,
      maxWidth: "sm",
    });
  }

  const saveFormObject = async (params) => {
    handleBackDrop(true);
    let response = await AxiosApi.postData(APIConstants.FORM_POST, params);
    getData();
  }

  const openDialogToEditFormObject = async () => {
    let rows = listviewRef.current.getSelectedRow();
    if(!rows || rows.length > 1 ||  rows.length === 0) {
      enqueueSnackbar("Please select one record to edit.", { variant: "error" });
    } else {
      let url = StringUtility.format(APIConstants.FORM_GET, rows[0].id);
      let response = await AxiosApi.getData(url)
      handleDialogOpen({
        title: "Edit Form or Object",
        component: <CreateObjectContainer dataSource={response.data} addEvent={saveFormObject} />,
        maxWidth: "sm",
      });
    }
  }

  const deleteRecord = (id) => async () => {
    let url = StringUtility.format(APIConstants.FORM_DELETE, id);
    let response = await AxiosApi.deleteData(url);
    getData();
  }

  const deleteEvent = async () => {
    let rows = listviewRef.current.getSelectedRow();
    if(!rows || rows.length > 1 ||  rows.length === 0) {
      enqueueSnackbar("Please select one record to edit.", { variant: "error" });
    } else {
      confrmDialogRef.current.handleOpen({ title: "Confirmation Dialog", contentText: "Are you confirm to delete data?", clickEvent: deleteRecord(rows[0].id) });
    }
  }

  const toolBarIcon = [{ name: "ADD", title: "Add Owners", onClick: openDialogToCreateFormObject, type: "ICON", },
  { name: "EDIT", title: "Edit Owners", onClick: openDialogToEditFormObject, type: "ICON", },
  { name: "DELETE", title: "Delete Owners", onClick: deleteEvent, type: "ICON", },
  { name: "PDF", title: "Export to .pdf file", onClick: () => { }, type: "ICON", },
  { name: "EXCEL", title: "Export to .excl file", onClick: () => { }, type: "ICON", }];

  return <>
    <PageHeader object={CONSTANSTS.OBJECTS.FORM} label={CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.FORM]} icon={CONSTANSTS.ICONS[CONSTANSTS.OBJECTS.FORM]} />
    <ListView ref={listviewRef} columns={columns} rows={rows} isPagingRequired={false} toolBarIcon={toolBarIcon} />
    <ConfirmDialog ref={confrmDialogRef} />
  </>
});

export default FormListViewContainer;

const fieldJsonTemplate = {
  id: null,
  name: null,
  label: null,
  object: null,
  tableName: null,
  note: null
}
const CreateObjectContainer = ({ dataSource, addEvent = () => { } }) => {
  const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
  const [data, setData] = React.useState(dataSource ? dataSource : { ...fieldJsonTemplate });

  const onClickEvent = () => {
    if (!data.name || data.name === "") {
      enqueueSnackbar("Please select an Object Name", { variant: "error" });
    } else if (!data.label || data.label === "") {
      enqueueSnackbar("Please enter Object Label", { variant: "error" });
    } else if (!data.tableName || data.tableName === "") {
      enqueueSnackbar("Please enter Object Table Name", { variant: "error" });
    } else {
      handleDialogClose();
      addEvent(data);
    }
  }

  const options = [
    { id: 0, value: "trip", text: "Trip" },
    { id: 0, value: "customer", text: "Customer" },
  ];

  let actions = [
    { id: 1, name: "add", label: "Add", onClick: onClickEvent },
    { id: 2, name: "cancel", label: "Cancel", onClick: handleDialogClose },
  ];

  const onChange = (name, dataType) => (event) => {
    let obj = { ...data };
    obj[name] = event.target.value;

    setData(obj);
  }

  const getFieldComponents = (fields) => {
    return fields
      .map((m, index) => {
        let el = <TextField key={m.id} name={m.name} label={m.label} {...m} onChange={onChange(m.name, m.dataType)} defaultValue={data[m.name]} value={data[m.name]}/>;
        if (m.value) {
          data[m.name] = m.value;
        }
        return <Grid key={'grd-' + index} size={4}>{el}</Grid>
      });
  }

  return <Grid spacing={1.8} container style={{ marginTop: 10, padding: 10 }}>
    {getFieldComponents(fields)}
    <Grid size={12}>
      <Stack spacing={1} direction="row" style={{ justifyContent: "flex-end", marginTop: 10 }}>
        {actions.map((ac, index) => <Button key={"btn-" + index} {...ac} />)}
      </Stack>
    </Grid>
  </Grid>
}

const columns = [
  { dataField: 'id', text: 'ID', type: "TEXT", sortable: true, hidden: true, width: "50px" },
  { dataField: 'name', text: 'Form/Object Name', type: "TEXT", sortable: true, hidden: false, width: "100px", detailLink: "/"+CONSTANSTS.OBJECTS.UI_FORM_BUILDER.toLocaleLowerCase(), },
  { dataField: 'label', text: 'Form/Object Label', type: "TEXT", sortable: true, hidden: false, width: "200px" },
  { dataField: 'tableName', text: 'Table Name', type: "TEXT", sortable: true, hidden: false, width: "200px" },
  { dataField: 'tmsCreate', text: 'Created Time', type: "TEXT", sortable: true, hidden: false, width: "150px" },
  { dataField: 'tmsUpdate', text: 'Update Time', type: "TEXT", sortable: true, hidden: false, width: "150px" },
  { dataField: 'activeRow', text: 'Active Row', type: "TEXT", sortable: true, hidden: false, width: "100px" },
  { dataField: 'note', text: 'Note', type: "TEXT", sortable: true, hidden: false, }
];

const rowsConstants = [
  { id: 1, name: "customer", object: "customer", tmsCreate: null, tmsUpdate: null, activeRow: true, note: "test note dfsds   s sd asfasdf ads dfasfadf asd fadsdsgafaf asdff assdfas ads ds dsfsasd sfd asfassfas dfasfd aadfs sadsfadfs fas aads dfsbr ghrtgxv " }
]

const fields = [
  { id: 1, name: "name", label: "Object Name", fieldType: FIELD_TYPES.TEXT, dataType: DATA_TYPES.STRING, readOnly: false, },
  { id: 2, name: "label", label: "Object Label", fieldType: FIELD_TYPES.TEXT, dataType: DATA_TYPES.STRING, readOnly: false, },
  { id: 4, name: "tableName", label: "Table Name", fieldType: FIELD_TYPES.TEXT, dataType: DATA_TYPES.STRING, readOnly: false, },
  { id: 5, name: "note", label: "Note", fieldType: FIELD_TYPES.TEXT, dataType: DATA_TYPES.STRING, readOnly: false, },
];

const formData = {
  "groups": [
    {
      "id": "8TWR02meiv",
      "label": "Basic Details",
      "fieldType": "UI_FIELD_GROUP",
      "columnSize": 4,
      "fields": [
        {
          "id": "LFRAn1meiv",
          "name": "first_name",
          "label": "First Name",
          "fieldType": "TEXT",
          "dataType": "STRING",
          "query": null,
          "isSystemField": false,
          "isRequired": true
        }
      ]
    }
  ]
}