import { Box } from '@mui/material';
import React from 'react';
// import CONSTANSTS from '../constants/appConstants';
import { ListView } from '../core/components';
// import PageHeader from '../core/components/utility/PageHeader';
import { Utility } from '../core/components';
import CONSTANSTS from '../constants/appConstants';
const { PageHeader } = Utility;
/*
const columns = [{
    dataField: 'id',
    text: 'Product ID',
    type: "TEXT",
    hidden: false
}, {
    dataField: 'name',
    text: 'Product Name',
    type: "TEXT",
    hidden: false
}, {
    dataField: 'price',
    text: 'Product Price',
    type: "TEXT",
    hidden: false
}, {
    dataField: 'dob',
    text: 'Date of Birth',
    type: "DATE",
    hidden: false
}];*/

const columns = [
    {  dataField: 'id', text: 'ID',  type: "TEXT",  hidden: false },
    {  dataField: 'companyName', text: 'Company',  type: "TEXT",  hidden: false },
    {  dataField: 'address', text: 'Address',  type: "TEXT",  hidden: false },
    {  dataField: 'phone', text: 'Phone',  type: "TEXT",  hidden: false },
    {  dataField: 'email', text: 'Email',  type: "TEXT",  hidden: false },
    {  dataField: 'services', text: 'Services',  type: "TEXT",  hidden: false },
    {  dataField: 'rating', text: 'Rating',  type: "TEXT",  hidden: false },
    {  dataField: 'active', text: 'Active',  type: "TEXT",  hidden: false }
];

const ListViewTemplate = () => {
    const toolBarIcon = [{ name: "ADD", title: "Add Owners", onClick: null, type: "ICON", },
    { name: "EDIT", title: "Edit Owners", onClick: null, type: "ICON", },
    { name: "DELETE", title: "Delete Owners", onClick: null, type: "ICON", },
    { name: "PDF", title: "Export to .pdf file", onClick: () => { }, type: "ICON", },
    { name: "EXCEL", title: "Export to .excl file", onClick: () => { }, type: "ICON", }];

    return <>
        <PageHeader object={CONSTANSTS.OBJECTS.DASHBOARD} label={"Test"} icon={CONSTANSTS.ICONS[CONSTANSTS.OBJECTS.DASHBOARD]}/>
        <ListView columns={columns} rows={rows} isPagingRequired={false} toolBarIcon={toolBarIcon} />
    </>

    // return <ListViewContainer object={CONSTANSTS.OBJECTS.CUSTOMER} CONSTANSTS={CONSTANSTS} columns={columns} />
};

export default ListViewTemplate;

const rows = [
    { id: 22, name: "sss", price: "545", dob: "2023-09-23" },
    { id: 23, name: "asfdob", price: "2323", dob: "2023-02-24" },
    { id: 24, name: "daobas", price: "234", dob: "2023-02-25" },
    { id: 25, name: "asas", price: "765", dob: "2023-02-26" }
]