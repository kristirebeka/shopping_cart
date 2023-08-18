import React, { useState } from "react";

class Cart {
    static cartItems = [];

    static addToCart(product) {
        console.log("Adding to cart:", product);
        this.cartItems.push(product);
    }

    static getCartItems() {
        return this.cartItems;
    }
}
function CartComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = Cart.getCartItems();

    return (
        <div>
            <h2>Cart</h2>
            {isOpen ? (
                <div>
                    <p>Your cart has {cartItems.length} items:</p>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} -{" "}
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "EUR",
                                }).format(item.price)}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setIsOpen(false)}>Close cart</button>
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}

export default CartComponent;
