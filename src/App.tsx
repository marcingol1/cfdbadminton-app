import React, { Fragment, useState, useEffect } from 'react';
import PrivateNotesList from './private-notes/private-notes-list';
import { fetchPrivateNotes } from './private-notes/services';

const App = () => {
  const [count, setCount] = useState(120);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchPrivateNotes(setList);
  });

  return (
    <Fragment>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <PrivateNotesList list={list} />
    </Fragment>
  );
};

export default App;
