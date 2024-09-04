import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const fakeData15 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(fakeData15);

    const [cart, setCart] = useState([]);

    const addHandleProduct = (product)=>{
        // console.log('clicked to cart', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} addHandleProduct={addHandleProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>

            </div>
        </div>
    );
};

export default Shop;