import { Box, Grid, Paper, Button, Avatar, CardMedia, Divider, Stack, Card } from '@mui/material';
import React from 'react';
import LocalStorageHandler from '../utils/localStorageHandler';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import TextField from '@mui/material/TextField';
import APIConstants from '../constants/apiConatants';
import AppConstants from '../constants/appConstants';
import AxiosApi from '../utils/httpRequestHandler';
import { AppContext } from '../core/context/appContext';
import logoFile from '../org-logo.png'
import {jwtDecode} from 'jwt-decode';

const styles = {
    container: {
        top: "50%",
        left: "40%",
        position: "fixed",
        marginTop: "-11em",
        marginLeft: "-15em",
    },
    subContainer: {
        width: 700,
        height: 300,
        padding: 20,
        display: "flex"
    },
    subContainer1: {
        // padding: "20px 60px",
        width: 200
    },
    subContainer2: {
        // padding: "20px 60px",
        width: "100%"
    },
    title: {
        fontSize: 26,
        // padding: "0px 0px 20px 0px"
    },
    field: {
        width: "100%"
    },
    actionArea: {
        display: "flex",
        justifyContent: "right"
    },
    register: {
        fontSize: 11
    },
    icon: {
        fontSize: 150,
        margin: "59px 0px"
    },
    entityList: {
        width: "100%",
    },
    avatar: {
        height: '65px',
        width: '65px',
        border: '2px solid #337ab7'
    }
}
const Login = () => {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [data, setData] = React.useState(null);
    const [entityList, setEntityList] = React.useState([]);
    const [entityId, setEntityId] = React.useState(0);
    const [orgLogoUrl, setOrgLogoUrl] = React.useState(null);
    const { handleBackDrop } = React.useContext(AppContext);

    React.useEffect(() => {
        let token = LocalStorageHandler.getToken();
        if (token) {
            navigate("/");
        }
        getOrgLogo();
    }, []);


    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('do validate');
            login();
        }
    }

    const login = async () => {
        // setData({token: "test-token"})
        // LocalStorageHandler.setToken("test-token");
        // navigate("/");    
        try {
            handleBackDrop(true);
            let data = { userName: username, password };
            let response = await AxiosApi.postData(APIConstants.APP_LOGIN, data);
            handleBackDrop(false);

            const { token, entityList } = response.data;

            setData(response.data);
            let payload = jwtDecode(token);
            let role = payload.roles && payload.roles.length > 0 ? payload.roles[0] : '';

            if ([AppConstants.USER_ROLE.SADMIN, AppConstants.USER_ROLE.ADMIN].indexOf(role.toUpperCase()) < 0) {
                let activeEntity = entityList.find(f => f.isActive);
                setDataToLocalStorage(response.data, activeEntity.id);
            } else {
                let list = entityList ? entityList.map(m => { return { value: m.id, text: m.name } }) : []
                list.unshift({ value: ' ', text: "----Select Entity----" });
                setEntityList(list);
            }

            
        } catch (error) {
            handleBackDrop(false);
            console.error(error.message);
            enqueueSnackbar(error.message, { variant: "error" });
        }
    }

    const handleChange = (event) => {
        //setDataToLocalStorage(data, event.target.value);
    }

    const setDataToLocalStorage = (data, entityId) => {
        setEntityId(entityId);

        LocalStorageHandler.setToken(data.token);
        LocalStorageHandler.setEntityId(entityId);
        let entity = data.entityList ? data.entityList.find(f => f.id == entityId) : null;
        LocalStorageHandler.setEntity(entity);

        LocalStorageHandler.setPermission(data.permission);

        //used to force reload routers Component using user security role filter
        window.location.assign(window.location.origin);
    }

    const getOrgLogo = () => {
        let logoUrl = localStorage.getItem("orgLogoUrl");
        if (logoUrl) {
            setOrgLogoUrl(logoUrl);
        }
    }

    return <Box style={styles.container} onKeyDown={onKeyDown}>
        <Paper elevation={2} style={styles.subContainer}>
            <Grid container spacing={0} style={styles.subContainer2}>
                <Grid size={5}>
                    <Stack direction="row" spacing={0.5}>
                        <img
                            style={{ height: 240, marginBottom: 2, marginRight:2 }}
                            height={240}
                            src={logoFile}
                            title="green iguana"
                        />     
                        <Divider orientation="vertical" variant="middle" style={{height: "inherit"}}/>               
                    </Stack>
                </Grid>
                <Grid size={7}>
                    <Grid container spacing={2} style={styles.subContainer2}>
                        <Grid size={12} alignItems='center' direction={'column'}>
                            {orgLogoUrl ? <><Grid size='auto'><Avatar src={orgLogoUrl} style={styles.avatar} /></Grid>
                                <Box style={styles.title}>Sunshine Digitech</Box></> : <Box style={styles.title}> Welcome back!</Box>}
                        </Grid>
                        {(entityList.length <= 0) && <>
                            <Grid size={12}>
                                <TextField
                                    name="username"
                                    label="User ID"
                                    id="outlined-size-small"
                                    defaultValue="9830454323"
                                    variant="outlined"
                                    size="small"
                                    style={styles.field}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    name="password"
                                    label="Password"
                                    id="outlined-size-small"
                                    defaultValue="9830454323"
                                    variant="outlined"
                                    size="small"
                                    style={styles.field}
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid size={9}>
                                <Box style={styles.register}>Do not have account? <a href="/register">Click here to Register</a></Box>
                            </Grid>
                            <Grid size={3}>
                                <Box style={styles.actionArea}><Button color="primary" variant="outlined" onClick={login} onKeyDown={onKeyDown}>Login</Button></Box>
                            </Grid>
                        </>}
                        {entityList.length > 0 && <>
                            <Grid size={12}>
                                {/* <SelectField name="entityList" label="Session List" value={sessionId} options={entityList} style={styles.entityList} onChange={handleChange} /> */}
                            </Grid>
                        </>}
                    </Grid>
                </Grid>

            </Grid>
        </Paper>
    </Box>

}


export default Login;