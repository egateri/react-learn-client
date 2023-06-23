import React from "react";
import PropTypes from 'prop-types'

function Product(props) {
 
  return (
    <React.Fragment>
      <h1>Yolomy Products</h1>
      <p> {props.name} </p>
      <p>Price - {props.price} </p>
    </React.Fragment>
  );
}
Product.propTypes ={
    name: PropTypes.string,
    Price: PropTypes.string
 }
export default Product;
