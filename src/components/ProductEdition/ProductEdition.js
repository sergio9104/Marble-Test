import React from 'react';
import './ProductEdition.css';
import { connect } from 'react-redux';
import * as actions from 'actions';

function ProductEdition() {
  return (
    <section className="productEdition">
      <h2>Product</h2>
      <div>
          <i className="productEdition-quantity"></i>
          <img className="productEdition-image" alt=''></img>
      </div>
      <div>
        <div>
            <span></span>
            <i></i>
            <span></span>
        </div>
        <div>
            <i></i>
            <i></i>
        </div>
      </div>
      <p></p>
    </section>
  );
}

export default connect(null, actions)(ProductEdition);