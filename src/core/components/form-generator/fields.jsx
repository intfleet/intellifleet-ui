import React from 'react';

import TextBox from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useForm, FormProvider, Controller } from "react-hook-form";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";


import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {useEffectOnce} from '../../custom-hook';

const TextField = ({ ...props }) => {

    let { id, select, options = [], onLoadEvent } = props;

    let fieldProps = {};
    if (select) {
        fieldProps.children = options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.text}
            </option>
        ))
    }

    useEffectOnce(() => {
        if (onLoadEvent) {
            onLoadEvent();
        }
    });

    React.useEffect(() => {

    }, [options]);


    return <TextBox
        key={"root-outlined-size-normal-"+props.name+(options ? options.length : 0)}
        label="Size"
        id="outlined-size-normal"
        //defaultValue="Normal"
        variant="outlined"
        {...props}
        {...fieldProps}
    />
}

const SelectField = ({ options = [], ...props }) => {

    let { name, label, className, variant = "outlined", size = "small", style, ...props1 } = props;
    
    return <FormControl variant={variant} size={size} style={style} key={options.length}>
        <InputLabel htmlFor={"outlined-native-"+name}>{label}</InputLabel>
        <Select
            native
            //value={state.age}
            //onChange={handleChange}
            IconComponent={() => <ArrowDropDown style={{ display: "block" }} />}
            inputProps={{
                name: name,
                id: 'outlined-native-'+name,
                readOnly: true
            }}
            {...props1}
        >
            {options && options.map(m => <option key={m.value} value={m.value}>{m.text}</option>)}
        </Select>
    </FormControl>
}

const CheckBox1 = (field) => {
    const { name, label, className, ...props } = field;
    return <FormControlLabel
        label={label}
        name={name}
        className={className}
        control={<Checkbox
        //checked={expenseOnEvent}
        //onChange={handleCheckBox}

        />}
    />
}
const CheckBox = (fieldProps) => {
    const { name, label, control, className, inputProps, ...props } = fieldProps;
    
    return <Controller
        control={control}
        //rules={{ required: true }}
        name={name}
        label={label}
        // {...props}
        render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => <div><FormControlLabel
            label={label}
            className={className}
            control={<input type="checkbox" {...inputProps} style={{margin: "0px 10px 0px 13px"}}/>}
        /></div>}/>
}

//*******************************   START:  InputFileUpload Buttom    ********************************/
const FileButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#ffffff",
    '&:hover': {
      backgroundColor: "#ffffff",
      border: "1px solid black",
    },
    border: "1px solid #c4c4c4",
    color: "inherit"
  }));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const InputFileUpload = (fieldProps) => {
    const { name, label, control, className, inputProps, ...props } = fieldProps;
  return (
    <FileButton component="label" variant="outlined" startIcon={<CloudUploadIcon />} >
      {label}
      <VisuallyHiddenInput type="file" {...inputProps} />
    </FileButton>
  );
}
//*******************************   END:  InputFileUpload Buttom    ********************************/

export {
    TextField,
    SelectField,
    CheckBox,
    InputFileUpload
}