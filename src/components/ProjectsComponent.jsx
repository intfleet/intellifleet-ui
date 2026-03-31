import { Box, Grid, Link, MenuItem, MenuList, Paper, Stack, Typography } from "@mui/material";
import CustomerContainer from '../components/CustomerContainer';
import React from "react";
import { useEffectOnce } from "../core/custom-hook";
import AxiosApi from '../utils/httpRequestHandler';
import APIConstants from '../constants/apiConatants';
import CustomTab from "../core/components/utility/CustomTab";
import CONSTANSTS from "../constants/appConstants";
import ClientGroupChild from "./ClientGroupChild";

const ProjectsComponent = () => {
    const [selectedGroup, setSelectedGroup] = React.useState();  
    const [selectedGroupId, setSelectedGroupId] = React.useState();

    React.useEffect(() => {
        setSelectedGroupId()
    }, [selectedGroup]);

    const getTabs = (tabs) => {
        
        return tabs.map( tab => {
            let component;
            if(tab.id == CONSTANSTS.OBJECTS.CLIENT_GROUP_CHILD) {
                component = <ClientGroupChild selectedGroup={selectedGroup}/>;
            } else if(tab.id == CONSTANSTS.OBJECTS.CUSTOMER) {
                component = <CustomerContainer selectedGroup={selectedGroup}/>;
            }
            return {
                ...tab,
                component
            }
        })
    }
    
    return <Grid container spacing={1}>
        <Paper sx={{ height: '90vh', width: "17%" }}>
            <GroupContainer selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup}/>
        </Paper>
        <Box sx={{ height: '90vh', width: "80.3%" }}>
            {/* <CustomerContainer selectedGroup={selectedGroup}/> */}
            <CustomTab tabs={getTabs(tabs)}/>
        </Box>
        {/* <Paper sx={{ height: '90vh', width: "27.2%" }}>
            <DBDetailsContainer data={selected}/>
        </Paper> */}
    </Grid>
}


export default ProjectsComponent;

const tabs = [
    {id: CONSTANSTS.OBJECTS.CLIENT_GROUP_CHILD, label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.CLIENT_GROUP_CHILD], icon: CONSTANSTS.ICONS[CONSTANSTS.OBJECTS.CLIENT_GROUP_CHILD]},
    {id: CONSTANSTS.OBJECTS.CUSTOMER, label: CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.CUSTOMER], icon: CONSTANSTS.ICONS[CONSTANSTS.OBJECTS.CUSTOMER]}
]

const GroupContainer = ({selectedGroup, setSelectedGroup}) => {
    const [groups, setGroups] = React.useState([]);

    useEffectOnce(() => {
        getGroupList();
    }, []);

    const getGroupList = async () => {
        let response = await AxiosApi.getData(APIConstants.ADMIN_GROUP_LIST);
        if (response.data) {           
            setGroups(response.data);
            if(!selectedGroup && response.data && response.data.length > 0) {
                setSelectedGroup(response.data[0]);
            }            
        }
    }    

    const sx = { backgroundColor: "#a4a4a426" }

    return <Stack spacing={2}>
        <Box sx={{ padding: 1, borderBottom: "2px solid #00000012", fontWeight: "bold", fontSize: 18 }}>
            <Stack spacing={1} direction="row">
                <span><i className="fa fa-users" aria-hidden="true"></i></span>
                <span >Project Groups</span>
                <Box style={{border: "1px solid rgb(131, 129, 129)", borderRadius: 20, width: 25, height: 25}}>
                    <i className="fa fa-plus" aria-hidden="true" style={{marginLeft: 5,}}/>
                </Box>
            </Stack>            
        </Box>
        {groups && groups.length > 0 && <MenuList style={{ marginTop: 0 }}>
            {groups.map(g =>
                <MenuItem key={g.id} sx={selectedGroup && selectedGroup.id === g.id ? sx : {}} onClick={e => setSelectedGroup(g)}>
                    <span><i className="fa fa-users" aria-hidden="true"></i></span>
                    <Link sx={{marginLeft: 1}} href="#" underline="none"><Typography>{g.customerClusterName}</Typography></Link>
                </MenuItem>)}
        </MenuList>}
    </Stack>
}

const DBDetailsContainer = ({data}) => {

    const [selected, setSelected] = React.useState(1);

    const sx = { backgroundColor: "#a4a4a426" }

    return <Stack spacing={2}>
        <Box sx={{ padding: 1, borderBottom: "2px solid #00000012", fontWeight: "bold", fontSize: 18 }}>
            <Stack spacing={1} direction="row">
                <span style={{}}><i class="fa fa-database" aria-hidden="true"></i></span>
                <span >DB Details</span>
            </Stack>            
        </Box>
        <Stack>
            <Item key="1" label="DB Code" value={data ? data.dbCode : ""}/>
            <Item key="3" label="DB Host" value={data ? data.host : ""}/>
            <Item key="3" label="DB Port" value={data ? data.port : ""}/>
            <Item key="2" label="DB Name" value={data ? data.databaseName : ""}/>
            {/* <Item key="4" label="DB User" value="Test DB"/>
            <Item key="5" label="DB Password" value="Test DB"/> */}
            <Item key="6" label="DB Link" value={data ? data.dbLink : ""}/>
        </Stack>
    </Stack>
}


const Item = ({id, name, label, value}) => {

    return <Box sx={{margin: 1, }}>
        <Box style={{backgroundColor: "#f1f1f1"}} sx={{paddingLeft: 1, paddingRight: 1}}>
            <Typography component="span" style={{fontWeight: "bold"}}>{label}</Typography>
        </Box>
        <Typography sx={{paddingLeft: 1, paddingRight: 1}}>{value}</Typography>
    </Box>

}