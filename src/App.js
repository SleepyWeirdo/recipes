import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  
  const APP_ID = '84f40488';
  const APP_KEY = 'ed94b0663f19eada2ae9b3a9fabc3e19';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')
  
  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    if(search !== '') setQuery(search);
    setSearch('');
  }
  
  return (
    <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch} />
      <button className="search-button" type="submit">Search</button>
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
      );
    }
    
    export default App;
    