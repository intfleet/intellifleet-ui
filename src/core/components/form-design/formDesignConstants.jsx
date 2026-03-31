import FORM_CONSTANTS from "../../../constants/formConstants";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const FIELD_TYPES = FORM_CONSTANTS.FIELD_TYPES;
const DATA_TYPES = FORM_CONSTANTS.DATA_TYPES;


const style = {
    iconFieldProtoType: {
        fontSize: 18,
    }
}

const fieldPrototyps = {};

fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.UI_FIELD_GROUP] = { label: "Field Group", icon: <i className="fa fa-object-group" aria-hidden="true"></i> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.UI_FIELD_EMPTY] = { label: "Empty", icon: null }

fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.TEXT] = { label: "Text", icon: <TextFieldsIcon key="TextFieldsIcon" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.NUMERIC] = { label: "Text", icon: <TextFieldsIcon key="TextFieldsIconNUMERIC" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.DECIMAL] = { label: "Text", icon: <TextFieldsIcon key="TextFieldsIconDECIMAL" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.LIST] = { label: "List", icon: <KeyboardArrowDownIcon key="KeyboardArrowDownIcon" /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.RADIO] = { label: "Radio Buton", icon: <RadioButtonCheckedIcon key="RadioButtonCheckedIcon" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.CHECK_BOX] = { label: "Check Box", icon: <CheckBoxIcon key="CheckBoxIcon" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.DATE] = { label: "Date", icon: <CalendarMonthIcon key="KeyboardArrowDownIcon" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.TIME] = { label: "Time", icon: <AccessTimeIcon key="AccessTimeIcon" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.DATE_TIME] = { label: "Date & Time", icon: [<CalendarMonthIcon key="CalendarMonthIcon" style={style.iconFieldProtoType} />, <ScheduleIcon key="ScheduleIcon" style={style.iconFieldProtoType} />] }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.EMAIL] = { label: "Email", icon: <EmailIcon key="EmailIcon" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.PASSWORD] = { label: "Password", icon: <PasswordIcon key="PasswordIcon" style={style.iconFieldProtoType} /> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.AADHAAR_NUMBER] = { label: "Aadhaar Number", icon: <i key="address-card-o" className="fa fa-address-card-o" aria-hidden="true"></i> }
fieldPrototyps[FORM_CONSTANTS.FIELD_TYPES.PHONE] = { label: "Phone", icon: <SmartphoneIcon key="SmartphoneIcon" style={style.iconFieldProtoType} /> }


export const fieldTypes = [
    { id: FIELD_TYPES.UI_FIELD_GROUP, value: FIELD_TYPES.UI_FIELD_GROUP, text: "FIELD GROUP" },
    { id: FIELD_TYPES.UI_FIELD_EMPTY, value: FIELD_TYPES.UI_FIELD_EMPTY, text: "FIELD EMPTY" },
    { id: FIELD_TYPES.TEXT, value: FIELD_TYPES.TEXT, text: FIELD_TYPES.TEXT },
    { id: FIELD_TYPES.NUMERIC, value: FIELD_TYPES.NUMERIC, text: FIELD_TYPES.NUMERIC },
    { id: FIELD_TYPES.DECIMAL, value: FIELD_TYPES.DECIMAL, text: FIELD_TYPES.DECIMAL },
    { id: FIELD_TYPES.LIST, value: FIELD_TYPES.LIST, text: FIELD_TYPES.LIST },
    { id: FIELD_TYPES.CHECK_BOX, value: FIELD_TYPES.CHECK_BOX, text: "CHECK BOX" },
    { id: FIELD_TYPES.DATE, value: FIELD_TYPES.DATE, text: FIELD_TYPES.DATE },
    { id: FIELD_TYPES.TIME, value: FIELD_TYPES.TIME, text: FIELD_TYPES.TIME },
    { id: FIELD_TYPES.DATE_TIME, value: FIELD_TYPES.DATE_TIME, text: "DATE TIME" },
    { id: FIELD_TYPES.EMAIL, value: FIELD_TYPES.EMAIL, text: FIELD_TYPES.EMAIL, },
    { id: FIELD_TYPES.AADHAAR_NUMBER, value: FIELD_TYPES.AADHAAR_NUMBER, text: "AADHAAR NUMBER" },
    { id: FIELD_TYPES.PHONE, value: FIELD_TYPES.PHONE, text: FIELD_TYPES.PHONE },
    { id: FIELD_TYPES.PASSWORD, value: FIELD_TYPES.PASSWORD, text: FIELD_TYPES.PASSWORD },
];

export const formFields = [
    { id: 1, name: "name", label: "Field Name", fieldType: FIELD_TYPES.LIST, dataType: DATA_TYPES.STRING, readOnly: false, },
    { id: 2, name: "foreignKey", label: "Relation Name", fieldType: FIELD_TYPES.LIST, dataType: DATA_TYPES.STRING, readOnly: false, },
    { id: 3, name: "label", label: "Field Label", fieldType: FIELD_TYPES.TEXT, dataType: DATA_TYPES.STRING, readOnly: false, },
    { id: 4, name: "fieldType", label: "Field Type", fieldType: FIELD_TYPES.LIST, dataType: DATA_TYPES.STRING, readOnly: false, },
    { id: 5, name: "columnSize", label: "Column Size", fieldType: FIELD_TYPES.TEXT, dataType: DATA_TYPES.INTEGER, readOnly: false, },
    { id: 6, name: "isPK", label: "Is PK", fieldType: FIELD_TYPES.CHECK_BOX, dataType: DATA_TYPES.BOOLEAN, readOnly: false, },
    { id: 7, name: "isHidden", label: "Is Hidden", fieldType: FIELD_TYPES.CHECK_BOX, dataType: DATA_TYPES.BOOLEAN, readOnly: false, },
    { id: 8, name: "isRequired", label: "Is Required", fieldType: FIELD_TYPES.CHECK_BOX, dataType: DATA_TYPES.BOOLEAN, readOnly: false, },
    { id: 9, name: "isSystemField", label: "Is Syatem Field", fieldType: FIELD_TYPES.CHECK_BOX, dataType: DATA_TYPES.BOOLEAN, readOnly: false, },
    { id: 10, name: "query", label: "Query", fieldType: FIELD_TYPES.LIST, dataType: DATA_TYPES.STRING, readOnly: false, },
]

export default {
    fieldPrototyps,
    fieldTypes,
    formFields,
}