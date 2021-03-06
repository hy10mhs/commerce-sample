import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Stars from '@material-ui/icons/Stars';

import ProductContainer from './ProductContainer';
import RankingContainer from './RankingContainer';

import CONSTANTS from '../../constants';

import styles from './Feed.module.scss';

const materialStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    fontSize: '10px',
  },
  appBar: {
    backgroundColor: CONSTANTS.colors.backSecondary,
  },
};

function TabContainer(props) {
  const { children } = props;
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

class Feed extends Component {
  state = {
    navIndex: 0,
  }

  handleNavIndex = (e, navIndex) => this.setState({ navIndex });

  render() {
    const { classes } = this.props;
    const { navIndex } = this.state;

    return (
      <div className={classes.container}>
        <AppBar position="sticky" className={classes.appBar}>
          <Tabs value={navIndex} onChange={this.handleNavIndex}>
            <Tab icon={<CardGiftcard />} />
            <Tab icon={<Stars />} />
          </Tabs>
        </AppBar>
        {navIndex === 0 && <TabContainer><ProductContainer /></TabContainer>}
        {navIndex === 1 && <TabContainer><RankingContainer /></TabContainer>}
      </div>
    );
  }
}

Feed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(materialStyles)(Feed);
