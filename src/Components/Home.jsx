import React from 'react';
import {Link} from 'react-router-dom';
import {
  MenuList,
  MenuItem,
} from '@material-ui/core';

const Home = () => {
  return (
    <>
      <MenuList>
        {['Home', 'Search', 'Favourites', 'Specials'].map((text, index) => (
          <MenuItem key={text} component={Link} to={`/${text}`}>
            {text}
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default Home;
