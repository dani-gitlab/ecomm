import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        );
        result = await result.json();
        setProducts(result);
    }
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id} `, {
            method: "Delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json()
        if (result) {
            getProducts();
        }
    };

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                setProducts(result)
            } else {
                getProducts()
            }
        }
    }
    return (
        <div className="products-list">
            <h1>ProductsList</h1>
            <input type="text" placeholder="Search Products" className="search-product-box"
                onChange={searchHandle}
            />

            <ul>
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation List</li>
            </ul>
            {
                products.length > 0 ? products.map((item, i) =>
                    <ul key={item._id}>
                        <li>{i + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button></li>
                        <Link to={"/update/" + item._id}>Update Product</Link>
                    </ul>

                )
                    : <h1>No products found</h1>
            }


        </div>
    )
}

export default ProductsList 