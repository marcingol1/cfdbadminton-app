import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateNotesList from './private-notes/private-notes-list';
import { fetchPrivateNotes } from './private-notes/services';
import CreateServer from './game-servers/containers/create-server';
import ServerList from './game-servers/containers/server-list';
import HomePage from './home-page/containers/home-page';
import HeaderNav from './navigation/container/header-nav';
const App = () => {
  return (
    <Router>
      <Fragment>
        <HeaderNav />
        <Route path="/" exact component={HomePage} />
        <Route path="/server-create" component={CreateServer} />
        <Route path="/servers" component={ServerList} />
      </Fragment>
    </Router>
  );
};

export default App;
