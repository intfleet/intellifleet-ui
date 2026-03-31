import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@mui/material/styles';
import AppDialogService from '../service/appDialogService';


const AppDialog = React.forwardRef(({
  children,
  maxWidth,
  requiredCancelBtn = false,
  requiredOKBtn = false,
  actions = []
}, ref) => {
  const [open, setOpen] = React.useState(false);
  // const [contentText, setContentText] = React.useState("");
  // const [title, setTitle] = React.useState("");

  const defaultProps = { title: null, contentText: null, component: null, maxWidth: "xs", type: null };
  const [data, setData] = React.useState(defaultProps);
  const { title, contentText, component, type } = data;

  React.useImperativeHandle(ref, () => ({
    handleOpen: handleOpen,
    handleClose: handleClose
  }));

  const handleOpen = ({ title, contentText, component, ...props }) => {
    // if(title) setTitle(title);
    // if(contentText) setContentText(contentText);
    setOpen(true);
    setData({ ...data, title, contentText, component, ...props });
  };

  const handleClose = () => {
    setOpen(false);
    setData(defaultProps);
  };

  const getActions = () => {
    let arr = [];

    let needCancelBtn = false;
    if (data && data.hasOwnProperty("requiredCancelBtn")) {
      if (data.requiredCancelBtn) {
        needCancelBtn = true;
      }
    } else if (requiredCancelBtn) {
      needCancelBtn = true;
    }

    if (needCancelBtn) {
      arr.push(<Button onClick={handleClose} color="primary" variant="outlined" style={{ fontSize: 12, lineHeight: 1 }}>    Cancel    </Button>);
    }


    let needOkBtn = false;
    if (data && data.hasOwnProperty("requiredOKBtn")) {
      if (data.requiredOKBtn) {
        needOkBtn = true;
      }
    } else if (requiredOKBtn) {
      needOkBtn = true;
    }

    if (needOkBtn) {
      arr.push(<Button onClick={handleClose} color="primary" variant="outlined" size='small' style={{ fontSize: 12, lineHeight: 1 }}> OK </Button>);
    }

    let arrActions = data && data.hasOwnProperty("actions") ? data.actions : actions;
    if (arrActions) {
      const btnProps = { color: "primary", variant: "outlined", size: 'small', style: { fontSize: 12, lineHeight: 1 } };
      arrActions.forEach((obj, index) => {
        if (obj.name === "cancel" || obj.name === "CANCEL" || obj.type === "CANCEL") {
          arr.push(<Button key={"ac-btn-cancel-" + index} {...btnProps} onClick={handleClose}> {obj.label ? obj.label : "Cancel"}</Button>);
        } else if (obj.name === "ok" || obj.name === "OK" || obj.type === "OK") {
          arr.push(<Button key={"ac-btn-ok-" + index} {...btnProps} onClick={handleClose}> {obj.label ? obj.label : "OK"}</Button>);
        } else {
          arr.push(<Button key={"ac-btn-" + obj.id + "-" + index} {...btnProps} onClick={obj.event}> {obj.label}</Button>);
        }
      });

    }

    return arr;
  }

  return <div>
    {open && <Dialog
      open={open}
      onClose={() => { }}
      aria-labelledby="form-dialog-title"
      maxWidth={data.maxWidth ? data.maxWidth : maxWidth}
      fullWidth={true}
      // scroll="paper"
      // slotProps={{
      //   paper: {
      //     sx: {
      //       height: 200
      //     },
      //   },
      // }}
      >
      {title && <DialogTitle id="form-dialog-title" style={{ fontSize: 16, lineHeight: 1, padding: 10, fontWeight: "bold" }}>{title}</DialogTitle>}
      {(children || contentText || component || type == "FORM" || type == "MULTIPART-FORM") && <DialogContent style={{ padding: 0 }}>
        {contentText && <DialogContentText> {contentText} </DialogContentText>}
        {children}
        {component && component}
        {(type == "FORM" || type == "MULTIPART-FORM") && AppDialogService.getContent(data)}
      </DialogContent>}
      {(type != "FORM" && type !== "MULTIPART-FORM") && <DialogActions>
        {getActions()}
        {actions}
      </DialogActions>}
    </Dialog>}
  </div>
});


export default AppDialog;


