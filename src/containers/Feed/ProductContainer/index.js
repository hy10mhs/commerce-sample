import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  test: state,
}))
class ProductContainer extends Component {
  render() {
    return (
      <div>ProductContainer</div>
    );
  }
}

export default ProductContainer;
