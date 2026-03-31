import { Box, Grid, Paper, Typography, Stack, styled } from "@mui/material";
import { AppContext } from "../../context/appContext";
import React from "react";
import AxiosApi from '../../../utils/httpRequestHandler';
import APIConstants from '../../../constants/apiConatants';
import FieldGroups from "./FieldGroups";
import { Button } from "../buttons";
import { FormProvider, useForm } from "react-hook-form";
import FORM_CONSTANTS from "../../../constants/formConstants";
import { convertDatePickerDateToAPIDate, convertDateTimePickerDateTimeToAPIDateTime, convertTimePickerTimeToAPITime } from "../../utils/dateHandler";
import StringUtility from "../../utils/stringUtility";
const DATA_TYPES = FORM_CONSTANTS.DATA_TYPES;

const style = {
    containerSX: {
        height: '90vh',
        width: "100%",
        overflowY: "auto",   // vertical scrollbar
        overflowX: "hidden", // prevent horizontal scrollbar
    },
    formStyle: {
        height: "auto",
        display: "block" 
    }
}

const initFormData = {groups: []};
const apiDetails = { serviceType: "FORM", id: 1, name: "trip" };
const FormGeneratorContainer = ({ id=0, formId, callback=()=>{}}) => {
    const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
    const [formData, setFormData] = React.useState({ ...initFormData });
    const { groups } = formData;
    const [record, setRecord] = React.useState();
    
    const methods = useForm({criteriaMode: "all", defaultValues: Service.prepareDefaultValues(formData)})

    React.useEffect(() => {
        getFormData(formId);
    }, [formId]);

    React.useEffect(() => {
        if(id && id > 0) {
            getData(id);
        }
    }, [formData.groups?.length > 0]);

    const getFormData = async (formId) => {
        try {
            handleBackDrop(true);
            let url = StringUtility.format(APIConstants.FORM_INFO_GET, formId);
            let response = await AxiosApi.getData(url);
            handleBackDrop(false);
            if (response.data) {
                setFormData(response.data);
            }
        } catch (error) {
            console.error(error);
            setFormData({ ...initFormData });
        }
    }

    const getData = async (id) => {
        try {
            if(!id || id <= 0) {
                console.log("Invalid Record Id.");
                return;
            }

            handleBackDrop(true);
            let url = StringUtility.format(APIConstants.RECORD_GET, formId, id);
            let response = await AxiosApi.getData(url);
            handleBackDrop(false);
            if (response.data) {
                setRecord(response.data);
                methods.reset(response.data);
            }
        } catch (error) {
            console.error(error);
            setRecord(null);
        }
    }

    const onSubmit = async (data) => {
        console.log("Form Data:", data);

        try {

            data = Service.processFormValuesBeforeSubmit(data, groups);
            let params = {
                formId: formId,
                fieldValues: data
            }
            handleBackDrop(true);
            let response = await AxiosApi.postData(APIConstants.RECORD_POST, params);
            callback();
            handleBackDrop(false);
            handleDialogClose(false);
        } catch (error) {
            console.error(error);
        }
    }


    const getActions = () => {
        let actions = [
            { id: 1, name: "saveForm", type: "submit", label: "Save", },
            { id: 2, name: "resetForm", type: "button", label: "Reset", onClick: methods.reset },
            { id: 3, name: "cancel", type: "button", label: "Cancel", onClick: () => handleDialogClose() },
        ]
        return actions;
    }
    

    // actions = [
    //     { id: 1, name: "saveForm", label: "Save", event: () => {}  },
    //     { id: 2, name: "resetForm",  label: "Reset", event: () => {}  },
    //     { id: 3, name: "cancel",  label: "Cancel", event: () => {} },
    // ]
    return <>
    {methods && <FormProvider {...methods}>
        <Paper key={"field-paper-container"} sx={style.containerSX} component={"form"} style={style.formStyle} onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={1} direction="column">
                <FieldGroups groups={groups} />
                {groups && groups.length > 0 && <ActionContainer actions={getActions()} />}
            </Stack>
        </Paper>
    </FormProvider>}
    </>
}

export default styled(FormGeneratorContainer)(({ theme }) => ({
    "&.MuiTab-textColorPrimary": {
        fontSize: 12,
    },
}));

const ActionContainer = ({ actions = [] }) => {
    return <Stack spacing={1} direction="row" style={{ justifyContent: "flex-end", margin: 8 }}>
        {actions.map((ac, index) => <Button key={"btn-" + index} {...ac} />)}
    </Stack>
}

const Service = {

    prepareDefaultValues: (formData) => {
        let defaultValues = {};
        if(formData && formData.groups) {
            formData.groups.forEach(group => {
                group.fields.forEach(field => {
                    defaultValues[field.name] = "";
                });
            });
        }
        
        return defaultValues;
    },
    
    processFormValuesBeforeSubmit: (data, groups) => {
        let fieldDataType = {};

        groups.forEach(group => {
            group.fields.forEach(field => {
                fieldDataType[field.name] = field.dataType;
            });
        });

        let tempData = { ...data };
        Object.keys(fieldDataType)
            .filter(fieldname => fieldDataType[fieldname].toLowerCase() === DATA_TYPES.DATE
                || fieldDataType[fieldname].toLowerCase() === DATA_TYPES.TIME
                || fieldDataType[fieldname].toLowerCase() === DATA_TYPES.DATE_TIME)
            .forEach(fieldname => {
                if(tempData[fieldname]) {
                    if (fieldDataType[fieldname].toLowerCase() === DATA_TYPES.DATE) {
                        tempData[fieldname] = convertDatePickerDateToAPIDate(tempData[fieldname]);
                    } else if (fieldDataType[fieldname].toLowerCase() === DATA_TYPES.TIME) {
                        tempData[fieldname] = convertTimePickerTimeToAPITime(tempData[fieldname]);
                    } else if (fieldDataType[fieldname].toLowerCase() === DATA_TYPES.DATE_TIME) {
                        tempData[fieldname] = convertDateTimePickerDateTimeToAPIDateTime(tempData[fieldname]);
                    }
                }                
            });

        return tempData;
    }
}