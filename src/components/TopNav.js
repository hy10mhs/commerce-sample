import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import Spa from '@material-ui/icons/Spa';
import Search from '@material-ui/icons/Search';
import LocalGroceryStoreOutlined from '@material-ui/icons/LocalGroceryStoreOutlined';
import LocalShippingOutlined from '@material-ui/icons/LocalShippingOutlined';

import CONSTANT from '../constants';

import styles from './TopNav.module.scss';

const materialStyles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    [theme.breakpoints.up('sm')]: {
      width: '40vw',
      position: 'fixed',
      right: '10rem',
      bottom: '2.25rem',
      zIndex: '999999',
    },
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  logo: {
    padding: 10,
    color: CONSTANT.colors.primary,
  },
  iconButton: {
    padding: 10,
    color: CONSTANT.colors.secondary,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

const TopNav = (props) => {
  const { classes, openMenu } = props;
  return (
    <Paper className={classnames(classes.container, !openMenu && styles['container-hidden'])} elevation={1}>
      <IconButton className={classes.logo} aria-label="Logo">
        <Spa />
      </IconButton>
      <InputBase className={classes.input} placeholder="Search" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <Search />
      </IconButton>
      <Divider className={classes.divider} />
      <IconButton className={classes.iconButton} aria-label="Basket">
        <LocalGroceryStoreOutlined />
      </IconButton>
      <IconButton className={classes.iconButton} aria-label="Delivery">
        <LocalShippingOutlined />
      </IconButton>
    </Paper>
  );
};

TopNav.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  openMenu: PropTypes.bool.isRequired,
};

export default withStyles(materialStyles)(TopNav);
