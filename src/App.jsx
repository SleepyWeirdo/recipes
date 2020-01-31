import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Users from './Components/Users';
import Posts from './Components/Posts';
import RecipeList from './Components/RecipeList';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/amber';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


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
          <Header
            getSearch={getSearch}
            updateSearch={updateSearch}
            query={query}
          />
          {/* <Searcher getSearch={getSearch} updateSearch={updateSearch} /> */}
          <Switch>
            <Route path='/Home' component={Home} />
            <Route path='/Search'>
              <RecipeList recipes={recipes} />
            </Route>
            <Route path='/Favourites'>lol</Route>
            <Route path='/Posts' component={Posts} />
            <Route path='/user/:name' component={Users}/>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
