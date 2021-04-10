import React, { useRef, useEffect } from "react";
import {
  searchValue,
  editValue,
  emptyValue,
  handleFocus,
  inputFocus,
} from "../../../../redux/globalSearch";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "../../../../assets/search-icon.svg";
import ClearIcon from "../../../../assets/close-icon.svg";

const GlobalSearch = () => {
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  const inputValue = useSelector(searchValue);
  const isSearchActive = useSelector(inputFocus);

  useEffect(() => {
    if (searchInput.current && isSearchActive) {
      searchInput.current.focus();
    }
  }, [isSearchActive]);

  const handleOnChange = (e) => {
    dispatch(editValue(e.target.value));
  };

  const handleClear = () => {
    dispatch(emptyValue());
  };

  const handleClick = () => {
    dispatch(handleFocus(true));
  };

  const handleBlur = () => {
    dispatch(handleFocus(false));
  };

  return (
    // some extra unnecessary conditional classes to make the search and clear svg icons a bit more consistent and remove their inherent bg, sorry couldn't find better ones
    <div
      className={`global-search-wrapper ${
        isSearchActive ? "input-focus-bg" : ""
      }`}
    >
      <button className="icon-wrapper" onClick={handleClick}>
        <img
          className={`svg-icon ${isSearchActive ? "icon-focus-bg" : ""}`}
          src={SearchIcon}
          alt="search-notes"
        />
      </button>
      <div className="global-search-input-wrapper">
        <input
          className="global-search-input"
          id="global-search"
          aria-label="Search"
          placeholder="Search"
          ref={searchInput}
          onChange={handleOnChange}
          onClick={handleClick}
          onBlur={handleBlur}
          value={inputValue}
        />
      </div>
      {!!inputValue.length && (
        <button className="icon-wrapper" onClick={handleClear}>
          <img
            className={`svg-icon clear ${
              isSearchActive ? "icon-focus-bg" : ""
            }`}
            src={ClearIcon}
            alt="clear-searched-notes"
          />
        </button>
      )}
    </div>
  );
};

export default GlobalSearch;
