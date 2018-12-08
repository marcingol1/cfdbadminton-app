import React, { Fragment } from 'react';
import { graphql, compose, OptionProps } from 'react-apollo';
import gql from 'graphql-tag';
import { any } from 'async';
import { graphqlMutation } from 'aws-appsync-react';
import { buildSubscription } from 'aws-appsync';

const SubscribeToPlayers = gql`
  subscription {
    onCreatePlayer {
      id
      mail
    }
  }
`;

const CreatePlayer = gql`
  mutation($mail: AWSEmail) {
    createPlayer(
      input: {
        nickname: "Funny nickname"
        mail: $mail
        dateCreated: "2018-09-01T00:00Z"
        online: false
      }
    ) {
      id
      mail
      online
    }
  }
`;

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
    subscribeToMore: (any) => void;
  };
}

interface IListPlayersList {
  players: IPlayer[];
  subscribeToMore: any;
  createPlayer: (data: { mail: string }) => void;
}

class ListPlayers extends React.Component<IListPlayersList, any> {
  static defaultProps = {
    data: {
      listPlayers: [],
    },
  };
  constructor(props: IListPlayersList) {
    super(props);
  }

  componentDidMount() {
    this.props.subscribeToMore(
      buildSubscription(SubscribeToPlayers, ListPlayersData),
    );
  }

  render() {
    console.log(this.props);
    const { createPlayer, players } = this.props;

    return (
      <Fragment>
        <h1 onClick={() => createPlayer({ mail: 'funny@gmail.com' })}>
          Add new player!
        </h1>
        {players.map((player, index) => {
          return <div key={index}>Player id: {player.mail}</div>;
        })}
      </Fragment>
    );
  }
}

export default compose(
  graphqlMutation(CreatePlayer, ListPlayersData, 'Player'),
  graphql(ListPlayersData, {
    options: {
      fetchPolicy: 'cache-and-network',
    },
    props: (props: any) => ({
      subscribeToMore: props.data.subscribeToMore,
      players: props.data.listPlayers ? props.data.listPlayers.items : [],
    }),
  }),
)(ListPlayers);
