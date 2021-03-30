import React, { useRef, useState, useEffect } from "react";
import {
  searchValue,
  editValue,
  emptyValue,
} from "../../../../redux/globalSearch";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "../../../../assets/search-icon.svg";
import ClearIcon from "../../../../assets/close-icon.svg";

const GlobalSearch = () => {
  const [focus, setFocus] = useState(false);
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  const inputValue = useSelector(searchValue);

  useEffect(() => {
    if (searchInput.current && focus) {
      searchInput.current.focus();
    }
  }, [focus]);

  const handleOnChange = (e) => {
    dispatch(editValue(e.target.value));
  };

  const handleClear = () => {
    dispatch(emptyValue());
  };

  const handleClick = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
    dispatch(emptyValue());
  };

  return (
    // some extra unnecessary conditional classes to make the search and clear svg icons a bit more consistent and remove their inherent bg, sorry couldn't find better ones
    <div className={`global-search-wrapper ${focus ? "input-focus-bg" : ""}`}>
      <button className="icon-wrapper" onClick={handleClick}>
        <img
          className={`svg-icon ${focus ? "icon-focus-bg" : ""}`}
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
            className={`svg-icon clear ${focus ? "icon-focus-bg" : ""}`}
            src={ClearIcon}
            alt="clear-searched-notes"
          />
        </button>
      )}
    </div>
  );
};

export default GlobalSearch;
