import { Link } from "react-router-dom";

import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className='search custom'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <i className='fas fa-search'></i>
          ) : (
            <i
              id='clearBtn'
              onClick={clearInput}
              className='fas fa-window-close'
            ></i>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link className='' onClick={clearInput} to={`/productDetail/${value._id}`} onBlur={clearInput}>
                <div className='dataItem listDiv'>
                  <img className='imgThumbnail' src={value.image} />

                  {value.name}

                  <hr />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
