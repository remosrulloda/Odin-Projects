import { useEffect, useState } from 'react';
import Card from "./Card";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="shop-container">
            {isLoading ? (
                <p className="text-center text-lg font-semibold">Loading...</p>
            ) :
                (
                    <div className="grid grid-cols-4 gap-4">
                        {products.map((product) => (
                            <Card key={product.id} product={product} />
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default Shop;
