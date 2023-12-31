import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart.js";

function Products() {
  const [apiProducts, setApiProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productPrice, setProductPrice] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  //for pagination
  const totalProducts = 20;
  const productPerPage = 5;
  const totalPages = 4;

  const renderPagenumbers = () => {
    const pagination = [];

    for (let index = 1; index < totalPages + 1; index++) {
      pagination.push(
        <li className="page-item" onClick={() => renderProducts(index)}>
          <div className="page-link" >
            {index}
          </div>
        </li>
      );
    }
    return pagination;
  };

  const renderProducts = (pageno) => {
    setEndIndex(pageno * productPerPage);

    setStartIndex(pageno * productPerPage - productPerPage);
  };
 

  console.log(startIndex, endIndex);
  const fetchProduct = async (order) => {
    await axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setApiProducts(res.data);
    });
  };

  console.log(apiProducts.length);
  const handleAddToCart = (product) => {
    const productIndex = cart.findIndex((value) => value.id === product.id);

    if (productIndex !== -1) {
      const updateCart = [...cart];
      updateCart[productIndex].quantity += 1;
      setCart(updateCart);
      setProductPrice(totalPrice(product));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setProductPrice(totalPrice(product));
    }
  };

  const handleIncrement = (product) => {
    const productIndex = cart.findIndex((value) => value.id === product.id);
    const updateCart = [...cart];
    updateCart[productIndex].quantity += 1;
    setCart(updateCart);
    setProductPrice(totalPrice(product));
  };
  const handleDecrement = (product) => {
    const productIndex = cart.findIndex((value) => value.id === product.id);
    const updateCart = [...cart];
    if (product.quantity > 0) {
      updateCart[productIndex].quantity -= 1;
      setCart(updateCart);
      setProductPrice(totalPrice(product));
    } else return;
  };

  const handleCartRemove = (value, index) => {
    const updateCart = [...cart];
    updateCart.splice(index, 1);
    setCart(updateCart);
    setProductPrice(totalPrice(updateCart));
  };
  useEffect(() => {
    setProductPrice(totalPrice());
  }, [cart]);

  const totalPrice = (price) => {
    return cart.reduce((acc, value) => acc + value.quantity * value.price, 0);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {/* <div onClick={()=>fetchProduct('desc')}>Desc</div>
    <div onClick={()=>fetchProduct('asc')}>Asc</div> */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">{renderPagenumbers()}</ul>
      </nav>
      <div
        className="container-fluid flex-wrap border"
        style={{
          height: "400px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit,279px",
        }}
      >
        {apiProducts.slice(startIndex, endIndex).map((value, index) => (
          <div className="card" style={{ width: "18rem" }} key={value.id}>
            <img
              src={value.image}
              className="card-img-top"
              alt={value.title}
              style={{ height: "300px", width: "auto" }}
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ height: "100px", overflow: "scroll" }}
              >
                {value.title}
              </h5>
              <p className="card-text"></p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleAddToCart(value);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <Routes>
        <Route path="/Cart" element = {<Cart/>}/>
      </Routes> */}

      <button
        className="btn btn-primary "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
        style={{ position: "fixed", top: "50px", right: "20px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </button>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Your Total Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Action</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            {cart.map((value, index) => (
              <tbody key={value.id}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{value.title}</td>
                  <td>{value.price}</td>
                  <td>{value.quantity}</td>

                  <td>
                    {" "}
                    <span>
                      <button onClick={() => handleIncrement(value)}>+</button>
                    </span>{" "}
                    <span>
                      <button onClick={() => handleDecrement(value)}>-</button>
                    </span>
                  </td>
                  <td
                    onClick={() => {
                      handleCartRemove(index);
                    }}
                  >
                    Remove
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          {productPrice}
        </div>
      </div>
    </>
  );
}

export default Products;
