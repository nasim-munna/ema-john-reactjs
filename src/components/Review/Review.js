import { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import thankimage from '../../images/giphy.gif'


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false)
    const handlePlaceOrder =()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !==key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    }
    useEffect(()=>{
        //cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts =  productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        
    }, []);
    let thankyou;
    if(orderPlaced){
        thankyou=<img src={thankimage}></img>
    }
    
    return(
        <div className='shop-container'>
        <div className="product-container">
            
            {
                cart.map(pd=><ReviewItem  product={pd} handleRemove={handleRemove}></ReviewItem>)
            }
            {thankyou}
        </div>
        <div className='cart-container'>
            <Cart cart={cart}>
                <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
            </Cart>
        </div>
        </div>
        
    )

};

export default Review;