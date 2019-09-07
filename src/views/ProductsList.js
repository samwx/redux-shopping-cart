import React, { Component, Suspense } from "react";
import { Products } from "../api/Products";
import "./Products.css";
import { ProductErrorHandler } from "../components/ProductErrorHandler";

const ProductItem = React.lazy(() => import("../components/ProductItem"));
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
        <ProductErrorHandler>
          <Suspense fallback={<h1>Loading...</h1>}>
            {this.state.products.map(p => (
              <ProductItem key={p.id} product={p} />
            ))}
          </Suspense>
        </ProductErrorHandler>
      </ul>
    );
  }
}
