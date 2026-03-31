import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import FieldProtoType from "./FieldProtoType";


const style = {
    group: {
        padding: 10,
        border: "1px solid gray",
        borderRadius: 5,
        minHeight: 65,
        width: "100%"
    },
    icon: {
        fontSize: 20,
        marginLeft: 8
    },
}


const FieldGroup = ({ id, label, fields = [], columnSize, }) => {
    return <Box key={"FieldGroup-id-" + id} component="fieldset" style={style.group}>
    <Typography key="label" component={"legend"} title={`${label} (Column Size: ${columnSize})`}> {label}</Typography>
        <Grid size={12} key={"FieldGroup-Grid-id-" + id}>
            <Grid container spacing={1.5}>
                {fields.filter( f => !f.isHidden)
                .map((field, index) => <FieldProtoType key={field.id + field.name + index} {...field} columnSize={columnSize}/>)}
            </Grid>
        </Grid>
    </Box>
}

export default FieldGroup;