import React from 'react';
import './Products.css';
import { connect } from 'react-redux';
import * as actions from 'actions';

function Products() {
  return (
    <section className="products">
        <h2>Store</h2>
        <div>
            <div>
                <i></i>
                <img alt=''></img>
            </div>
        </div>
    </section>
  );
}

export default connect(null, actions)(Products);