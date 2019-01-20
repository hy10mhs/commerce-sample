import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import window from 'global/window';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { getProductsRequest } from 'modules/product/action';

import { width } from 'utils/windowSize';
import CONSTANT from '../../../constants';

const materialStyles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100vw',
  },
  gridItem: {
    cursor: 'pointer',
  },
  title: {
    color: CONSTANT.colors.secondary,
    fontSize: '0.5rem',
    textAlign: 'right',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

@connect(state => ({
  list: state.product.list,
}), {
  getProductsRequest,
})
class ProductContainer extends Component {
  state = {
    cellSize: Math.floor(width() / 3),
  }

  componentDidMount() {
    const { getProductsRequest } = this.props;
    getProductsRequest();

    // initiate cell size & dynamic cell size
    window.addEventListener('resize', this.adjustCellSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustCellSize);
  }

  adjustCellSize = () => {
    this.setState({ cellSize: Math.floor(width() / 3) });
  }

  handleLink = (url) => {
    window.open(url);
  }

  render() {
    const { classes, list } = this.props;
    const { cellSize } = this.state;

    return (
      <div className={classes.root}>
        <GridList cellHeight={cellSize} className={classes.gridList} cols={3}>
          {list.map(item => (
            <GridListTile className={classes.gridItem} key={item.id} cols={item.cols || 1}>
              <img
                src={item.image.url}
                alt={item.title}
                onClick={() => this.handleLink(item.url)}
              />
              <GridListTileBar
                title={item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

ProductContainer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  list: PropTypes.arrayOf({}),
  getProductsRequest: PropTypes.func,
};

ProductContainer.defaultProps = {
  list: [],
  getProductsRequest: () => {},
};

export default withStyles(materialStyles)(ProductContainer);
