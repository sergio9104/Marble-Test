import React from 'react';
import './WompiModal.css';
import { connect } from 'react-redux';
import * as actions from 'actions';

function WompiModal() {
  return (
    <div className="App">
      Hi there
    </div>
  );
}

export default connect(null, actions)(WompiModal);