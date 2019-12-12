import React, {useEffect, useState} from 'react';
import Recipe from './Components/Recipe';
import Header from './Components/Header';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/amber';
// import './App.scss';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
} from '@material-ui/core';

const App = () => {
  const APP_ID = '84f40488';
  const APP_KEY = 'ed94b0663f19eada2ae9b3a9fabc3e19';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('milk'); 

  const theme = createMuiTheme({
    palette: {
      primary: yellow,
      secondary: {
        main: '#0277bd',
      },
    },
  });

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <form onSubmit={getSearch} style={{'width': '100%'}} className="search-form" noValidate autoComplete="off">
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
        <Box><Typography variant="h5" style={{padding: 20}}>Showing recipes for: {query}</Typography></Box>
        <Grid container spacing={3} className="recipes" style={{margin: 'auto', maxWidth: '70%',}}>
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
      </div>
    </ThemeProvider>
  );
};

export default App;
