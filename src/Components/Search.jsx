import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  TextField,
} from '@material-ui/core';

const Searcher = ({getSearch, updateSearch}) => {
  return (
    <form
      onSubmit={getSearch}
      style={{'width': '100%'}}
      className="search-form"
      noValidate
      autoComplete="off">
      <Grid
        alignItems="center"
        justify="space-between"
        spacing={5}
        container>
        <Grid item xs={8}>
          <TextField
            fullWidth
            margin="normal"
            label="Type your ingredient"
            variant="outlined"
            onChange={updateSearch}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
          Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

Searcher.propTypes = {
  getSearch: PropTypes.func,
  updateSearch: PropTypes.string,
};

export default Searcher;
