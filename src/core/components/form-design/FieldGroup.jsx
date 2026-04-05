import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
import UtilityUtils from "../../utils/utilityUtils";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SortableHelper from "./sortableHelper";
import FieldProtoType from "./FieldProtoType";
import formDesignConstants from "./formDesignConstants";

const { fieldPrototyps, fieldTypes, formFields } = formDesignConstants;


const style = {
    group: {
        padding: 10,
        border: "1px solid gray",
        borderRadius: 5,
        minHeight: 65
    },
    icon: {
        fontSize: 20,
        marginLeft: 8
    },
}

const StyledFieldGroup = styled(Box)(({ theme }) => ({
    border: "1px solid gray",
    borderRadius: 5,
    "& .icon": {
        display: "none",
    },
    "&:hover .hover-icon": {
        display: "block",
        cursor: "pointer"
    },
}));

const FieldGroup = ({ groups, id, name, label, fields = [], columnSize,
    openDialogToAddField = () => { }, openDialogToEditGroupField = () => { }, deleteEvent = () => { },
    editFieldFrotoType = () => { }, deleteFieldFrotoType = () => { }, onEndSortField = () => { } }) => {

    const containerRef = React.useRef();

    React.useEffect(() => {
        let sortable = SortableHelper.init(containerRef.current, onEndSortField(groups, id));
        // Cleanup on unmount
        return () => {
            sortable.destroy();
        };
    }, [groups]);


    return <StyledFieldGroup key={"FieldGroup-id-" + id} component="fieldset">
        <Typography key="label" component={"legend"} title={`${label} (Column Size: ${columnSize})`}>
            <Stack spacing={1} direction="row" >
                <Typography key="label" component="div" style={style.groupLabel} title={`${label} (Column Size: ${columnSize})`}>{label}</Typography>
                <AddIcon className="icon hover-icon" style={style.icon} onClick={openDialogToAddField} />
                <EditIcon className="icon hover-icon" style={style.icon} onClick={openDialogToEditGroupField} />
                <DeleteOutlineIcon className="icon hover-icon" style={style.icon} onClick={deleteEvent} />
            </Stack>
        </Typography>
        
        <Grid container spacing={1} ref={containerRef}>
            {fields.map((field, index) => {
                return <FieldProtoType key={field.id} {...field} icon={fieldPrototyps[field.fieldType].icon} columnSize={columnSize} editEvent={editFieldFrotoType(id, field.id)} deleteEvent={deleteFieldFrotoType(id, field.id)} />
            })}
        </Grid>
    </StyledFieldGroup>
}

export default FieldGroup;