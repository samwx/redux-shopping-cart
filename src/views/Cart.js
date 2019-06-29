import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";

class Cart extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.products.map(product => (
            <li key={product.id}>
              <img width="100" src={require(`../assets/images/${product.image}`)} alt="" />
              <h4>{product.name}</h4>
              <p>{product.price}</p>

              <button onClick={() => this.props.removeFromCart(product)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>
          <b>Amount:</b> R$
          {this.props.products.reduce((acc, current) => acc + current.price, 0).toFixed(2)}
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return { products: cart.products };
};

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Cart);
