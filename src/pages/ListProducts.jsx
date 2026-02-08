import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function getData() {
        setLoading(true);
        setError(null);

        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data); // res.data È GIÀ L'ARRAY
            })
            .catch((err) => {
                setError("Errore nel recupero dei prodotti");
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function clearData() {
        setProducts([]);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div id="page-products">
            <h1>Products</h1>

            <div className="actions">
                <button className="btn" onClick={getData}>
                    Ricarica dati
                </button>

                <button className="btn" onClick={clearData}>
                    Azzera dati
                </button>
            </div>

            {loading && <p>Caricamento...</p>}
            {error && <p className="error">{error}</p>}

            <div className="flex-container flex-wrap gap-1">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img
                            className="product-image"
                            src={product.image}
                            alt={product.title}
                        />

                        <h3 className="product-title">{product.title}</h3>

                        <p className="product-category">{product.category}</p>

                        <p className="product-price">{product.price} €</p>

                        <p className="product-rating">
                            {product.rating.rate} ({product.rating.count})
                        </p>

                        <Link to={`/products/${product.id}`} className="link">
                            Vai ai dettagli
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListProducts;