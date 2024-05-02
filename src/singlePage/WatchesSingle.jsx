import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
import { watchData } from "../stores/data/Watches";
import { useCart } from "../stores/context/CartContext";
import Footer from "../stores/components/Footer";

const WatchesSingle = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = watchData.find(item => item.id.toString() === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <>
            <Navbar />
            <div className="internal-page">
                <div className="internal-img">
                    <img src={product.image} alt={product.model} />
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

export default WatchesSingle;
