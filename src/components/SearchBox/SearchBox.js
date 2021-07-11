import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, ListGroup } from "react-bootstrap";
import debounce from "lodash.debounce";
import { serachProduct } from "../../redux/Actions/ProductAction";

const SearchBox = ({ history }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const { searchProductList } = useSelector((state) => state.ProductReducer);

  const debouncedSave = useCallback(
    debounce((nextValue) => dispatch(serachProduct(nextValue)), 2000),
    [keyword]
  );

  const handleChange = (e) => {
    const { value: nextValue } = e.target;
    setKeyword(nextValue);
    debouncedSave(nextValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      serachProduct(keyword);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={handleChange}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>

      <div class='input-group'>
        <div class='form-outline'>
          <input type='search' id='form1' class='form-control' />
        </div>
      </div>

      {/* {searchProductList.map((item, index) => (
        <div>
          <img src={item.image} />
          <h2>{item.name}</h2>
        </div>
      ))} */}
    </Form>
  );
};
export default SearchBox;
