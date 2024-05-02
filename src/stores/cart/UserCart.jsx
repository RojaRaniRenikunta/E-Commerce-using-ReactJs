import React from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

function UserCart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleIncrement = (itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        if (item) {
            updateQuantity(itemId, item.quantity + 1);
        }
    };

    const handleDecrement = (itemId) => {
        const item = cartItems.find(item => item.id === itemId);
        if (item && item.quantity > 1) {
            updateQuantity(itemId, item.quantity - 1);
        }
    };

    return (
        <>
        <Navbar></Navbar>
           <div className='cart-body'>
           <h2 className='y-cart'>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className='empty'>Your Cart is Empty</p>
            ) : (
                <div>
                    <table style={{ borderSpacing: "20px", width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ padding: "15px" }}>IMAGE</th>
                                <th style={{ padding: "15px" }}>PRODUCT</th>
                                <th style={{ padding: "15px" }}>PRICE</th>
                                <th style={{ padding: "15px" }}>QUANTITY</th>
                                <th style={{ padding: "15px" }}>SUBTOTAL</th>
                                <th style={{ padding: "15px" }}>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td style={{ padding: "15px" }}><img src={item.image} alt={item.model} style={{ width: "100px" }} /></td>
                                    <td style={{ padding: "15px" }}>{item.product}</td>
                                    <td style={{ padding: "15px" }}>&#8377;{item.price}</td>
                                    <td style={{ padding: "15px" }} className='table-row-quantity'>
                                        <button className="btn" onClick={() => handleDecrement(item.id)}>-</button>
                                        {item.quantity}
                                        <button className="btn" onClick={() => handleIncrement(item.id)}>+</button>
                                    </td>
                                    <td style={{ padding: "15px" }}>&#8377;{(item.price * item.quantity).toFixed(2)}</td>
                                    <td style={{ padding: "15px" }}>
                                        <button className='removeBtn' onClick={() => removeFromCart(item.id)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
           </div>
        </>
    );
}

export default UserCart;
