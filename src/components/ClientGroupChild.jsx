import { Box } from '@mui/material';
import React from 'react';
import APIConstants from '../constants/apiConatants';
import { ListView } from '../core/components';
// import PageHeader from '../core/components/utility/PageHeader';
import { Utility } from '../core/components';
import CONSTANSTS from '../constants/appConstants';
import { useEffectOnce } from '../core/custom-hook';
import AxiosApi from '../utils/httpRequestHandler';
import { AppContext } from '../core/context/appContext';
const { PageHeader } = Utility;

const columns = [
    {  dataField: 'id', text: 'ID',  type: "TEXT", sortable: true, hidden: true, width: "50px" },
    {  dataField: 'customerClusterID', text: 'Customer Cluster ID',  type: "TEXT", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'dbCode', text: 'DB Code',  type: "TEXT", sortable: true, hidden: false, width: "100px" },
    {  dataField: 'databaseName', text: 'Database Name',  type: "TEXT", sortable: true, hidden: false, width: "200px" },
    {  dataField: 'databaseType', text: 'Database Type',  type: "TEXT", sortable: true, hidden: false, width: "100px" },
    {  dataField: 'host', text: 'Host',  type: "TEXT", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'port', text: 'Port',  type: "TEXT", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'user', text: 'User',  type: "TEXT", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'password', text: 'Password',  type: "TEXT", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'dbLink', text: 'DB Link',  type: "TEXT", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'owner', text: 'Owner',  type: "TEXT", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'tmsCreate', text: 'Created Time',  type: "DATE", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'tmsUpdate', text: 'Update Time',  type: "DATE", sortable: true, hidden: false, width: "150px" },
    {  dataField: 'activeRow', text: 'Active Row',  type: "TEXT", sortable: true, hidden: false, width: "100px" },
    {  dataField: 'note', text: 'Note',  type: "TEXT", sortable: true, hidden: false, width: "150px" }
];

const ClientGroupChild = ({selectedGroup}) => {
    const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        if(selectedGroup && selectedGroup.customerClusterID && selectedGroup.customerClusterID > 0) {
            getData(selectedGroup.customerClusterID);
        }
        
    }, [selectedGroup]);

    const getData = async (selectedGroupId) => {
        try {
            handleBackDrop(true);
            let response = await AxiosApi.getData(APIConstants.ADMIN_GROUP_CHILD_LIST+selectedGroupId);
            handleBackDrop(false);
            if (response.data) {           
                setData(response.data);            
            }
        } catch (error) {
            console.error(error);
            setData([]);
        }
    }

    const toolBarIcon = [{ name: "ADD", title: "Add Owners", onClick: null, type: "ICON", },
    { name: "EDIT", title: "Edit Owners", onClick: null, type: "ICON", },
    { name: "DELETE", title: "Delete Owners", onClick: null, type: "ICON", },
    { name: "PDF", title: "Export to .pdf file", onClick: () => { }, type: "ICON", },
    { name: "EXCEL", title: "Export to .excl file", onClick: () => { }, type: "ICON", }];

    return <>
        {/* <PageHeader object={CONSTANSTS.OBJECTS.CLIENT_GROUP_CHILD} label={CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.CLIENT_GROUP_CHILD]} icon={CONSTANSTS.ICONS[CONSTANSTS.OBJECTS.CLIENT_GROUP_CHILD]}/> */}
        <ListView columns={columns} rows={data} isPagingRequired={false} toolBarIcon={toolBarIcon} />
    </>

    ///return <ListViewContainer object={CONSTANSTS.OBJECTS.CUSTOMER} CONSTANSTS={CONSTANSTS} columns={columns} />
};

export default ClientGroupChild;


