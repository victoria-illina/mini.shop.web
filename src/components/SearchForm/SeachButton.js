import React from 'react';
import SearchIcon from "../../icons/SearchIcon";
import './index.css';

const SearchButton = ({placeholder}) => (
  <form className="search-form">
    <button className="search-form__btn" type="submit">
      <SearchIcon/>
    </button>
    <input
      className="search-form__input"
      type="text"
      placeholder= {placeholder}
    />
  </form>
);

export default SearchButton;
