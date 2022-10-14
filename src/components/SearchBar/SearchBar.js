import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product-slice";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const keywordRef = useRef("");
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(100);

  const searchByNameHandler = (event) => {
    event.preventDefault();
    dispatch(productActions.searchProduct({title: keywordRef.current.value, min: minPriceRef.current.value, max: maxPriceRef.current.value}));
  };

  return (
    <div className={classes.search}>
      <input type="text" ref={keywordRef} placeholder="Search.." onInput={searchByNameHandler} />
      <div className={classes.priceFilter}>
        <p>From </p>
        <input
          type="number"
          min="0"
          max="100"
          ref={minPriceRef}
          placeholder="Min"
          onInput={searchByNameHandler}
        />
        <p>To </p>
        <input
          type="number"
          min="0"
          max="100"
          ref={maxPriceRef}
          placeholder="Max"
          onInput={searchByNameHandler}
        />
      </div>
      <button onClick={searchByNameHandler}>Seach</button>
    </div>
  );
};

export default SearchBar;
