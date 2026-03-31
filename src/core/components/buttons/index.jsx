import { Button as BaseButton } from "@mui/material";


const btnProps = {color:"primary", variant:"outlined", size:'small', style:{fontSize: 12, lineHeight: 1}};


export const Button = ({id, onClick, label, children, ...props}) => {
    if(label !== ">>") {
        //console.log(label, "::", props.disabled)
    }
    return <BaseButton key={"ac-btn-"+id} {...btnProps} {...props} onClick={onClick}> {label}{children}</BaseButton>
}