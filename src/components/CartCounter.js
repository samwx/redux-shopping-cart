import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CartCounterComponent = props => (
  <>
    <Link to="/cart"> View cart ({props.total})</Link>
  </>
);

const mapStateToProps = ({ cart }) => ({ total: cart.products.length });
export const CartCounter = connect(mapStateToProps)(CartCounterComponent);
