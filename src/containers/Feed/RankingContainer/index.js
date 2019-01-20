import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import window from 'global/window';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { getRankingRequest } from 'modules/ranking/action';

import { width } from 'utils/windowSize';
import CONSTANT from '../../../constants';

import styles from './RankingContainer.module.scss';

const materialStyles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  chipWrapper: {
    paddingTop: 0,
    paddingBottom: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  panel: {
    width: '100%',
  },
  panelSummary: {
    paddingLeft: 16,
  },
  avatar: {
    borderRadius: '20%',
    fontSize: '10em',
    width: '2em',
    height: '2em',
  },
  rankText: {
    fontSize: '3em',
    flex: 'unset', // Unset ListItemText default style
    minWidth: '3em',
    textAlign: 'center',
    paddingRight: 0,
  },
  descText: {
    flex: 'unset', // Unset ListItemText default style
    fontSize: '3em',
  },
  linkContainer: {
    right: '1.5em',
    cursor: 'pointer',
  },
  link: {
    color: CONSTANT.colors.info,
  },
});

@connect(state => ({
  list: state.ranking.list,
}), {
  getRankingRequest,
})
class RankingContainer extends Component {
  state = {
    rootFontSize: width() / 100,
    infoOpen: true,
    expanded: null,
  }

  componentDidMount() {
    const { getRankingRequest } = this.props;
    getRankingRequest();

    // dynamic root font size
    window.addEventListener('resize', this.adjustRootFontSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustRootFontSize);
  }

  adjustRootFontSize = () => {
    this.setState({ rootFontSize: width() / 100 });
  }

  handleLink = url => (event) => {
    event.stopPropagation();
    window.open(url);
  }

  handleChange = index => (event, expanded) => {
    this.setState({ expanded: expanded ? index : false });
  };

  handleInfoOpen = () => {
    this.setState({ infoOpen: false });
  };

  render() {
    const { classes, list } = this.props;
    const { rootFontSize, infoOpen, expanded } = this.state;
    return (
      <List dense className={classes.root} style={{ fontSize: rootFontSize }}>
        {
          infoOpen && (
            <ListItem className={classes.chipWrapper}>
              <Chip
                label="Click the image to open the shop"
                onDelete={this.handleInfoOpen}
                className={classes.chip}
                color="secondary"
              />
            </ListItem>
          )
        }
        {list.map((item, index) => (
          <ListItem key={item.id} button>
            <ExpansionPanel
              className={classes.panel}
              expanded={expanded === index}
              onChange={this.handleChange(index)}
            >
              <ExpansionPanelSummary
                className={classes.panelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <ListItemText
                  primary={index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                  className={classnames(classes.rankText, index < 3 && styles['top-ranktext'])}
                />
                <ListItemAvatar className={classes.avatar} onClick={this.handleLink(item.url)}>
                  <Avatar
                    alt={item.name}
                    src={item.image.url}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={item.description}
                  className={classes.descText}
                />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  More shop details..
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ListItem>
        ))}
      </List>
    );
  }
}

RankingContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array,
  getRankingRequest: PropTypes.func,
};

RankingContainer.defaultProps = {
  list: [],
  getRankingRequest: () => {},
};

export default withStyles(materialStyles)(RankingContainer);
