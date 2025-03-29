import { useState } from "react";
import { useCart } from "./CartContext";

const Card = ({ product }) => {
    const { addToCart } = useCart(); // Get addToCart from context
    const [quantity, setQuantity] = useState(1);
    const [isClicked, setIsClicked] = useState(false);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: Number(quantity) });
        setQuantity(quantity);
        console.log(`Adding ${quantity} of ${product.title} to cart`);
        setIsClicked(true);
        console.log(isClicked);
        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;

        if (value === "") {
            setQuantity("");
        } else {
            const newQuantity = Math.max(1, Math.min(parseInt(value), 20));
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="card-container bg-white p-4 rounded-lg shadow-md flex flex-col justify-between w-full">
            <img
                src={product.image}
                alt={product.title}
                className="w-48 h-48 object-contain mx-auto"
            />
            <h2 className="text-lg font-semibold cursor-pointer text-center">{product.title}</h2>
            <h3 className="text-gray-700 text-md font-bold text-center">${product.price}</h3>

            <div className="flex items-center justify-between mt-2 space-x-2">
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="numInput border border-gray-400 rounded-lg p-2 w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={handleAddToCart}
                    className={`addToCartBtn py-2 px-4 rounded-lg text-semibold 
                        ${isClicked
                            ? "bg-green-500 text-black cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600 text-black"
                        }`}
                    disabled={isClicked}
                >
                    {isClicked ? "Added to Cart" : "Add to Cart"}
                </button>
            </div>
        </div >
    )
}

export default Card;