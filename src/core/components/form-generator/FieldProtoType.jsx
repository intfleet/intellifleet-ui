import { Grid } from "@mui/material";
import { TextField, EmailField, PhoneField, PasswordField, SelectTextField, DateField, TimeField, DateTimeField, CheckBox } from '../fields';
import FORM_CONSTANTS from "../../../constants/formConstants";
import FieldController from "../fields/FieldController";
import { useFormContext } from "react-hook-form";

const FIELD_TYPES = FORM_CONSTANTS.FIELD_TYPES;
const DATA_TYPES = FORM_CONSTANTS.DATA_TYPES;

const FieldProtoType = ({columnSize = 3, ...props}) => {

    return <Grid size={(12 / columnSize)}>
            {(FIELD_TYPES.TEXT == props.fieldType 
            || FIELD_TYPES.NUMERIC == props.fieldType) && <FieldController RenderComponent={TextField}          {...props}/>}
            {FIELD_TYPES.EMAIL == props.fieldType &&      <FieldController RenderComponent={EmailField}         {...props}/>}
            {FIELD_TYPES.PHONE == props.fieldType &&      <FieldController RenderComponent={PhoneField}         {...props}/>}
            {FIELD_TYPES.PASSWORD == props.fieldType &&   <FieldController RenderComponent={PasswordField}      {...props}/>}

            {FIELD_TYPES.LIST == props.fieldType &&       <FieldController RenderComponent={SelectTextField}    {...props}/>}

            {FIELD_TYPES.DATE == props.fieldType &&       <FieldController RenderComponent={DateField}          {...props}/>}
            {FIELD_TYPES.TIME == props.fieldType &&       <FieldController RenderComponent={TimeField}          {...props}/>}
            {FIELD_TYPES.DATE_TIME == props.fieldType &&  <FieldController RenderComponent={DateTimeField}      {...props}/>}

            {FIELD_TYPES.CHECK_BOX == props.fieldType &&  <FieldController RenderComponent={CheckBox}           {...props}/>}

            {/* {FIELD_TYPES.TEXT == fieldType &&       <TextField control={control} {...props}/>}
            {FIELD_TYPES.EMAIL == fieldType &&      <EmailField control={control} {...props}/>}
            {FIELD_TYPES.PHONE == fieldType &&      <PhoneField control={control} {...props}/>}
            {FIELD_TYPES.PASSWORD == fieldType &&   <PasswordField control={control} {...props}/>}
            
            {FIELD_TYPES.LIST == fieldType &&       <SelectTextField control={control} {...props}/>}
            {FIELD_TYPES.DATE == fieldType &&       <DateField control={control} {...props}/>}
            {FIELD_TYPES.TIME == fieldType &&       <TimeField control={control} {...props}/>}
            {FIELD_TYPES.DATE_TIME == fieldType &&  <DateTimeField control={control} {...props}/>}
            {FIELD_TYPES.CHECK_BOX == fieldType &&  <CheckBox control={control} {...props}/>} */}
    </Grid>
} 

export default FieldProtoType;
