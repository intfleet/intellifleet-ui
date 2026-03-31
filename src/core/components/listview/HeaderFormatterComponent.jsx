import { Typography } from "@mui/material";
import React from "react";


const HeaderFormatterComponent = ({data}) => {
    let style = {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "inherit",
    };
    return <div style={style} title={data.text}> {data.text} </div>
}

export default HeaderFormatterComponent;