import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

const useStyles = makeStyles({
  drawer: {
    width: 250,
  },
});

const MainMenu = (props) => {

  const classes = useStyles();

  const menuList = () => (
    <div
      className={classes.drawer}
      role="presentation"
      // onClick={toggleDrawer}
      // onKeyDown={toggleDrawer}
    >
      <List>
        {['Home', 'Search recipes', 'Favourites', 'Specials'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><MoreVertRoundedIcon/></ListItemIcon>
            {/* Jak dodać inne ikonki w zależności od itemu */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Register', 'Login', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><MoreVertRoundedIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      open={props.drawerOpen}
      onClose={props.drawerClose}
    >
      {menuList()}
    </Drawer>
  )
}


export default MainMenu;
