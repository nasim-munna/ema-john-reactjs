import React from 'react';


const ReviewItem = (props) => {
    const {name,price,quantity,key}=props.product;
    const {handleRemove}=props;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    };
    return (
        <div className='shop-container'>
        <div style={reviewItemStyle}>
            <h1 className='product-name'>{name}</h1>
            <p>Price-{price}</p>
            <p>Quantity- {quantity}</p>
            <button onClick={() => handleRemove(key)} className='main-button'>Remove</button>
        </div>
        </div>
    );
};

export default ReviewItem;