import React, {Fragment, useEffect, useState} from 'react';
import Recipe from './Components/Recipe';
import Header from './Components/Header';
import './App.scss';
import {Box, Button} from '@material-ui/core';

const App = () => {
  const APP_ID = '84f40488';
  const APP_KEY = 'ed94b0663f19eada2ae9b3a9fabc3e19';

  const [recipes, setRecipes] = useState([]); //baza aktualnych przepisów
  const [search, setSearch] = useState(''); //aktualnie wpisany tekst w wyszukiwarce
  const [query, setQuery] = useState('chicken'); //szuakana fraza


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
      <Box color="text.primary" clone>
        <Button />
      </Box>
      <div className="App">
        <Header />
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <Button variant="contained" color="primary" type="submit">Search</Button>
        </form>
        <h3>Showing recipes for: {query}</h3>
        <div className="recipes">
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              img={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
