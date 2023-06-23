import React from 'react';
import Product from '../product/Product';

function ProductList() {
   return (
       <React.Fragment> 
           <Product
           name = "Trousers"
           price = "1500"/>
       </React.Fragment>
   )
}

export default ProductList;