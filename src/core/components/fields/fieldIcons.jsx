import { InputAdornment } from "@mui/material";
import TextFieldsIcon from '@mui/icons-material/TextFields';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import BaseCheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import SmartphoneIcon from '@mui/icons-material/Smartphone';


export const TextFieldIcon = () => {
    return <InputAdornment position="end">
        <TextFieldsIcon key="TextFieldsIcon" style={{fontSize: 14}} />
    </InputAdornment>
}

export const EmailFieldIcon = () => {
    return <InputAdornment position="end">
        <EmailIcon key="EmailIcon" style={{fontSize: 14}} />
    </InputAdornment>
}

export const PhoneFieldIcon = () => {
    return <InputAdornment position="end">
        <SmartphoneIcon key="SmartphoneIcon" style={{fontSize: 14}} />
    </InputAdornment>
}

export const PasswordFieldIcon = () => {
    return <InputAdornment position="end">
        <PasswordIcon key="PasswordIcon" style={{fontSize: 14}} />
    </InputAdornment>
}

export const CheckBoxIcon = () => {
    return <InputAdornment position="end">
        <BaseCheckBoxIcon key="BaseCheckBoxIcon" style={{fontSize: 14}} />
    </InputAdornment>
}

