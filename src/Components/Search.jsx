import React from 'react';


const Searcher = () => {

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search !== '') setQuery(search);
    setSearch('');
  };

  return (
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
  );
};

export default Searcher;
