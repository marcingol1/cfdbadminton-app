import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/server-add/">Create new server</Link>
        </li>
        <li>
          <Link to="/servers/">Servers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
