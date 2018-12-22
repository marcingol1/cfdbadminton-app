import React from 'react';

const ListItem = listItem => <span key={listItem.key}>{'Hello'}</span>;

const PrivateNotesList = ({ list }) => {
  return (
    <div>
      {list.map((listElement, index) => (
        <ListItem key={index} />
      ))}
    </div>
  );
};

export default PrivateNotesList;
