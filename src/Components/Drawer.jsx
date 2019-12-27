import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {
  Drawer,
  MenuList,
  MenuItem,
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
      <MenuList>
        {['Home', 'Search', 'Favourites', 'Specials'].map((text, index) => (
          <MenuItem key={text} component={Link} to={`/${text}`} onClick={() => props.drawerClose()}>
            <MoreVertRoundedIcon />{text}
          </MenuItem>
        ))}
      </MenuList>
      <Divider />
      <MenuList>
        <MenuItem component={Link} to="/favourites">
        Test
        </MenuItem>
      </MenuList>
    </div>
  );

  return (
    <Drawer
      open={props.drawerOpen}
      onClose={props.drawerClose}
    >
      {menuList()}
    </Drawer>
  );
};

MainMenu.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerClose: PropTypes.func,
};


export default MainMenu;
