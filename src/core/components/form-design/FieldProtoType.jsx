import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';import formDesignConstants from "./formDesignConstants";
import FORM_CONSTANTS from "../../../constants/formConstants";

const { fieldPrototyps, fieldTypes, formFields } = formDesignConstants;
const FIELD_TYPES = FORM_CONSTANTS.FIELD_TYPES;
const DATA_TYPES = FORM_CONSTANTS.DATA_TYPES;


const style = {
    field: {
        border: "1px solid gray",
        borderRadius: 3,
        width: "100%",
        height: 25,
        padding: "1px 10px",
        // cursor: "move",
    },
}

const StyledFieldProtoTypeBox = styled(Box)(({ theme }) => ({
    "& .label": {
        whiteSpace: "nowrap",        /* Prevent text from wrapping */
        overflow: "hidden",           /* Hide the overflowing text */
        textOverflow: "ellipsis"
    },
    "& .icon-field": {
        display: "none",
        fontSize: 16,
        margin: "2px 0px 0px 8px"
    },
    "&:hover .hover-icon-field": {
        display: "block",
        cursor: "pointer",
    },
}));

const FieldProtoType = ({ label, icon, columnSize = 3, editEvent = () => { }, deleteEvent = () => { }, ...props }) => {
    let fieldStyle = style.field;
    let labelText = label;
    if (props.fieldType == FIELD_TYPES.UI_FIELD_EMPTY) {
        fieldStyle = { ...fieldStyle, border: "1px solid #8080804d", color: "#8080804d" };
    }

    if(props.isRequired) {
        fieldStyle = {...fieldStyle, border: "1.4px solid #ff00004f"}
    }

    return <Grid size={(12 / columnSize)}>
        <StyledFieldProtoTypeBox style={fieldStyle}>
            <Stack spacing={1} direction="row" style={{ height: "inherit" }}>
                <Typography component={"div"} className="label" title={label}>{label}</Typography>
                {props.fieldType !== FIELD_TYPES.UI_FIELD_EMPTY && <EditIcon className="icon-field hover-icon-field" onClick={editEvent} />}
                <DeleteOutlineIcon className="icon-field hover-icon-field" onClick={deleteEvent} />
                {props.fieldType !== FIELD_TYPES.UI_FIELD_EMPTY && <Typography component={"div"} style={{ marginLeft: "auto", marginTop: 2 }}>{icon}</Typography>}
            </Stack>
        </StyledFieldProtoTypeBox>
    </Grid>
}

export default FieldProtoType;