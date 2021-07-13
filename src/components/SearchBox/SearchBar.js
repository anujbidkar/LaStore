// import React, { useState, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Form, Button, ListGroup } from "react-bootstrap";
// import debounce from "lodash.debounce";
// import { serachProduct } from "../../redux/Actions/ProductAction";
import { Link } from "react-router-dom";

// const SearchBox = ({ history }) => {
//   const dispatch = useDispatch();
//   const [keyword, setKeyword] = useState("");
//   const { searchProductList } = useSelector((state) => state.ProductReducer);

//   const debouncedSave = useCallback(
//     debounce((nextValue) => dispatch(serachProduct(nextValue)), 2000),
//     [keyword]
//   );

//   const handleChange = (e) => {
//     const { value: nextValue } = e.target;
//     setKeyword(nextValue);
//     debouncedSave(nextValue);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       serachProduct(keyword);
//     } else {
//       history.push("/");
//     }
//   };

//   return (
//     <Form onSubmit={submitHandler} inline>
//       <Form.Control
//         type='text'
//         name='q'
//         onChange={handleChange}
//         placeholder='Search Products...'
//         className='mr-sm-2 ml-sm-5'
//       ></Form.Control>

//       {/* <div class='input-group'>
//         <div class='form-outline'>
//           <input type='search' id='form1' class='form-control' />
//         </div>
//       </div> */}

//       {/* {searchProductList.map((item, index) => (
//         <div>
//           <img src={item.image} />
//           <h2>{item.name}</h2>
//         </div>
//       ))} */}
//     </Form>
//   );
// };
// export default SearchBox;

import React, { useState } from "react";
import "./SearchBar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  //   const { searchProductList } = useSelector((state) => state.ProductReducer);

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
              <Link className='' to={`/productDetail/${value._id}`}>
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
