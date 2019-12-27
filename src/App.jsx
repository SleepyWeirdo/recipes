import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Searcher from './Components/Search';
import RecipeList from './Components/RecipeList';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/amber';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  formStyle: {
    width: '100%',
  }
}));

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
        <Router>
          <Header />
          <Searcher getSearch={getSearch} updateSearch={updateSearch}/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/Search'>
              <RecipeList recipes={recipes} query={query} />
            </Route>
            <Route path='/Favourites'>
                  lol
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
