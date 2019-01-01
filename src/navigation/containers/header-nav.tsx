import React, { useState } from 'react';
import classNames from 'classnames';
import { Auth } from 'aws-amplify';

import {
  AppBar,
  withStyles,
  Toolbar,
  IconButton,
  MenuItem,
  Typography,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import MenuLinksList from '../components/menu-links-list';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  buttonLogout: {
    marginLeft: 'auto',
  },
});

const initiateLogout = () => {
  Auth.signOut()
    .then(data => {
      window.location.reload();
    })
    .catch(err => console.log(err));
};

const isLogged = () => {
  return Auth.currentAuthenticatedUser;
};

function LogoutButton({ classes }) {
  if (!isLogged()) {
    return null;
  }
  return (
    <Button
      className={classNames(classes.buttonLogout)}
      variant="contained"
      color="secondary"
      onClick={initiateLogout}
    >
      Logout
    </Button>
  );
}

const HeaderNav = ({ classes }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: drawerOpen,
        })}
      >
        <Toolbar disableGutters={!drawerOpen}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={() => {
              console.log('trigger', drawerOpen);
              setDrawerOpen(!drawerOpen);
            }}
            className={classNames(
              classes.menuButton,
              drawerOpen && classes.hide,
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Badminton
          </Typography>
          <LogoutButton classes={classes} />
        </Toolbar>
      </AppBar>
      {drawerOpen && <MenuLinksList />}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(HeaderNav);
