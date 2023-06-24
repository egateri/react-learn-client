import React, { Component } from "react";
import ProductList from "../productlist/ProductList";
import AddProduct from "../addproduct/AddProduct";
import NewProductForm from '../newproduct/NewProductForm';
class ProductControl extends Component {
    constructor(props){
        super(props);
        this.state ={
            productFormVisible: false
        }
    }
    render() {
        let currentVisibleState = null;
        if (this.state.productFormVisible){
            currentVisibleState = <NewProductForm />
        }else{
            currentVisibleState = <ProductList />
        }
        return (
            <React.Fragment>
                <AddProduct />
                {currentVisibleState}
            </React.Fragment>
        )
    }
 }
 
 export default ProductControl;