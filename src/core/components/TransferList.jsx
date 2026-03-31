

import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { Button } from './buttons';
import styled from 'styled-components';

export const CssListItemButton = styled(ListItemButton)(({ theme }) => ({
    "&.MuiListItemButton-gutters": {
        paddingTop: 0,
        paddingBottom: 0
    },
}));

export const CssListItemText = styled(ListItemText)(({ theme }) => ({
    "&.MuiListItemText-dense": {
        marginTop: "2px",
        marginBottom: "2px",
        fontSize: "0.75rem",
    }

}));

const notChecked = (a, b) => {
    return a.filter((option) => !b.includes(option));
}

const not = (a, b) => {
    return a.filter((option) => !b.includes(option.name));
}

const intersection = (a, b) => {
    return a.filter((option) => b.map(m => m.name).includes(option));
}

const TransferList = React.forwardRef(({
    options = [],
    setSelectedFields= ()=>{}
}, ref) => {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([]);
    const [right, setRight] = React.useState([]);

    let leftChecked = intersection(checked, left);
    let rightChecked = intersection(checked, right);

    React.useImperativeHandle(ref, () => ({

    }));

    React.useEffect(() => {
        setLeft(options);
    }, [options.length > 0]);

    React.useEffect(() => {
        setSelectedFields(right);
    }, [right.length]);
    

    const handleToggle = (name) => () => {
        const currentIndex = checked.indexOf(name);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(name);
        } else {
            newChecked.splice(name, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
        setChecked([])
    };

    const handleCheckedRight = () => {
        let rightOption = left.find(f => leftChecked.includes(f.name) );
        setRight(right.concat(rightOption));
        setLeft(not(left, leftChecked));
        setChecked(notChecked(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        let leftOption = right.find(f => rightChecked.includes(f.name) );
        setLeft(left.concat(leftOption));
        setRight(not(right, rightChecked));
        setChecked(notChecked(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
        setChecked([]);
    };


    let actions = [
        { id: 1, name: "mv-all-right", label: "≫", onClick: handleAllRight, disabled: left.length == 0, "aria-label": "move all right", },
        { id: 2, name: "mv-slct-right", label: ">", onClick: handleCheckedRight, disabled: leftChecked.length == 0, "aria-label": "move selected right", },
        { id: 3, name: "mv-slct-left", label: "<", onClick: handleCheckedLeft, disabled: rightChecked.length == 0, "aria-label": "move selected left", },
        { id: 4, name: "mv-all-left", label: "≪", onClick: handleAllLeft, disabled: right.length == 0, "aria-label": "move all left", },
    ];
    console.log("left-final:: ", left)
    return (
        <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <Grid><CustomList key={"left-"+left.length} id="left" items={left} checked={checked} handleToggle={handleToggle}/></Grid>
            <Grid>
                <Grid container direction="column" sx={{ alignItems: 'center' }}>
                    <Actions actions={actions} />
                </Grid>
            </Grid>
            <Grid><CustomList key={"right-"+right.length} id="right" items={right} checked={checked} handleToggle={handleToggle}/></Grid>
        </Grid>
    );
});


export default TransferList;

const Actions = ({actions}) => {
    const actionCommonProps = {sx: { my: 0.5 }, variant:"outlined", size:"small"};
    return actions.map( m => <Button {...actionCommonProps} {...m}/>);
}

const CustomList = ({ id, items = [], checked, handleToggle=()=>{} }) => {

    const [listItems, setListItems] = React.useState([]);
    React.useEffect(() => {console.log("items-", items)
        setListItems(items);
    }, [items.length > 0])

    return <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
        <List dense component="div" role="list">
            {listItems.length > 0 && listItems.map((m, index) => {
                const labelId = `transfer-list-item-${id}-${m.name}-label`;

                return <CssListItemButton
                        key={labelId+ "-" + index}
                        id={labelId}
                        role="listitem"
                        onClick={handleToggle(m.name)}
                    >
                        <ListItemIcon style={{ minWidth: 30 }}>
                            <Checkbox
                                checked={checked.includes(m.name)}
                                tabIndex={-1}
                                disableRipple
                                // inputProps={{
                                //     'aria-labelledby': labelId,
                                // }}
                                size="small"
                                sx={{ padding: 0 }}
                            />
                        </ListItemIcon>
                        <CssListItemText id={labelId} primary={`${m.label}`} />
                    </CssListItemButton>
                
            })}
        </List>
    </Paper>
}