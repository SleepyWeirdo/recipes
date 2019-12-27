import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import {
  Box,
  Typography,
  Grid,
} from '@material-ui/core';

const RecipeList = ({recipes, query}) => {
  return (
    <>
      <Box>
        <Typography variant="h5" style={{padding: 20}}>
          Showing recipes for: {query}
        </Typography>
      </Box>
      <Grid container
        spacing={3}
        className="recipes"
        style={{margin: 'auto', maxWidth: '70%'}}>
        {recipes.map((recipe, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
          >
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              cautions={recipe.recipe.cautions}
              img={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.any,
  label: PropTypes.any,
  image: PropTypes.any,
  calories: PropTypes.any,
  cautions: PropTypes.any,
  ingredients: PropTypes.any,
  query: PropTypes.string,
};

export default RecipeList;
