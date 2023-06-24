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
    handleClick = ()=>{
        this.setState((prevState)=>({
            productFormVisible: !prevState.productFormVisible
        }))
    }

    render() {
        let currentVisibleState = null;
        let buttonText = null;
        if (this.state.productFormVisible){
            currentVisibleState = <NewProductForm />
            buttonText = 'Go back to Product List'

        }else{
            currentVisibleState = <ProductList />
            buttonText = 'Add A Product'
        }
        return (
            <React.Fragment>
                <AddProduct />
                <button onClick = {this.handleClick}>{buttonText} </button>
                {currentVisibleState}
               
            </React.Fragment>
        )
    }
 }
 
 export default ProductControl;