import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import styles from './AdderNewItem.module.scss';

const materialStyles = theme => ({
  fullList: {
    width: 'auto',
    height: '90vh',
  },
  closeList: {
    display: 'flex',
    justifyContent: 'center',
  },
  closeButtonWrapper: {
    width: 50,
    padding: 0,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
  },
  closeButton: {
    marginRight: 0,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const AdderNewItem = ({ classes, openAdder, handleBottomNavIndex }) => {
  const closeDrawer = e => handleBottomNavIndex(e, -1);

  const fullList = (
    <div className={classes.fullList}>
      <List className={classes.closeList}>
        <ListItem onClick={closeDrawer} className={classes.closeButtonWrapper}>
          <ListItemIcon className={classes.closeButton}><KeyboardArrowDown /></ListItemIcon>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['From your gallery', 'New photo'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <InboxIcon /> : <PhotoCamera />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Title', 'Target', 'Description'].map(text => (
          <ListItem button key={text}>
            {
              text === 'Description' ? (
                <TextField
                  label={text}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={text === 'Description' && 3}
                />
              ) : (
                <TextField
                  label={text}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              )
            }
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className={classes.closeList}>
        <ListItem onClick={closeDrawer} className={classes.closeButtonWrapper}>
          <ListItemIcon className={classes.closeButton}>
            <Button variant="outlined" color="secondary" component="span" className={classes.button}>
              Upload
            </Button>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer
      anchor="bottom"
      open={openAdder}
      onClose={closeDrawer}
      className={styles['adder-box']}
    >
      <div
        tabIndex={0}
        role="button"
      >
        {fullList}
      </div>
    </Drawer>
  );
};

AdderNewItem.propTypes = {
  classes: PropTypes.object.isRequired,
  openAdder: PropTypes.bool.isRequired,
  handleBottomNavIndex: PropTypes.func.isRequired,
};

export default withStyles(materialStyles)(AdderNewItem);
