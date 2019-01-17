import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  test: state,
}))
class RankingContainer extends Component {
  render() {
    return (
      <div>RankingContainer</div>
    );
  }
}

export default RankingContainer;
