import { Controller, useFormContext } from "react-hook-form"
import FORM_CONSTANTS from "../../../constants/formConstants";
const FIELD_TYPES = FORM_CONSTANTS.FIELD_TYPES;

const FieldController = ({ name, rules, label, fieldType, RenderComponent, isRequired, ...props }) => {

    const { control, formState: { errors }, } = useFormContext(); // ✅ typed context

    const renderComponentProps = { ...props, name, label, isRequired };
    // renderComponentProps.InputLabelProps = { required: isRequired };


    return <Controller
        name={name}
        control={control}
        rules={getRules(fieldType, isRequired, label)}
        {...props}
        render={({ field, fieldState: { error }, ...others }) => (
            <RenderComponent {...field} {...renderComponentProps}
                error={!!error}
                helperText={error ? error.message : ""}
            />
        )}>
    </Controller>
}
export default FieldController;


const FieldRules = {};
FieldRules[FIELD_TYPES.EMAIL] = { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" };
FieldRules[FIELD_TYPES.PHONE] = { value: /^[6-9]\d{9}$/, message: "10 digit phone no. required." };
FieldRules[FIELD_TYPES.PASSWORD] = { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Password must be at least 8 chars, include uppercase, lowercase, number & special char" };

const getRules = (fieldType, isRequired, label) => {
    let rule = {};
    if (isRequired) {
        rule.required = `${label} is required`;
        if (FieldRules[fieldType]) rule.pattern = FieldRules[fieldType];
    } else if (FieldRules[fieldType]) {
        rule.validate = (value) => !value || FieldRules[fieldType].value.test(value) || `${label} ${FieldRules[fieldType].message}`
    }
    return rule;
}