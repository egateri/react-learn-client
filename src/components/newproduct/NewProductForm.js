import React from 'react';
import './newProductForm.css';
import FileBase from 'react-file-base64';
import {v4} from 'uuid'; 
import { useState } from 'react';

const NewProductForm = (props) =>{
const[listingData, setListingData] = useState("");

       // Function for handling onsubmission event
const handleNewProductFormSubmission =(event)=>{
    event.preventDefault();
    console.log(event.target.name.value)
    console.log(event.target.price.value)
    console.log(event.target.description.value)
    console.log(event.target.quantity.value)
    // console.log(event.target.photo.value)
    console.log(listingData?.selectedFile)
    const photo =listingData?.selectedFile;
    props.onNewProductCreation({
        name: event.target.name.value,
        price: event.target.price.value,
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        // photo: event.target.photo.value,
        photo: photo,
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
                       <input type = 'file'
                           name = 'photo'
                           placeholder = ''
                           className = 'form-control-material'
                           autoComplete="off"
                           id = 'photo'
                           accept=".jpg, .jpeg, .png"
                           required
                       />
                       <label htmlFor="quantity"> Photo</label>
                   </div> */}
                   <div className="form-input-material">
                   <FileBase type="file" multiple={false} onDone={({base64}) => setListingData({ ...listingData, selectedFile: base64})}/>
                   </div>
                   <button type="submit" className="btn btn-primary btn-ghost">Add Product</button>   
               </form>
           </div>
       </React.Fragment>
   )

}

export default NewProductForm;