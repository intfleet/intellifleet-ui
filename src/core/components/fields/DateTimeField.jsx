import { getDateTimeForDateTimePicker } from '../../utils/dateHandler';
import { BaseDateTimeField } from './baseFields';

const DateTimeField = (props) => {
    const newProps = verifiedProps(props);

    return <BaseDateTimeField {...newProps} />
};

export default DateTimeField;


const verifiedProps = ({ ref, id, defaultValue, value, isRequired, ...props }) => {

    let newProps = { id, ...props };
    newProps.inputRef = ref;
    newProps.key = "key-" + id
    newProps.defaultValue = defaultValue ? defaultValue : "";       // important: avoid undefined
    newProps.value = value ? value : "";                            // important: avoid undefined

    newProps.InputLabelProps = { required: isRequired, }

    return newProps;
}


