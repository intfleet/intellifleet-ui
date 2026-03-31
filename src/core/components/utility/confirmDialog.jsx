import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const styles = {
  root: {
      width: 500,
  },
};

const ConfirmDialog = React.forwardRef(({ clickEvent, cancelEvent = () => {} }, ref) => {

  const [open, setOpen] = React.useState(false);
  const [dialogProps, setDialogProps] = React.useState({title:"", contentText:"", event: ()=> {}});
  const {title, contentText, event, ...otherProps} = dialogProps;
  React.useImperativeHandle(ref, () => ({
    handleOpen: handleOpen,
  }));

  const handleOpen = ({title, contentText, callback, ...others}) => {
    setDialogProps({title, contentText, event: callback, ...others})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    cancelEvent();
  };

  const onClickEvt = () => {
    if(clickEvent) {
      clickEvent();
    } else if(event) {
      event();
    } else if(otherProps && otherProps.clickEvent) {
      otherProps.clickEvent();
    }
    handleClose();
  }

  return <div>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={"xs"} fullWidth={true}>
      {title && <DialogTitle id="form-dialog-title">{title}</DialogTitle>}
      { <DialogContent>
        {contentText && <DialogContentText> {contentText} </DialogContentText>}
      </DialogContent>}
      <DialogActions>
         <Button onClick={handleClose} color="primary">    Cancel    </Button>
        <Button onClick={onClickEvt} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  </div>
});


export default ConfirmDialog;