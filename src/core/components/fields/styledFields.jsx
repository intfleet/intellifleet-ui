import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { FormControl as BaseFormControl, InputLabel, MenuItem as BaseMenuItem, Select, styled, FormControlLabel, FormGroup as BaseFormGroup, Checkbox } from '@mui/material';
import TextBox from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import FieldProps from './fieldProps';
import baseCss from './baseCss';

export const CssTextField = styled(TextBox)(({ theme }) => (baseCss));
export const CssFormControl = styled(BaseFormControl)(({ theme }) => ({
  ...baseCss,
  "& .MuiInputBase-input": {
    padding: "7px 6px 4PX",
    fontSize: "0.75rem",
    height: "20px",
  },
}));

export const CssMenuItem = styled(BaseMenuItem)(({ theme }) => ({
  minHeight: "28px", // smaller height than default 36px
  paddingTop: "2px",
  paddingBottom: "2px",
  fontSize: "0.75rem",
}));

export const CssFormGroup = styled(BaseFormGroup)(({ theme }) => ({
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#7575756b",
  borderRadius: 4,
  padding: 5,
  "&:hover": {
    border: "1px solid black",        // border only when Checkbox is focused
  },
  "&:focus-within": {
    border: "2px solid #1976d2",        // border only when Checkbox is focused
    padding: 3.7,
  },
}));