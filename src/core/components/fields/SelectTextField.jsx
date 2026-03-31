
import { BaseSelectTextField } from './baseFields';
import { CssMenuItem } from './styledFields';
import AxiosApi from '../../../utils/httpRequestHandler';
import StringUtility from "../../utils/stringUtility";
import APIConstants from '../../../constants/apiConatants';
import React from 'react';

const SelectTextField = ({ options=[], query, ...props }) => {
    const newProps = verifiedProps(props);

    const [finalOptions, setFinalOptions] = React.useState([]);

    React.useEffect(() => {
        if(options && options.length > 0) {
            setFinalOptions(options);
        }
    }, [options, ]);

    React.useEffect(() => {
        if(query && query.id && query.id > 0) {
            getData(query.id);
        }
    }, [query]);

    const getData = async (id) => {
        try {
            if(!id || id <= 0) {
                console.log("Invalid Record Id.");
                return;
            }
    
            let url = StringUtility.format(APIConstants.QUERY_GET, id);
            let response = await AxiosApi.getData(url);
            if (response.data) {
                setFinalOptions(response.data);
            }
        } catch (error) {
            console.error(error);
            setFinalOptions([]);
        }
    }

    return <BaseSelectTextField {...newProps}>
        <CssMenuItem value=""><em>None</em></CssMenuItem>
        {finalOptions && finalOptions.map(m => <CssMenuItem key={m.value} value={m.value}>{m.text}</CssMenuItem>)}
    </BaseSelectTextField>
};

export default SelectTextField;


const verifiedProps = ({ ref, id, defaultValue, value, isRequired, ...props }) => {

    let newProps = { id, ...props };
    newProps.inputRef = ref;
    newProps.key = "key-" + id;
    newProps.defaultValue = defaultValue ? defaultValue : "";       // important: avoid undefined
    newProps.value = value ? value : "";                            // important: avoid undefined

    newProps.InputLabelProps = { required: isRequired, };

    return newProps;
}