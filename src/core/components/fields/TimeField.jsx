
import { getTimeForTimePicker } from '../../utils/dateHandler';
import { BaseTimeField } from './baseFields';

const TimeField = (props) => {
    const newProps = verifiedProps(props);

    return <BaseTimeField {...newProps} />
};

export default TimeField;


const verifiedProps = ({ ref, id, defaultValue, value, isRequired, ...props }) => {

    let newProps = { id, ...props };
    newProps.inputRef = ref;
    newProps.key = "key-" + id
    newProps.defaultValue = defaultValue ? defaultValue : "";       // important: avoid undefined
    newProps.value = value ? value : "";                            // important: avoid undefined

    newProps.InputLabelProps = { required: isRequired, }

    return newProps;
}