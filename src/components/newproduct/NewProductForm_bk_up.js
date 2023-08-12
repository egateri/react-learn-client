import React from 'react';
import './newProductForm.css';

import {v4} from 'uuid'; 

const NewProductForm = (props) =>{

       // Function for handling onsubmission event
const handleNewProductFormSubmission =(event)=>{
    event.preventDefault();
    console.log(event.target.name.value)
    console.log(event.target.price.value)
    console.log(event.target.description.value)
    console.log(event.target.quantity.value)

    props.onNewProductCreation({
        name: event.target.name.value,
        price: event.target.price.value,
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        // photo: event.target.photo.value,
        id: v4()
    })
    }
   return (
       <React.Fragment>

           <div className="container product-form">
               <form className="new-product-form" onSubmit={handleNewProductFormSubmission}>
                   <h1>Product Form</h1>
                   <div className="form-input-material">
                       <input type = 'text'
                           name = 'name'
                           placeholder = ' '
                           className = 'form-control-material'
                           autoComplete="off"
                           id = 'name'
                       />
                       <label htmlFor="name"> Name</label>
                   </div>
                   <div className="form-input-material">
                       <input type = 'text'
                           name = 'price'
                           placeholder = ' '
                           className = 'form-control-material'
                           autoComplete="off"
                           id = 'price'
                           required
                       />
                       <label htmlFor="price"> Price</label>
                   </div>
                   <div className="form-input-material">
                       <textarea type = 'text'
                           name = 'description'
                           placeholder = ' '
                           className = 'form-control-material'
                           autoComplete="off"
                           id = 'description'
                           required
                       />
                       <label htmlFor="description"> Description </label>
                   </div>
                   <div className="form-input-material">
                       <input type = 'number'
                           name = 'quantity'
                           placeholder = ' '
                           className = 'form-control-material'
                           autoComplete="off"
                           id = 'quantity'
                           required
                       />
                       <label htmlFor="quantity"> Quantity</label>
                   </div>
                   {/* <div className="form-input-material">
                       <input type = 'text'
                           name = 'photo'
                           placeholder = ' '
                           className = 'form-control-material'
                           autoComplete="off"
                           id = 'photo'
                           required
                       />
                       <label htmlFor="quantity"> Photo</label>
                   </div> */}
                   <button type="submit" className="btn btn-primary btn-ghost">Add Product</button>   
               </form>
           </div>
       </React.Fragment>
   )

}

export default NewProductForm;