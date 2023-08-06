import React from 'react';
import PropTypes from 'prop-types';
import './product.css';
// import Default_image from "../../images/product_image.jpeg";


function Product(props) {
   return (
       <React.Fragment>
       <div className="col-12 col-sm-12 col-md-4" >
           
           <div className="product" onClick = { () => props.whenProductIsClicked(props.id)}  >
           
               <div className="product-img">
                   {/* <img src= {Default_image} */}
                   <img src= {props.photo}
        
                   className="img-fluid d-block mx-auto"
                   alt = {props.photo}/>
               </div>
               <div className="product-name-cost">
               {/* <h5 className="float-left gold"> "product id:"{props.id} </h5> */}
                   <h5 className="float-left gold">{props.name} </h5>
                   <h6 className="float-right font-weight-bold"> Ksh  {props.price}</h6>
               </div>
               <div >
               </div>
           </div>
           </div>

       
       </React.Fragment>
   )
}

Product.propTypes ={
   name: PropTypes.string,
   size: PropTypes.string,
   Price: PropTypes.string
}

export default Product;