import React, {Fragment, useEffect, useState} from 'react';
import Recipe from './Components/Recipe';
import Header from './Components/Header';
// import './App.scss';
import {
  Button,
  Grid,
  Box,
  Typography
} from '@material-ui/core';

const App = () => {
  const APP_ID = '84f40488';
  const APP_KEY = 'ed94b0663f19eada2ae9b3a9fabc3e19';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search !== '') setQuery(search);
    setSearch('');
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <Fragment>
      <div className="App">
        <Header />
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
          >
            Search
          </Button>
        </form>
        <Box>
          <Typography variant="h5" style={{padding: 20}}>Showing recipes for: {query}</Typography>
        </Box>
        <Grid container spacing={3} className="recipes">
          {recipes.map((recipe, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              style={{padding: 20}}
            >
              <Recipe
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                img={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default App;
