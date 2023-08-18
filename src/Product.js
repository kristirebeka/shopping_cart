import React from 'react';
import Cart from './Cart';

function Product({ product }) {
    const handleAddToCart = () => {
        Cart.addToCart(product);
    };

    return (
        <div className="product">
            <h3>{product.name}</h3>
            <p>Price: {product.price} EUR</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
}

export default Product;
