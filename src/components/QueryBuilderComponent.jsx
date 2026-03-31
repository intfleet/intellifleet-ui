/**
 * Query Builder ref doc
 * ===========================================================
 * https://react-querybuilder.js.org/
 * https://www.npmjs.com/package/react-querybuilder
 * 
 */


import { Box, Grid, Paper, Stack, Typography, styled } from "@mui/material";
import React, { forwardRef } from "react";
import { QueryBuilder } from 'react-querybuilder';
import { formatQuery } from 'react-querybuilder';  // import the util
import 'react-querybuilder/dist/query-builder.css';
import { AppContext } from "../core/context/appContext";
import { Button } from "../core/components/buttons";
import CONSTANSTS from "../constants/appConstants";
import PageHeader from "../core/components/utility/PageHeader";
import { BaseRadioGroupField, BaseSelectField } from "../core/components/fields/baseFields";
import AxiosApi from '../utils/httpRequestHandler';
import APIConstants from '../constants/apiConatants';
import StringUtility from "../core/utils/stringUtility";
import { CheckBox, TextField } from "../core/components/fields";
import TransferList from "../core/components/TransferList";
import { defaultOperators, toFullOption } from 'react-querybuilder/debug';

const style = {
    containerSX: {
        marginTop: 1,
        height: '90vh',
        width: "100%",
        overflowY: "auto",   // vertical scrollbar
        overflowX: "hidden", // prevent horizontal scrollbar        
    },
    header: {
        padding: "5px 10px",
        fontWeight: "bold",
        fontSize: 18,
        boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.3)",
        cursor: "pointer"
    },
    objectsContainerSX: {
        marginTop: 2
    }
}

const StyledStactHeader = styled(Stack)(({ theme }) => ({
    "& .icon": {
        display: "none",
    },
    "&:hover .hover-icon": {
        display: "block",
        cursor: "pointer"
    },
}));

const QueryBuilderComponent = forwardRef(({
    formId = 1,
}, ref) => {
    const queryBuilderRef = React.useRef();
    const { handleBackDrop, handleDialogOpen, handleDialogClose } = React.useContext(AppContext);
    const [data, setData] = React.useState();
    const [formList, setFormList] = React.useState([]);
    const [fields, setFields] = React.useState([]);
    const [value, setValue] = React.useState({ name: "", relation: [] });
    const [selectedFields, setSelectedFields] = React.useState([]);

    

    React.useImperativeHandle(ref, () => ({

    }));

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            handleBackDrop(true);
            let url = StringUtility.format(APIConstants.QUERY_BUILDER_INFO_GET, formId);
            let response = await AxiosApi.getData(url);
            handleBackDrop(false);
            if (response.data) {
                setData(response.data);
                setFormList(response.data.formList.map(m => {
                    return { value: m.name, text: m.label }
                }));
                
                setFields(response.data.fields);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const onChange = (name) => (event) => {
        console.log(event.target)
        value[name] = event.target.value;
        if (name === "relation") {
            value[name] = formList.filter(f => event.target.value.indexOf(f.value) > -1);
        }
        setValue({ ...value });
    }

    const saveEvent = async () => { 
        let sql = queryBuilderRef.current.getSQLQuery();
        console.log('save Inline SQL:', sql);

        let saveData = {};
        saveData.name = value.name;
        saveData.label = value.label;
        saveData.type = "QUERY";        
        saveData.relations = data.formList.filter( f => value.relation.map(m => m.value).includes(f.name));
        saveData.sql = sql;
        
        console.log('save Inline SQL:', saveData);

    }

    let actions = [
        { id: 1, name: "saveForm", label: "Save", onClick: saveEvent },
        { id: 2, name: "cancel", label: "Cancel", onClick: handleDialogClose },
    ]

    const joinTypes = [
        { id: 1, value: "left", label: "Left Join" },
        { id: 2, value: "right", label: "Right Join" },
        { id: 3, value: "self", label: "Self join" }
    ]
    return <>
        <PageHeader object={CONSTANSTS.OBJECTS.UI_QUERY} label={CONSTANSTS.OBJECTS_LABEL[CONSTANSTS.OBJECTS.UI_QUERY]} icon={CONSTANSTS.ICONS[CONSTANSTS.OBJECTS.UI_QUERY]} />

        <Box key={"field-paper-container"} sx={style.containerSX}>
            <Stack spacing={1} direction="column">
                {/* <StyledStactHeader spacing={1} direction="row" style={style.header}>
            <span><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
            <span >Query Builder</span>
        </StyledStactHeader> */}

                <RowWithGridColumnSize size={12} sx={style.objectsContainerSX}>
                    <Grid container spacing={1}>
                        <Grid size={2}>
                            <TextField id="name" name="name" label="Query Name" onChange={onChange("name")} value={value["name"]} />
                        </Grid>
                        <Grid size={2}>
                            <TextField id="label" name="label" label="Query Label" onChange={onChange("label")} value={value["label"]} />
                        </Grid>
                        <Grid size={5}>
                            <BaseSelectField name="object" label="Relation With" options={formList} onChange={onChange("relation")} value={value["relation"].map(m => m.value)} />
                        </Grid>
                        {/* <Grid size={3}>
                            <BaseRadioGroupField name="leftJoin" label="Join Type" options={joinTypes}/>
                        </Grid> */}
                    </Grid>
                </RowWithGridColumnSize>
                <Grid container spacing={1} sx={style.objectsContainerSX}>
                    <Grid size={5}>
                        <FieldsHeader>Field Selection</FieldsHeader>
                    </Grid>
                    <Grid size={7} ><FieldsHeader>Criteria</FieldsHeader></Grid>
                    <Grid size={5}>
                        <TransferList options={fields} setSelectedFields={setSelectedFields}/>
                    </Grid>
                    <Grid size={7}><QueryBuilderComponeng ref={queryBuilderRef} fields={selectedFields} /> </Grid>
                </Grid>

                asdadADS
                <ActionContainer actions={actions} />
            </Stack>

        </Box>
    </>
});

export default styled(QueryBuilderComponent)(({ theme }) => ({

}));

const ActionContainer = ({ actions = [] }) => {
    return <Stack spacing={1} direction="row" style={{ justifyContent: "flex-end", margin: 8 }}>
        {actions.map((ac, index) => <Button key={"btn-" + index} {...ac} />)}
    </Stack>
}

const RowWithGridColumnSize = ({ size = 12, children, ...props }) => {
    return <Grid container {...props}>
        <Grid size={size} sx={{ paddingTop: 1.2, paddingBottom: 1.2 }}> {children} </Grid>
    </Grid>
}

const FieldsHeader = ({ children }) => {
    return <Typography component="div" sx={{ marginLeft: 1, marginRight: 1, borderRadius: "3px", background: "#80808024", paddingLeft: 1 }}>{children}</Typography>
}


const initialQuery = { combinator: 'and', rules: [] };
const QueryBuilderComponeng = forwardRef(({
    fields=[]
}, ref) => {
    const [query, setQuery] = React.useState(initialQuery);

    React.useImperativeHandle(ref, () => ({
        getSQLQuery: () => formatQuery(query, 'sql')
    }));

    //console.log("query:: ", JSON.stringify(query));
    // Basic SQL with inline values
    //const sqlInline = formatQuery(query, 'sql');
    //console.log('Inline SQL:', sqlInline);
    return (
        <QueryBuilder fields={fields} query={query} onQueryChange={setQuery} />
      );
})

const validator = (r) => !!r.value;
const TmpFields = 
    [
      {
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Enter first name',
        validator,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        placeholder: 'Enter last name',
        defaultOperator: 'beginsWith',
        validator,
      },
      { name: 'age', label: 'Age', inputType: 'number', validator },
      {
        name: 'isMusician',
        label: 'Is a musician',
        valueEditorType: 'checkbox',
        operators: defaultOperators.filter((op) => op.name === '='),
        defaultValue: false,
      },
      {
        name: 'instrument',
        label: 'Primary instrument',
        valueEditorType: 'select',
        // values: musicalInstruments,
        // This must be commented out to properly demonstrate `autoSelectValue={false}`
        // defaultValue: 'Cowbell',
        operators: defaultOperators.filter((op) => op.name === '='),
      },
      {
        name: 'alsoPlays',
        label: 'Also plays',
        valueEditorType: 'multiselect',
        // values: musicalInstruments,
        defaultValue: 'more_cowbell',
        operators: defaultOperators.filter((op) => op.name === 'in'),
      },
      {
        name: 'tourStops',
        label: 'Tour stops',
        matchModes: true,
        subproperties: [
          { name: 'city', label: 'City' },
          { name: 'state', label: 'State/Province' },
          { name: 'venue', label: 'Venue' },
          { name: 'date', label: 'Date', inputType: 'date', datatype: 'date' },
          { name: 'country', label: 'Country' },
        ],
      },
      {
        name: 'gender',
        label: 'Gender',
        operators: defaultOperators.filter((op) => op.name === '='),
        valueEditorType: 'radio',
        values: [
          { name: 'M', label: 'Male' },
          { name: 'F', label: 'Female' },
          { name: 'O', label: 'Other' },
        ],
      },
      { name: 'height', label: 'Height', validator },
      { name: 'job', label: 'Job', validator },
      { name: 'description', label: 'Description', valueEditorType: 'textarea' },
      {
        name: 'birthdate',
        label: 'Birth Date',
        inputType: 'date',
        datatype: 'date',
      },
      {
        name: 'datetime',
        label: 'Show Time',
        inputType: 'datetime-local',
        datatype: 'timestamp with time zone',
      },
      { name: 'alarm', label: 'Daily Alarm', inputType: 'time' },
      { name: 'bign', label: 'Big Int', inputType: 'bigint' },
      {
        name: 'groupedField1',
        label: 'Grouped Field 1',
        comparator: 'groupNumber',
        groupNumber: 'group1',
        valueSources: ['field', 'value'],
      },
      {
        name: 'groupedField2',
        label: 'Grouped Field 2',
        comparator: 'groupNumber',
        groupNumber: 'group1',
        valueSources: ['field', 'value'],
      },
      {
        name: 'groupedField3',
        label: 'Grouped Field 3',
        comparator: 'groupNumber',
        groupNumber: 'group1',
        valueSources: ['field', 'value'],
      },
      {
        name: 'groupedField4',
        label: 'Grouped Field 4',
        comparator: 'groupNumber',
        groupNumber: 'group1',
        valueSources: ['field', 'value'],
      },
    ];