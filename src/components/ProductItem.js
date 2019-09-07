import React from "react";
import { Link } from "react-router-dom";

export default ({ product }) => {
  return (
    <li className="product-item">
      <img
        src={require(`../assets/images/${product.image}`)}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <span className="product-price">
        <b>Price:</b>
        {product.price}
      </span>
      <p>
        <Link to={`/product/${product.id}`}>Detalhes</Link>
      </p>
    </li>
  );
};
