import { Box, Grid, Paper, Stack, styled } from "@mui/material";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import FieldContainer from "./FieldContainer";
import FORM_CONSTANTS from "../../../constants/formConstants";
import { Button } from "../buttons";
import { AppContext } from "../../context/appContext";
import AddIcon from '@mui/icons-material/Add';
import FormContainer from "./FormContainer";
import UtilityUtils from "../../utils/Utility.utils";
import formDesignConstants from "./formDesignConstants";
import AxiosApi from '../../../utils/httpRequestHandler';
import APIConstants from '../../../constants/apiConatants';
import StringUtility from "../../utils/stringUtility";

const { fieldPrototyps, fieldTypes, formFields } = formDesignConstants;
const FIELD_TYPES = FORM_CONSTANTS.FIELD_TYPES;
const DATA_TYPES = FORM_CONSTANTS.DATA_TYPES;

const style = {
    containerSX: {
        height: '90vh',
    },
    header: {
        padding: "5px 10px",
        fontWeight: "bold",
        fontSize: 18,
        boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.3)",
        cursor: "pointer"
    },
}

const StyledStactHeader = styled(Stack)(({ theme }) => ({
    "& .icon": {
        display: "none",
    },
    "&:hover .hover-icon": {
        display: "block",
        cursor: "pointer"
    },
}));

const DynamicFormDesign = () => {
    const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
    //const palateContainerRef = React.useRef(null);
    const fieldContainerRef = React.useRef(null);
    const { id } = useParams();

    const [groups, setGroups] = React.useState([]);
    const [queries, setQueries] = React.useState([]);
    const [fieldNames, setFieldNames] = React.useState([]);
    const [usedFieldNames, setUsedFieldNames] = React.useState([]);

    React.useEffect(() => {
        getData()
    }, []);

    const getData = async (selectedGroupId) => {
        try {
            let params = { }
            handleBackDrop(true);
            let url = StringUtility.format(APIConstants.FORM_BUILDER_INFO_GET_POST, id);
            let response = await AxiosApi.getData(url, params);
            handleBackDrop(false);
            if (response.data) {
                setFieldNames(response.data.fields);
                if(response.data.form?.groups) {
                    let grousArr = response.data.form?.groups;
                    Service.onLoadContainer(grousArr, setGroups);
                    // setGroups(grousArr);
                }
                setQueries(response.data.queries);
            }
        } catch (error) {
            console.error(error);
            setFieldNames([]);
        }
    }

    const openDialogToAddField = (groupId, fieldType) => (event) => {
        let arrFields = Service.getFieldsForFormContainer(fieldNames, formFields, fieldType, queries);

        handleDialogOpen({
            title: "Add Field",
            maxWidth: "sm",
            component: <FormContainer fields={arrFields} addField={addField(groupId, fieldType)} fieldType={fieldType} />,
            fieldType: "FORM"
        });
    }

    const addField = (groupId, fieldType) => (data) => {

        let arr = Service.addField(groups, groupId, fieldType, data);
        setGroups(arr);
        handleDialogClose();
        console.log(arr);
    }

    const openDialogToEditGroupField = (groupId) => (event) => {
        let arrGroups = [...groups];
        let grp = arrGroups.find(f => f.id == groupId);
        if (grp) {
            openDialogToEditField(groupId, grp, FIELD_TYPES.UI_FIELD_GROUP);
        }
    }

    const editFieldFrotoType = (groupId, id) => (event) => {
        let arrGroups = [...groups];
        let grp = arrGroups.find(f => f.id == groupId);
        if (grp) {
            openDialogToEditField(groupId, grp.fields.find(f => f.id === id));
        }
    }

    const openDialogToEditField = (groupId, data, fieldType) => {
        let arrFields = Service.getFieldsForFormContainer(fieldNames, formFields, fieldType, queries);

        handleDialogOpen({
            title: "Edit Field",
            maxWidth: "sm",
            component: <FormContainer fields={arrFields} addField={addField(groupId, fieldType)} fieldType={fieldType} dataSource={data} />,
            fieldType: "FORM"
        });
    }


    const deleteFieldFrotoType = (groupId, id) => (event) => {
        let arrGroups = [...groups];
        let grp = arrGroups.find(f => f.id == groupId);
        if (grp) {
            grp.fields = grp.fields.filter(f => f.id !== id);
        }
        setGroups(arrGroups);
    }

    const saveEvent = async () => {
        try {
            let groups = fieldContainerRef.current.getGroups();
            Service.beforeSave(groups, fieldNames, queries);
            
            let params = {
                groups: groups
            }
            handleBackDrop(true);
            let url = StringUtility.format(APIConstants.FORM_BUILDER_INFO_GET_POST, id);
            let response = await AxiosApi.postData(url, params);

            handleBackDrop(false);
            Service.onLoadContainer(groups, setGroups);
        } catch (error) {
            console.error(error);
            setFieldNames([]);
        }
    }

    let actions = [
        { id: 1, name: "saveForm", label: "Save", onClick: saveEvent },
        { id: 2, name: "cancel", label: "Cancel", onClick: handleDialogClose },
    ]



    return <Paper key={"field-paper-container"} sx={style.containerSX}>
        <Stack spacing={1} direction="column">
            <StyledStactHeader spacing={1} direction="row" style={style.header}>
                <span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                <span >Form Builder</span>
                <AddIcon className="icon hover-icon" onClick={openDialogToAddField(UtilityUtils.generateUniqueId(), FIELD_TYPES.UI_FIELD_GROUP)} />
            </StyledStactHeader>
            <FieldContainer
                ref={fieldContainerRef}
                groups={groups}
                fields={fieldNames}
                setGroups={setGroups}
                openDialogToAddField={openDialogToAddField}
                openDialogToEditGroupField={openDialogToEditGroupField}
                editFieldFrotoType={editFieldFrotoType}
                deleteFieldFrotoType={deleteFieldFrotoType}
            />
            {groups && groups.length > 0 && <ActionContainer actions={actions} />}
        </Stack>

    </Paper>
}

export default DynamicFormDesign;

const ActionContainer = ({ actions = [] }) => {
    return <Stack spacing={1} direction="row" style={{ justifyContent: "flex-end", margin: 8 }}>
        {actions.map((ac, index) => <Button key={"btn-" + index} {...ac} />)}
    </Stack>
}

const fieldGroupJsonTemplate = {
    id: null,
    label: null,
    fieldType: FIELD_TYPES.UI_FIELD_GROUP,
    fields: null,
    columnSize: 3
}

const fieldJsonTemplate = {
    id: null,
    name: null,
    label: null,
    fieldType: FIELD_TYPES.TEXT,
    dataType: DATA_TYPES.STRING
}

const Service = {
    addField: (groups, groupId, fieldType, data) => {
        let arr = [...groups];
        if (fieldType == FIELD_TYPES.UI_FIELD_GROUP) {
            const index = arr.findIndex(obj => obj.id === groupId);
            if (index > -1) {
                arr[index] = { ...fieldGroupJsonTemplate, ...data };
            } else {
                arr.push({ ...data, id: UtilityUtils.generateUniqueId(), fields: [] });
            }
        } else {
            if(data.fieldType !== FIELD_TYPES.LIST) {
                delete data.query;
            }

            
            let group = arr.find(f => f.id === groupId);
            const index = group.fields.findIndex(obj => obj.id === data.id);
            if (index > -1) {
                group.fields[index] = { ...fieldJsonTemplate, ...data };
            } else {
                group.fields.push({ ...data, id: UtilityUtils.generateUniqueId() });
            }
        }
        return arr;
    },

    getFieldsForFormContainer: (fieldNames, formFields, fieldType, queries) => {
        let arrFields = [...formFields];
        if (fieldType === FIELD_TYPES.UI_FIELD_GROUP) {
            let typeField = arrFields.find(f => f.name === "fieldType");
            typeField.options = fieldTypes.filter(f => f.value === FIELD_TYPES.UI_FIELD_GROUP);
            typeField.readOnly = true;
            typeField.defaultValue = FIELD_TYPES.UI_FIELD_GROUP;
        } else {
            let typeField = arrFields.find(f => f.name === "fieldType");
            typeField.options = fieldTypes.filter(f => f.value !== FIELD_TYPES.UI_FIELD_GROUP);
            typeField.readOnly = false;

            let nameField = arrFields.find(f => f.name === "name");
            nameField.options = fieldNames.map(m => { 
                let constraintType = m.constraintType ? " - " + m.constraintType : "";
                return { id: m.id, value: m.name, text: `${m.name} (${m.dataType})${constraintType}`, fieldType: m.fieldType, dataType: m.dataType, data: m }
             });
        
        
            let queryField = arrFields.find(f => f.name === "query");
            queryField.options = queries.map(m => { return { id: m.id, value: m.name, text: `${m.label}`, type: m.type } });
        
        }
        return arrFields;
    },
    addDataTypesOnField: (groups, fieldNames) => {
        groups.forEach(group => {
            group.fields.forEach(field => {
                field.dataType = fieldNames.find(f => f.name === field.name).dataType;
            });
        });
    },
    addQueryDetailsOnField: (groups, queries) => {
        groups.forEach(group => {
            group.fields.forEach(field => {
                if(field.fieldType === FIELD_TYPES.LIST && field.query && field.query !== "") {
                    field.query = queries.find( f => f.name == field.query);
                }
            });
        });
    },
    addQueryOnField: (groups) => {
        groups.forEach(group => {
            group.fields.forEach(field => {
                if(field.fieldType === FIELD_TYPES.LIST && field.query && field.query !== "") {
                    field.query = field.query.name
                }
            });
        });
    },
    isValidForm: (groups) => {
        const errors = [];

        // 1️⃣ Check for duplicate group labels
        const groupLabels = {};
        groups.forEach(group => {
            if (group.fieldType === "UI_FIELD_GROUP") {
                const labelLower = group.label.trim().toLowerCase();
                groupLabels[labelLower] = (groupLabels[labelLower] || 0) + 1;
            }
        });
        Object.entries(groupLabels).forEach(([label, count]) => {
            if (count > 1) {
                errors.push(`Duplicate group label: "${label}"`);
            }
        });

        // 2️⃣ Check for duplicate field names inside each group
        groups.forEach(group => {
            if (group.fields && Array.isArray(group.fields)) {
                const fieldNames = {};
                group.fields.forEach(field => {
                    const nameLower = field.name.trim().toLowerCase();
                    fieldNames[nameLower] = (fieldNames[nameLower] || 0) + 1;
                });
                Object.entries(fieldNames).forEach(([name, count]) => {
                    if (count > 1) {
                        errors.push(`Duplicate field name "${name}" in group "${group.label}"`);
                    }
                });
            }
        });

        return errors;
    },

    onLoadContainer: (groups, setGroups) => {
        Service.addQueryOnField(groups);
        setGroups(groups);
    },

    beforeSave: (groups, fieldNames, queries) => {
        Service.addDataTypesOnField(groups, fieldNames);
        Service.addQueryDetailsOnField(groups, queries);

        let errors = Service.isValidForm(groups);
        if (errors.length > 0) {
            console.log("❌ Validation Errors:", errors);
        } else {
            console.log("✅ No duplicates found!");
            console.log(JSON.stringify(groups))
        }
    }
}