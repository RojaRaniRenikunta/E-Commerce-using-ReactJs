import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { computerData } from "../stores/data/Computers";
import { useCart } from "../stores/context/CartContext";
import Footer from "../stores/components/Footer";

const ComputerSingle = () => {
    const { id } = useParams();
    const { addToCart, cartItems } = useCart();
    const product = computerData.find(item => (item.id).toString() === id);
    const [quantity, setQuantity] = useState(1);  // State to keep track of quantity

    // const increment = () => {
    //     setQuantity(prev => prev + 1);
    // };

    // const decrement = () => {
    //     if (quantity > 1) {
    //         setQuantity(prev => prev - 1);
    //     }
    // };

    const handleAddToCart = () => {
        addToCart({...product, quantity});
    };

    console.log(id, product);

    return (
        <>
            <Navbar />
            <div className="internal-page">
                <div className="internal-img">
                    <img src={product.image} alt="" />
                </div>
                <div className="interal-page1">
                    <div className="internal-com">
                        <h2>{product.company}</h2>
                    </div>
                    <div className="internal-model">
                        <h2>{product.model}</h2>
                    </div>
                    <div className="internal-category">
                        <h2>{product.category}</h2>
                    </div>
                    <div className="internal-price">
                        <h2>&#8377;{product.price}</h2>
                    </div>
                    <div className="internal-desc">
                        <h4>{product.description}</h4>
                    </div>
                    <button onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ComputerSingle;
