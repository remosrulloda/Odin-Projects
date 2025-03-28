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
        <div className="shopItemsDiv flex justify-center items-center mx-auto px-4 mt-30">
            {isLoading ? (
                <div className="">
                    <p className="text-center text-lg font-semibold">Loading...</p>
                </div>
            ) :
                (
                    <div className="ml-15 mr-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
