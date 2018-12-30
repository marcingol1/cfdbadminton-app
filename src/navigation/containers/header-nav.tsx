import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withTheme,
  AppBar,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import ScoreIcon from '@material-ui/icons/Score';

interface Route {
  link: string;
  exact?: boolean;
  text: string;
  icon: JSX.Element;
}

const routing: Route[] = [
  {
    link: '/',
    exact: true,
    text: 'Home',
    icon: <HomeIcon />,
  },
  {
    link: '/server-add',
    text: 'Create new server',
    icon: <AddIcon />,
  },
  {
    link: '/servers',
    text: 'Servers list',
    icon: <ScoreIcon />,
  },
];

const HeaderNav = props => {
  return (
    <AppBar position="static">
      <nav>
        <List>
          {routing.map((route: Route, index) => (
            <Link to={route.link} key={route.link + index}>
              <ListItem button>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </nav>
    </AppBar>
  );
};

export default withTheme()(HeaderNav);
