import { BasePasswordField } from './baseFields';

const PasswordField = (props) => {
    const newProps = verifiedProps(props);
    return <BasePasswordField {...newProps}/>
};

export default PasswordField;


const verifiedProps = ({ ref, id, defaultValue, value, isRequired, ...props }) => {

    let newProps = { id, ...props };
    newProps.inputRef = ref;
    newProps.key = "key-" + id
    newProps.defaultValue = defaultValue ? defaultValue : "";       // important: avoid undefined
    newProps.value = value ? value : "";                            // important: avoid undefined

    newProps.InputLabelProps = { required: isRequired, }

    return newProps;
}