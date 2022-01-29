import React from 'react';
import './Product.css';

const Product = (props) => {
//    console.log(props.product)
   const {name,img,seller,stock,price}=props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="Image" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock- order soon</p>
                <button onClick={()=>props.handleProductAdd(props.product)} className='main-button'>add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;