import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      {/* <img src='https://assets9.lottiefiles.com/packages/lf20_AqRyxs.json'></img> */}

      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
