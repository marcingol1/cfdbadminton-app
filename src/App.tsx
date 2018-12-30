import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PrivateNotesList from './private-notes/private-notes-list';
import { fetchPrivateNotes } from './private-notes/services';
import CreateServer from './game-servers/containers/create-server';
import ServerList from './game-servers/containers/server-list';
import HomePage from './home-page/containers/home-page';
import HeaderNav from './navigation/containers/header-nav';
import ThemeProvider from './theme/container/ThemeProvider';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Route path="/" exact component={HomePage} />
        <Route path="/server-add" component={CreateServer} />
        <Route path="/servers" component={ServerList} />
      </ThemeProvider>
    </Router>
  );
};

export default App;
