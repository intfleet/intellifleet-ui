import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import React, { forwardRef } from "react";

import SortableHelper from "./sortableHelper";
import FieldGroup from "./FieldGroup";

const style = {
    header: {
        //background: "#8080801f",
        padding: "5px 10px",
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 18,
        boxShadow: "0 4px 4px -2px rgba(0, 0, 0, 0.3)",
        cursor: "pointer"
    },
    container: {
        sx: {
            p: 1,
            height: '75vh',
            overflowY: "auto",   // vertical scrollbar
            overflowX: "hidden", // prevent horizontal scrollbar
            scrollbarWidth: "thin",
            display: "flex",
            flexDirection: "column",
            gap: 1, // 8px (theme.spacing(1))
        },
        style: {
            marginTop: 0
        }
    },
    field: {
        border: "1px solid gray",
        width: "100%",
        height: 25,
        padding: "1px 10px",
        // cursor: "move",
    },
    icon: {
        fontSize: 20,
        marginLeft: 8
    },

    groupHeader: {
        marginLeft: 20,
        marginTop: -10,
        position: "absolute",
        padding: "0px 5px",
        backgroundColor: "#ffffff",
    },
    groupLabel: {
    },
    group: {
        padding: 10,
        border: "1px solid gray",
        borderRadius: 5,
        minHeight: 65
    },
}


const FieldContainer = forwardRef(({ 
    groups = [], 
    setGroups = () => {},
    openDialogToAddField=()=>{},
    openDialogToEditGroupField=()=> {},
    editFieldFrotoType=()=>{},
    deleteFieldFrotoType=()=>{}
}, ref) => {
    const containerRef = React.useRef(null);

    React.useImperativeHandle(ref, () => ({
        getRef: () => containerRef,
        getGroups: () => groups
    }));

    React.useEffect(() => {
        const sortable = SortableHelper.init(containerRef.current, onEndSortGroup(groups));
        // Cleanup on unmount
        return () => {
            sortable.destroy();
        };
    }, [groups]);

    const onEndSortGroup = (groups) => (oldIndex, newIndex) => {
        console.log("groups1: " + JSON.stringify(groups));

        let tmpGroups = [...groups];

        //Hold movable group from old index
        let oldGroup = tmpGroups[oldIndex];

        //Remove movable group from old index
        tmpGroups.splice(oldIndex, 1);

        //Add movable group to new index
        tmpGroups.splice(newIndex, 0, oldField);

        setGroups(tmpGroups);

        console.log("groups2: " + JSON.stringify(tmpGroups));
    }

    const onEndSortField = (groups, groupId) => (oldIndex, newIndex) => {
        let index = groups.findIndex(f => f.id === groupId);
        let fields = [...groups[index].fields];
        console.log("fields1: " + JSON.stringify(fields));

        //Hold movable field from old index
        let oldField = fields[oldIndex];

        //Remove movable field from old index
        fields.splice(oldIndex, 1);

        //Add movable field to new index
        fields.splice(newIndex, 0, oldField);

        groups[index].fields = fields;
        setGroups(groups);
        console.log("fields2: " + JSON.stringify(fields));
        console.log("groups2: " + JSON.stringify(groups));
    }

    const deleteEvent = (fieldType, id) => (event) => {
        if (fieldType === "HEADER") {
            setGroups(groups.filter(f => f.id !== id));
        }
    }

    return <Box ref={containerRef} sx={style.container.sx} style={style.container.style}>
        {groups.map((m, index) => <FieldGroup
            key={index + "-" + m.id}
            {...m}
            groups={groups}
            openDialogToAddField={openDialogToAddField(m.id)}
            openDialogToEditGroupField={openDialogToEditGroupField(m.id)}
            deleteEvent={deleteEvent("HEADER", m.id)}
            editFieldFrotoType={editFieldFrotoType}
            deleteFieldFrotoType={deleteFieldFrotoType}
            onEndSortField={onEndSortField} />)}
    </Box>
});


export default FieldContainer;