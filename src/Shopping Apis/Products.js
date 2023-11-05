import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route,Routes } from "react-router-dom";
import Cart from './Cart.js'

function Products() {
  const [apiProducts, setApiProducts] = useState([]);

  const fetchProduct = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res);
      setApiProducts(res.data);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div
        className="container-fluid flex-wrap border"
        style={{
          height: "400px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit,279px",
        }}
      >
        {apiProducts.map((value, index) => (
        <div className="card" style={{ width: "18rem" }} key={value.id}>
        <img src={value.image} className="card-img-top" alt={value.title} style={{height:'300px', width:'auto'}}/>
        <div className="card-body">
          <h5 className="card-title" style={{height:'100px', overflow:'scroll'}}>{value.title}</h5>
          <p className="card-text"></p>
          <button
            className="btn btn-primary"
          
          >
            Add to Cart
          </button>
        </div>
      </div>
        ))}
      </div>
      <Routes>
        <Route path="/Cart" element = {<Cart/>}/>
      </Routes>
    </>
  );
}

export default Products;
