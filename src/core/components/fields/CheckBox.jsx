
import { useFormContext } from 'react-hook-form';
import { BaseCheckBox } from './baseFields';
import { FormHelperText } from '@mui/material';

const CheckBox = ({ id, name, label, value=false, defaultValue, isRequired, helperText,  onChange, error, ...props }) => {
    
    
    return <>
    <BaseCheckBox
        key={"key-" + id + "-" + name}
        name={name}
        label={label}
        value={value}
        checkBox={{onChange:onChange, checked: value || defaultValue, }}
        InputLabelProps={{ required: isRequired }}
        {...props}/>
    {error && <FormHelperText error={true} required={error.required} sx={{ml: 2}}>{props.helperText}</FormHelperText>}
    </>
};

export default CheckBox