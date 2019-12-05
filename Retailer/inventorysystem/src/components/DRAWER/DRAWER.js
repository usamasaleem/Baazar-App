import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});



function DRAWER(props) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
        >
            <List>
                {['Home', 'Products', 'Stores'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

 

    return (
        <div>
            
            <Drawer open={props.drawerOpen} onClose={false}>
                {sideList('left')}
                <ListItem button key={"LogOut"}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={"LogOut"} />
            </ListItem>
            </Drawer>
        
        </div>


    )
}

    


export default DRAWER;