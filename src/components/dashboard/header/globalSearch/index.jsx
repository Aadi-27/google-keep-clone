import React, { useRef, useState, useEffect } from "react";
import SearchIcon from "../../../../assets/search-icon.svg";
import ClearIcon from "../../../../assets/close-icon.svg";

const GlobalSearch = () => {
  const [focus, setFocus] = useState(false);
  const searchInput = useRef(null);

  useEffect(() => {
    if (searchInput.current && focus) {
      searchInput.current.focus();
    }
  }, [focus]);

  const handleClick = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
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
          aria-label="Search"
          placeholder="Search"
          ref={searchInput}
          onClick={handleClick}
          onBlur={handleBlur}
        />
      </div>
      <button className="icon-wrapper">
        <img
          className={`svg-icon clear ${focus ? "icon-focus-bg" : ""}`}
          src={ClearIcon}
          alt="clear-searched-notes"
        />
      </button>
    </div>
  );
};

export default GlobalSearch;
