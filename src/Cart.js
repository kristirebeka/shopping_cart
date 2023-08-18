import React from "react";

function Cart({ items }) {
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <h2>Items in your cart:</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <p>Your total price: {totalPrice}</p>
            {items.length > 0 && (
                <div>
                    <h3>Your selected items:</h3>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Cart;
