import React, { Component } from "react";
import { ProductItem } from "../components/ProductItem";
import { Products } from "../api/Products";
import "./Products.css";

export class ProductsList extends Component {
  state = {
    products: []
  };

  async componentWillMount() {
    const { items } = await Products.getProducts();
    this.setState({ products: items });
  }

  render() {
    return (
      <ul className="products-list">
        {this.state.products.map(p => (
          <ProductItem key={p.id} product={p} />
        ))}
      </ul>
    );
  }
}
