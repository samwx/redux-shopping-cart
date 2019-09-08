import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import { LoadingProduct } from "../components/LoadingProduct";
const ProductCartItem = lazy(() => import("../components/ProductCartItem"));

const Cart = props => (
  <div>
    <ul>
      <Suspense fallback={<LoadingProduct />}>
        {props.products.map(product => (
          <ProductCartItem key={product.id} product={product} onRemove={props.removeFromCart} />
        ))}
      </Suspense>
    </ul>

    <p>
      <b>Amount:</b> R$
      {props.products
        .reduce((acc, current) => acc + current.price, 0)
        .toFixed(2)}
    </p>
  </div>
);

const mapStateToProps = ({ cart }) => {
  return { products: cart.products };
};

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Cart);
