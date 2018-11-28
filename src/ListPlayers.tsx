import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { any } from 'async';

const ListPlayersData = gql`
  query {
    listPlayers {
      items {
        id
        mail
        online
      }
    }
  }
`;

interface IPlayer {
  mail: string;
  online: boolean;
  id: string;
  __typename: string;
}

interface IListPlayersProps {
  data: {
    listPlayers: {
      items: IPlayer[];
    };
  };
}

const ListPlayers = (props: IListPlayersProps) => {
  if (!props.data.listPlayers) {
    return null;
  }
  return props.data.listPlayers.items.map((player, index) => {
    console.log(player);
    return <div key={index}>Player id: {player.mail}</div>;
  });
};

export default compose(
  graphql(ListPlayersData, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: props => props,
  }),
)(ListPlayers);
