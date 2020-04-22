import React from 'react';
import './ProductsSelected.css';
import { connect } from 'react-redux';
import * as actions from 'actions';

function ProductsSelected() {
  return (
    <section className="ProductsSelected">
      <h2>Shopping Cart</h2>
      <div>
        <i></i>
        <img></img>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <button></button>
    </section>
  );
}

export default connect(null, actions)(ProductsSelected);