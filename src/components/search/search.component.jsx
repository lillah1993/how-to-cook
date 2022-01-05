// import React ,{useState} from 'react';
import "./search.style.scss";
import { ReactComponent as Logo } from "../../img/SVG/magnifying-glass.svg";
import getData from "./fetchContent.js";

import { connect } from "react-redux";

import {
  setCurrentList,
  setNextPageState,
} from "../../redux/list/list.actions";
import { setCurrentRecipe } from "../../redux/recipe/recipe.actions";
import { setCurrentShopList } from "../../redux/shop-list/shop-list.actions";
import { setQuery } from "../../redux/search/search.actions";
import { useState } from "react";

const Search = ({
  setCurrentList,
  setCurrentRecipe,
  setCurrentShopList,
  page,
  setNextPageState,
  setQuery,
  query,
}) => {
  const [search, setSearch] = useState("");
  const searchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search">
      <input
        className="searchInput"
        type="text"
        placeholder=" type your search"
        onChange={searchChange}
        value={search}
      />
      <button
        onClick={() => {
          setQuery(search);
          console.log(search);
          getData(search, page, setNextPageState, setQuery).then((res) =>
            setCurrentList(res)
          );
          setCurrentRecipe();
          setCurrentShopList();
        }}
      >
        <Logo className="glass" />
        <span>Search</span>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentList: (list) => dispatch(setCurrentList(list)),
  setCurrentRecipe: () => dispatch(setCurrentRecipe()),
  setCurrentShopList: () => dispatch(setCurrentShopList()),
  setNextPageState: (more) => dispatch(setNextPageState(more)),
  setQuery: (search) => dispatch(setQuery(search)),
});

const mapStateToProps = (state) => ({
  page: state.list.currentPage,
  query: state.search.currentQuery,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
