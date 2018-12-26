import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
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

const HeaderNav = () => {
  return (
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
  );
};

export default HeaderNav;
