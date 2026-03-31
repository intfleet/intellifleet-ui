import React from "react";
import { Link } from 'react-router-dom';
import Utils from "../../../utils/utils";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Utility from "../utility";
import { Typography } from "@mui/material";

const { LightTooltipComponent } = Utility;

let style = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "inherit",
    fontSize: "inherit"
};

const ColumnFormatterComponent = ({row, index, column, id, formatExtraData = {}}) => {
    let { isFileDownload, isHtmltext } = formatExtraData;
    
    let val = row[column.dataField];
    let title = val;
    if (val === true || val === false) {
        val = new String(val);
        title = val;
    }
    
    if (column.detailLink) {
        val = <Link to={column.detailLink + "/" + row.id}> {val ? val : "Empty"} </Link>
    }
    // } else if (isFileDownload) {
    //     val = <FormatFileDownload />;
    //     title = "Click here to download file."
    // } else if (isHtmltext) {
    //     // val = <FormatHtmlText cell={val} row={row} rowIndex={rowIndex}/>;
    //     title = <FormatHtmlText cell={val}/>;
    //     val = Utils.removeAllHtmlTag(val);        
    // }

    return <LightTooltipComponent title={title} placement="bottom-start">
        <Typography component={"div"} style={style}>
            <span> {val} </span>
        </Typography>
    </LightTooltipComponent>;
}


const FormatHtmlText = ({ cell, row, rowIndex }) => {

    return <div style={{}}>
        <p style={{margin: 0}} dangerouslySetInnerHTML={{ __html: cell.replace(/\n/g, "<br />") }} />
    </div>;
}

const FormatFileDownload = ({ cell, row, rowIndex }) => {

    return <div style={{ "textAlign": "center", "cursor": "pointer" }}>
        <i className="fa fa-download" aria-hidden="true"></i>
    </div>;
}



export default ColumnFormatterComponent;
/*
const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,  
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));*/