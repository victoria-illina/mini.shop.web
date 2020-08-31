import React from 'react';
import SearchIcon from "../../icons/SearchIcon";
import './index.css';

const SearchForm = ({ placeholder, icon }) => (
  <form className="search-form">
    <button className="search-form__button" type="submit">
      <SearchIcon/>
    </button>
    <input
      className="search-form__input"
      type="text"
      placeholder="living room"
    />
  </form>
);

export default SearchForm;
