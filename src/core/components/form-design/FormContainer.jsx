import { Grid, Stack } from "@mui/material";
import React from "react";
import { CheckBox, SelectTextField, TextField } from "../fields";
import { Button } from "../buttons";
import { AppContext } from "../../../core/context/appContext";
import formDesignConstants from "./formDesignConstants";
import FORM_CONSTANTS from "../../../constants/formConstants";
import ParamVerifier from "../../../utils/paramVerifier";
import { useSnackbar } from 'notistack';
import APIConstants from '../../../constants/apiConatants';
import StringUtility from "../../utils/stringUtility";
import AxiosApi from '../../../utils/httpRequestHandler';

const { fieldPrototyps, fieldTypes, formFields } = formDesignConstants;
const FIELD_TYPES = FORM_CONSTANTS.FIELD_TYPES;
const DATA_TYPES = FORM_CONSTANTS.DATA_TYPES;

const FormContainer = ({ fields, addField, fieldType, dataSource }) => {
    const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
    const { enqueueSnackbar } = useSnackbar();

    let initData = fieldType === FIELD_TYPES.UI_FIELD_GROUP ? fieldGroupJsonTemplate : fieldJsonTemplate;
    const [data, setData] = React.useState(dataSource ? dataSource : { ...initData });
    const validationService = new ValidationService(enqueueSnackbar);

    React.useEffect( () => {
        if(data.name && data.name !== "") {
            let field = fields.find( f => f.name === "foreignKey");
            let forenKeyInfo = validationService.getForeignKeyInfo(fields, data.name);
            if(data.name && forenKeyInfo && forenKeyInfo.foreignTable && forenKeyInfo.foreignTable !== "" ) {
                //Third parm is a callback used to Force render and its required to reload component
                validationService.getTableFields(forenKeyInfo.foreignTable, field, () => setData({...data}));
            } else {
                field.options = [];
            }
        }
    }, [data.name])

    const onChange = ({name, fieldType, dataType, ...others}) => (event) => {
        let obj = { ...data };
        obj[name] = event.target.value;
        if (dataType == DATA_TYPES.INTEGER) {
            obj[name] = ParamVerifier.parseInteger(event.target.value);
        } else if (dataType == DATA_TYPES.BOOLEAN) {
            obj[name] = ParamVerifier.parseBoolean(event.target.checked);
        }
        setData(obj);
    }

    const addEvent = (event) => {
        validationService.isValidate(fields, data);
        if (validationService.isValidateField(fields, data)) {
            addField(data);
        }
    }

    const filterFields = (fields) => {
        if (fieldType === FIELD_TYPES.UI_FIELD_GROUP) {
            return fields.filter(f => fieldType === FIELD_TYPES.UI_FIELD_GROUP && ["label", "columnSize"].indexOf(f.name) > -1);
        }
        let tempArr = fields.filter(f => fieldType !== FIELD_TYPES.UI_FIELD_GROUP && ["columnSize"].indexOf(f.name) < 0);
        tempArr = tempArr.filter(f => (["foreignKey", "query", "isRequired"].indexOf(f.name) < 0)
            || (f.name === "foreignKey" && validationService.isForeignKeyField(tempArr, data.name))
            || (f.name === "query" && data.fieldType === FIELD_TYPES.LIST)
            || (f.name === "isRequired" && data.fieldType !== FIELD_TYPES.CHECK_BOX));

        return tempArr;
    }

    const getFieldComponents = (fields) => {
        // let tempArr = fields.filter(f => (fieldType === FIELD_TYPES.UI_FIELD_GROUP && ["label", "columnSize"].indexOf(f.name) > -1)
        //     || (fieldType !== FIELD_TYPES.UI_FIELD_GROUP && (["columnSize", "query", "isRequired"].indexOf(f.name) < 0))
        //     || (f.name === "query" && data.fieldType === FIELD_TYPES.LIST)
        //     || (f.name === "isRequired" && data.fieldType !== FIELD_TYPES.CHECK_BOX));
        // console.log(tempArr.map(m => m.name))

        let colSize = fields.length > 3 ? 3 : 4;

        return fields.map((m, index) => {
            let el = null;
            if (m.fieldType == FIELD_TYPES.TEXT) {
                el = <TextField key={m.id} name={m.name} label={m.label} {...m} onChange={onChange(m)} value={data[m.name]} />;
            } else if (m.fieldType == FIELD_TYPES.LIST) {
                el = <SelectTextField key={m.id} {...m} options={filterOptions(m.options, m.name)} onChange={onChange(m)} value={data[m.name]} />
            } else if (m.fieldType == FIELD_TYPES.CHECK_BOX) {
                el = <CheckBox key={m.id} name={m.name} label={m.label} {...m} onChange={onChange(m)} value={data[m.name]} />;
            }
            if (m.value) {
                data[m.name] = m.value;
            }
            return <Grid key={'grd-' + index} size={colSize}>{el}</Grid>
        });
    }

    const filterOptions = (options, name) => {
        if (name === "fieldType") {
            let field = fields.find(f => f.name == "name");
            if (field && field.options) {
                let fieldName = field.options.find(f => f.value === data.name);
                if (fieldName && fieldName.dataType?.toLowerCase() == DATA_TYPES.INTEGER.toLowerCase()) {
                    return options.filter(f => f.value === FIELD_TYPES.NUMERIC || f.value === FIELD_TYPES.LIST);
                } else if (fieldName && (fieldName.dataType?.toLowerCase() == DATA_TYPES.FLOAT.toLowerCase()
                    || fieldName.dataType?.toLowerCase() == DATA_TYPES.DOUBLE.toLowerCase())) {
                    return options.filter(f => f.value === FIELD_TYPES.DECIMAL);
                } else if (fieldName && fieldName.dataType?.toLowerCase() == DATA_TYPES.STRING.toLowerCase()) {
                    return options.filter(f => f.value === FIELD_TYPES.TEXT || f.value === FIELD_TYPES.LONG_TEXT
                        || f.value === FIELD_TYPES.EMAIL || f.value === FIELD_TYPES.PASSWORD || f.value === FIELD_TYPES.AADHAAR_NUMBER
                        || f.value === FIELD_TYPES.PAN_NUMBER || f.value === FIELD_TYPES.PHONE || f.value === FIELD_TYPES.LIST);
                } else if (fieldName && fieldName.dataType?.toLowerCase() == DATA_TYPES.DATE.toLowerCase()) {
                    return options.filter(f => f.value === FIELD_TYPES.DATE);
                } else if (fieldName && fieldName.dataType?.toLowerCase() == DATA_TYPES.TIME.toLowerCase()) {
                    return options.filter(f => f.value === FIELD_TYPES.TIME);
                } else if (fieldName && fieldName.dataType?.toLowerCase() == DATA_TYPES.DATE_TIME.toLowerCase()) {
                    return options.filter(f => f.value === FIELD_TYPES.DATE_TIME);
                } else if (fieldName && fieldName.dataType?.toLowerCase() == DATA_TYPES.BOOLEAN.toLowerCase()) {
                    return options.filter(f => f.value === FIELD_TYPES.CHECK_BOX);
                }
            }
            return [];
        }
        return options;
    }

    let actions = [
        { id: 1, name: "add", label: "Add", onClick: addEvent },
        { id: 2, name: "cancel", label: "Cancel", onClick: handleDialogClose },
    ]

    const arrFields = filterFields(fields);
    const checkBoxFields = arrFields.filter(f => f.fieldType === FIELD_TYPES.CHECK_BOX);
    const otherFields = arrFields.filter(f => f.fieldType !== FIELD_TYPES.CHECK_BOX && f.name !== "label");
    const labelField = arrFields.filter(f => f.name === "label");

    return <Grid spacing={1.8} container style={{ marginTop: 10, padding: 10 }}>
        <Grid size={12}>
            <Grid spacing={1.8} container>
                {getFieldComponents(otherFields)}
            </Grid>
        </Grid>
        <Grid size={12}>
            <Grid spacing={1.8} container>
                {getFieldComponents(labelField)}
            </Grid>
        </Grid>
        <Grid size={12}>
            <Grid spacing={1.8} container>
                {getFieldComponents(checkBoxFields)}
            </Grid>
        </Grid>
        <Grid size={12}>
            <Stack spacing={1} direction="row" style={{ justifyContent: "flex-end", marginTop: 10 }}>
                {actions.map((ac, index) => <Button key={"btn-" + index} {...ac} />)}
            </Stack>
        </Grid>
    </Grid>
}

export default FormContainer;


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
    fieldType: FIELD_TYPES.TEXT
}

class ValidationService {
    #enqueueSnackbar;

    constructor(enqueueSnackbar) {
        this.#enqueueSnackbar = enqueueSnackbar;
    }

    isValidate = (fields, data) => {
        Object.keys(data).find(f => {
            let field = fields.find(ff => ff.name == f);

            if (field && f === "fieldType" && data.fieldType !== FIELD_TYPES.LIST) {
                delete data.query;
            }

            if (field && field.fieldType == FIELD_TYPES.CHECK_BOX && data.hasOwnProperty(f) && [true, false].indexOf(data[f]) < 0) {
                data[f] = false;
            }
        });
    }

    isValidateField = (fields, data) => {
        let arr = [];
        for (const fName of Object.keys(data)) {
            let field = fields.find(ff => ff.name == fName);
            if (field) {
                if (field.fieldType === FIELD_TYPES.CHECK_BOX) {
                    if ([true, false].indexOf(data[fName]) < 0) {
                        arr.push(fName);
                        break;
                    }
                } else if (!data[field.name] || data[field.name] === "") {
                    arr.push(fName);
                    break;
                }



                if (field && data[field.name] == FIELD_TYPES.LIST && (!data.query || data.query === "")) {
                    arr.push("query");
                    break;
                }
            }
        }

        if (arr.length > 0) {
            let field = fields.find(ff => ff.name == arr[0]);
            this.#enqueueSnackbar(`${field.label} is required.`, { variant: "error" });
            return false;
        }
        return true;
    }

    isForeignKeyField = (fields, fieldName) => {
        let field = fields.find(f => f.name === "name");
        return field && field.options.find(f => f.data.name === fieldName && f.data.constraintType === "FOREIGN KEY");        
    }

    getForeignKeyInfo = (fields, fieldName) => {
        let field = fields.find(f => f.name === "name");
        let tableField = field ? field.options.find(f => f.data.name === fieldName && f.data.constraintType === "FOREIGN KEY") : null;   
        
        if(tableField && tableField.data) {
            let {constrainName, constraintType, foreignColumn, foreignTable} = tableField.data;
            return {constrainName, constraintType, foreignColumn, foreignTable};
        }
        return null;        
    }

    getTableFields = async (tableName, field, callBackToRender) => {
        let url = StringUtility.format(APIConstants.FORM_TABLE_FIELDS, tableName);
        let response = await AxiosApi.getData(url);
        console.log(response.data);
        field.options = response.data.map( m => {
            return {id: m.id, value: tableName+"."+m.name, text: tableName+"."+m.name}
        });

        callBackToRender();
    }
}
