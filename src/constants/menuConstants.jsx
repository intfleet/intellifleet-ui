import * as React from 'react';
import CONSTANSTS from './appConstants';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import DynamicForm from '@mui/icons-material/DynamicForm';
import Person3Icon from '@mui/icons-material/Person3';
import HouseIcon from '@mui/icons-material/House';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import UploadIcon from '@mui/icons-material/Upload';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RoomIcon from '@mui/icons-material/Room';
import StreetviewIcon from '@mui/icons-material/Streetview';
import MenuIcon from '@mui/icons-material/Menu';
import PageBodyTemplate from '../components/PageBodyTemplate';
import ProjectsComponent from '../components/ProjectsComponent';
import FormBuilderContainer from '../core/components/form-design/FormBuilderContainer';
import FormGeneratorContainer from '../core/components/form-generator/FormGeneratorContainer';
import CustomerContainer from '../components/CustomerContainer';
import FormListViewContainer from '../components/FormListViewContainer';
import QueryBuilderComponent from '../components/QueryBuilderComponent';


const MENU_LIST = [
    {
        object: CONSTANSTS.OBJECTS.DASHBOARD,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.DASHBOARD], 
        icon: <DashboardIcon sx={{ fontSize: 'inherit' }} style={{height: 'auto'}}/>,
        url: "/",
        element: <div>Dashboard</div>,
        isHidden: false
    },
    {
        object: CONSTANSTS.OBJECTS.FORM,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.FORM], 
        icon: <PersonIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.FORM.toLocaleLowerCase()+"/listview",
        element: <FormListViewContainer />,
        isHidden: false
    },
    {
        object: CONSTANSTS.OBJECTS.UI_QUERY,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.UI_QUERY], 
        icon: <PersonIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.UI_QUERY.toLocaleLowerCase()+"/grid-view",
        element: <QueryBuilderComponent />,
        isHidden: false
    },
    /*{
        object: CONSTANSTS.OBJECTS.CUSTOMER,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.CUSTOMER], 
        icon: <PersonIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.CUSTOMER.toLocaleLowerCase(),
        // element: <PageBodyTemplate/>,
        element: <ProjectsComponent />,
        isHidden: false
    },*/
    {
        object: CONSTANSTS.OBJECTS.CUSTOMER,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.CUSTOMER], 
        icon: <PersonIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.CUSTOMER.toLocaleLowerCase(),
        // element: <PageBodyTemplate/>,
        element: <CustomerContainer />,
        isHidden: false
    },
    {
        object: CONSTANSTS.OBJECTS.UI_FORM_BUILDER,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.UI_FORM_BUILDER], 
        icon: <DynamicForm fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.UI_FORM_BUILDER.toLocaleLowerCase()+"/:id",
        element: <FormBuilderContainer />,
        isHidden: false
    },
    {
        object: CONSTANSTS.OBJECTS.UI_FORM_GENERATOR,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.UI_FORM_GENERATOR], 
        icon: <DynamicForm fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.UI_FORM_GENERATOR.toLocaleLowerCase(),
        element: <FormGeneratorContainer />,
        isHidden: false
    },
    {
        object: CONSTANSTS.OBJECTS.UI_TRIP,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.UI_TRIP], 
        icon: <MenuIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
        isHidden: false,
        subMenu: [
            {
                object: CONSTANSTS.OBJECTS.TRIP_UPLOAD,
                label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.TRIP_UPLOAD], 
                icon: <UploadIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
                url: "/"+CONSTANSTS.OBJECTS.TRIP_UPLOAD.toLocaleLowerCase(),
                element: <div>List View</div>,
                isHidden: false,
            },
            {
                object: CONSTANSTS.OBJECTS.TRIP_DETAILS,
                label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.TRIP_DETAILS], 
                icon: <DirectionsCarIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
                url: "/"+CONSTANSTS.OBJECTS.TRIP_DETAILS.toLocaleLowerCase(),
                element: <div>List View</div>,
                isHidden: false,
            },
        ]
    },
    {
        object: CONSTANSTS.OBJECTS.MENU_GOOGLE_MAP,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.MENU_GOOGLE_MAP], 
        icon: <MenuIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
        isHidden: false,
        subMenu: [
            {
                object: CONSTANSTS.OBJECTS.MAP_ASSET_POSITION,
                label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.MAP_ASSET_POSITION], 
                icon: <RoomIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
                url: "/"+CONSTANSTS.OBJECTS.MAP_ASSET_POSITION.toLocaleLowerCase(),
                element: <div>List View</div>,
                isHidden: false,
            },
            {
                object: CONSTANSTS.OBJECTS.MAP_ASSET_TRIP_ANALYSIS,
                label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.MAP_ASSET_TRIP_ANALYSIS], 
                icon: <DirectionsCarIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
                url: "/"+CONSTANSTS.OBJECTS.MAP_ASSET_TRIP_ANALYSIS.toLocaleLowerCase(),
                element: <div>List View</div>,
                isHidden: false,
            },
            {
                object: CONSTANSTS.OBJECTS.MAP_GEO_FENCE,
                label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.MAP_GEO_FENCE], 
                icon: <StreetviewIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
                url: "/"+CONSTANSTS.OBJECTS.MAP_GEO_FENCE.toLocaleLowerCase(),
                element: <div>List View</div>,
                isHidden: false,
            },
        ]
    },
    {
        object: CONSTANSTS.OBJECTS.ORG_DETAILS,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.ORG_DETAILS], 
        icon: <HouseIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.ORG_DETAILS.toLocaleLowerCase(),
        element: null,
        isHidden: false
    },
    {
        object: CONSTANSTS.OBJECTS.USER_PROFILE,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.USER_PROFILE], 
        icon: <PersonIcon fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.USER_PROFILE.toLocaleLowerCase(),
        element: null,
        isHidden: false
    },
    {
        object: CONSTANSTS.OBJECTS.USER_DETAILS,
        label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.USER_DETAILS], 
        icon: <Person3Icon fontSize={'inherit'} style={{height: 'auto'}}/>,
        url: "/"+CONSTANSTS.OBJECTS.USER_DETAILS.toLocaleLowerCase(),
        element: null,
        isHidden: true
    },
];

export default MENU_LIST;