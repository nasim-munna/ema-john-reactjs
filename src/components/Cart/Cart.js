import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart =props.cart;
    const total = cart.reduce( (total,prd)=>total+prd.price,0)
   
    let shipping = 0;
    if (total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax= total/10;
    const formatNumber=(num)=>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const grandTotal=total+shipping+tax;

    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Ordered:{cart.length}</h5>
            <h6>Product price ${formatNumber(total)}</h6>
            <h6>Shipping Cost:${formatNumber(shipping)}</h6>
            <h6><small>VAT+Tax ${formatNumber(tax)}</small></h6>
            <h6>Total Price ${formatNumber(grandTotal)}</h6>
        </div>
    );
};

export default Cart;