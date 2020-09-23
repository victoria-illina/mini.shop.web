import React from 'react';
import SearchButton from "./SeachButton";
import './index.css';

const SearchForm = () => {
  return (
    <section className="search__block">
      <SearchButton placeholder="living room"/>
    </section>
  );
};

export default SearchForm;
