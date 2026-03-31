import { Box, Grid, styled } from "@mui/material";
import React, { forwardRef } from "react";
import FieldGroup from "./FieldGroup";


const FieldGroups = forwardRef(({
    groups = [],
}, ref) => {
    React.useImperativeHandle(ref, () => ({

    }));


    return <Box style={{ margin: 8, }}>
        {groups.map((m, index) => <FieldGroup key={index + "-" + m.id} {...m}/>)}
    </Box>
});

export default styled(FieldGroups)(({ theme }) => ({

}));