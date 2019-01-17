import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import { minWidth600px } from 'utils/matchMedia';

import { withStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Fab from '@material-ui/core/Fab';

import Menu from '@material-ui/icons/Menu';
import EventNote from '@material-ui/icons/EventNote';
import EventNoteOutlined from '@material-ui/icons/EventNoteOutlined';
import Store from '@material-ui/icons/Store';
import StoreOutlined from '@material-ui/icons/StoreOutlined';
import AddCircle from '@material-ui/icons/AddCircle';
import AddCircleOutlined from '@material-ui/icons/AddCircleOutline';
import Notifications from '@material-ui/icons/Notifications';
import NotificationsOutlined from '@material-ui/icons/NotificationsOutlined';
import Person from '@material-ui/icons/Person';
import PersonOutlined from '@material-ui/icons/PersonOutlineOutlined';

import styles from './BottomNav.module.scss';

const materailStyles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  addIcon: {
    margin: theme.spacing.unit,
    fontSize: 36,
  },
});

const BottomNav = (props) => {
  const {
    classes, history, openMenu, toggleOpenMenu,
  } = props;
  const [navIndex, setNavIndex] = useState(['feed', 'store', '-1', 'notice', 'setting'].indexOf(history.location.pathname.slice(1)));

  const handleNavIndex = (e, value) => {
    setNavIndex(value);
    if (minWidth600px() && openMenu) toggleOpenMenu();
  };

  return (
    <div>
      <Fab color="secondary" aria-label="Menu" className={styles.menu} onClick={toggleOpenMenu}>
        <Menu />
      </Fab>
      <BottomNavigation
        value={navIndex}
        onChange={handleNavIndex}
        showLabels
        className={classnames(classes.root, openMenu ? styles['nav-container'] : styles['nav-container-hide'])}
      >
        <BottomNavigationAction
          onClick={() => history.push('/feed')}
          className={styles['nav-item']}
          label="Feed"
          icon={navIndex === 0 ? <EventNote /> : <EventNoteOutlined />}
        />
        <BottomNavigationAction
          onClick={() => history.push('/store')}
          className={styles['nav-item']}
          label="Store"
          icon={navIndex === 1 ? <Store /> : <StoreOutlined />}
        />
        <BottomNavigationAction
          className={classnames(styles['nav-item'], navIndex === 2 && styles['add-icon-rotation'])}
          label=""
          icon={navIndex === 2
            ? <AddCircle className={classes.addIcon} />
            : <AddCircleOutlined className={classes.addIcon} />}
        />
        <BottomNavigationAction
          onClick={() => history.push('/notice')}
          className={styles['nav-item']}
          label="Notice"
          icon={navIndex === 3 ? <Notifications /> : <NotificationsOutlined />}
        />
        <BottomNavigationAction
          onClick={() => history.push('/setting')}
          className={styles['nav-item']}
          label="Setting"
          icon={navIndex === 4 ? <Person /> : <PersonOutlined />}
        />
      </BottomNavigation>
    </div>
  );
};

BottomNav.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  openMenu: PropTypes.bool.isRequired,
  toggleOpenMenu: PropTypes.func.isRequired,
};

export default withRouter(withStyles(materailStyles)(BottomNav));
