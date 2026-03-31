import { InputLabel, Select, styled, FormControlLabel, Checkbox, Stack, FormHelperText, OutlinedInput, Box, Chip, FormLabel, Radio, RadioGroup } from '@mui/material';
import FieldProps from './fieldProps';
import { CssTextField, CssFormControl, CssMenuItem, CssFormGroup } from './styledFields';
import { TextFieldIcon, EmailFieldIcon, PhoneFieldIcon, PasswordFieldIcon, CheckBoxIcon } from './fieldIcons';
import { useFormContext } from 'react-hook-form';

export const BaseTextField = (props) => <CssTextField {...FieldProps.textField}       {...props} />;
export const BaseEmailField = (props) => <CssTextField {...FieldProps.emailField}      {...props} />;
export const BasePasswordField = (props) => <CssTextField {...FieldProps.passwordField}   {...props} />;
export const BasePhoneField = (props) => <CssTextField {...FieldProps.phoneField}      {...props} />;
export const BaseNumericField = (props) => <CssTextField {...FieldProps.numericField}    {...props} />;
export const BaseDecimalField = (props) => <CssTextField {...FieldProps.decimalField}    {...props} />;

export const BaseDateField = ({ InputLabelProps, ...others }) => {
    let props = { ...FieldProps.dateField, ...others };
    props.InputLabelProps = { ...FieldProps.dateField.InputLabelProps, required: InputLabelProps.required, };

    return <CssTextField {...props} />;
};
export const BaseTimeField = ({ InputLabelProps, ...others }) => {
    let props = { ...FieldProps.timeField, ...others };
    props.InputLabelProps = { ...FieldProps.timeField.InputLabelProps, required: InputLabelProps.required, };

    return <CssTextField {...props} />;
};
export const BaseDateTimeField = ({ InputLabelProps, ...others }) => {
    let props = { ...FieldProps.dateTimeField, ...others };
    props.InputLabelProps = { ...FieldProps.dateTimeField.InputLabelProps, required: InputLabelProps.required, };

    return <CssTextField {...props} />;
};

export const BaseSelectTextField = (props) => <CssTextField {...FieldProps.selectTextField} {...props} />;


export const BaseCheckBox = ({ checkBox, InputLabelProps, label, ...props }) => {
    const { formGroup, stack, formControlLabel, control } = FieldProps.checkBox;
    let required = InputLabelProps.required;

    return <CssFormGroup {...formGroup}>
        <Stack {...stack}>
            <FormControlLabel control={<Checkbox {...control} {...checkBox} />} title={label} label={label} {...formControlLabel} {...props} />
            <CheckBoxIcon />
        </Stack>
    </CssFormGroup>
}



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            //   width: 250,
        },
    },
};
export const BaseSelectField = ({ options = [], ...props }) => {

    let { id, name, label, value=[], className, variant = "outlined", size = "small", style, readOnly = false, ...props1 } = props;

    const getLabelByValue = (value) => {
        let option = options.find(f => f.value === value);
        return option ? option.text : "";
    }

    return <CssFormControl variant={variant} size={size} style={{ ...style }} key={options.length} fullWidth>
        <InputLabel htmlFor={"outlined-native-" + name}>{label}</InputLabel>
        <Select multiple
            labelId={"demo-select-small-label-" + id}
            id={id}
            value={value}
            //onChange={handleChange}
            label={label}
            inputProps={{ readOnly: readOnly }}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, }} >
                    {selected.map((value) => (
                        <Chip key={value} label={getLabelByValue(value)} style={{height: 15, fontSize: 10}}/>
                    ))}
                </Box>
            )}
            MenuProps={MenuProps}
            {...props1}
        >
            <CssMenuItem value=""><em>None</em></CssMenuItem>
            {options && options.map(m => <CssMenuItem key={m.value} value={m.value}>{m.text}</CssMenuItem>)}
        </Select>
    </CssFormControl>
}



export const BaseRadioGroupField = ({ options=[], ...props }) => {
    let { id, name, label, className, variant = "outlined", size = "small", style, readOnly = false, ...props1 } = props;
    const { radioGroup, formControlLabel, control } = FieldProps.radio;
    
    return <CssFormControl key={"key-radio-"+name} variant={variant} style={{ ...style }} fullWidth>
        <RadioGroup {...radioGroup}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
        >
            {options.map( m => <FormControlLabel key={"radio-"+m.id} value={m.value} control={<Radio size={size} {...control} />} label={m.label} {...formControlLabel}/>)}
        </RadioGroup>
    </CssFormControl>
};