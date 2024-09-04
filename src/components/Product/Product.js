import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller,price,stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <p className='product-by'><small>by: {seller}</small></p>
                <p className='product-price'>${price}</p>
                <p className='product-stock'><small>Only {stock} left in stock</small></p>
                <button className='cart-btn' onClick={()=> props.addHandleProduct(props.product)}><i class="fa-solid fa-cart-shopping"></i>add to cart</button>
            </div>
        </div>
    );
};

export default Product;