import React, { Component } from "react";
import axios from 'axios';
import ProductList from "../productlist/ProductList";
import AddProduct from "../addproduct/AddProduct";
import NewProductForm from '../newproduct/NewProductForm';
import ProductDetail from "../productdetail/ProductDetail";
// import tshirt from "../../images/products/tshirt.png";
// import backpack from "../../images/products/backpack.png";
// import pants from "../../images/products/pants.png";
// import trekkingshoes from "../../images/products/trekkingshoes.png";
// import giacket from "../../images/products/giacket.png";
// import tshirt_ladies from "../../images/products/tshirt_ladies.png";
import Default_image from "../../images/product_image.jpeg";
// import Default_image from "../../images/products/tshirt_ladies.png";


class ProductControl extends Component {
    constructor(props){
        super(props);
        this.state ={
            productFormVisible: false,
            actualProductList:[],
            selectedProduct:null,
            editProduct: false,
        }
    }
    componentDidMount(){
        axios.get('https://react-yollomy-react-backend-rest-api.onrender.com/products')
        .then(res =>{
            console.log(res);
            this.setState({
                actualProductList: res.data
            })
        })
        .catch((err)=>console.log(err));
    };
    handleDeletingProduct = (id) =>{
        axios.delete('https://react-yollomy-react-backend-rest-api.onrender.com/products'+id)
            .then(res => console.log(res.data))
            .catch((error) =>{
                console.log(error)
            })
            this.setState({
                actualProductList: this.state.actualProductList.filter(product => product._id !== id),
                productFormVisible: false,
                selectedProduct: null
            })
    };
   
    handleClick = () =>{
      if(this.state.selectedProduct !=null){
          this.setState({
              productFormVisible: false,
              selectedProduct: null
          })
      }else{

          this.setState((prevState)=>({
              productFormVisible: !prevState.productFormVisible
          }))
      }
  }

  //Handle Ediy
  handleEditProductClick = () =>{
    this.setState({
        editProduct: true
    })
};
    // Method to handle adding a new product
   handleAddingNewProduct = (newProduct) =>{
    if (newProduct.photo === undefined){
        newProduct.photo = Default_image;
    }
       
    axios.post('https://react-yollomy-react-backend-rest-api.onrender.com/products',newProduct)
    .then(res => console.log(res.data))
    .catch((error) =>{
        console.log(error)
    })
    
    const newProductList = this.state.actualProductList.concat(newProduct)
    this.setState({
        actualProductList: newProductList,
        productFormVisible: false
    })
};

// Method to handle click event on a product
handleChangingSelectedProduct = (id) => {
  const selectedProduct = this.state.actualProductList.filter(product => product._id === id)[0];

  this.setState({selectedProduct: selectedProduct});
}

    render() {
      let currentVisibleState = null;
      let buttonText = null
      if(this.state.selectedProduct != null){
          currentVisibleState = <ProductDetail product ={this.state.selectedProduct} onDeleteProduct = {this.handleDeletingProduct} onEditProductClick = {this.handleEditProductClick} />
          buttonText = 'Back to Product List '
      } else if (this.state.productFormVisible){
          currentVisibleState = <NewProductForm  onNewProductCreation= {this.handleAddingNewProduct}/>
          buttonText = 'Go back to Product List'
      }else{
          currentVisibleState = <ProductList productList = {this.state.actualProductList} onProductSelection = {this.handleChangingSelectedProduct} /> // Because a user will actually be clicking on the Product in the Product component, we will need to pass our new handleChangingSelectedProduct method as a prop.
          buttonText = 'Add A Product'
      }

        return (
            <React.Fragment>
                <AddProduct whenButtonClicked = {this.handleClick} buttonText = {buttonText} />
                {currentVisibleState}
            </React.Fragment>
        )
    }
 }
 
 export default ProductControl;