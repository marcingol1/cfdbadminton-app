import React, { useState } from 'react';
import Client, { AUTH_TYPE } from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';

import AppSync from './AppSync';
import ListPlayers from './ListPlayers';

const client = new Client({
  url: AppSync.aws_appsync_graphqlEndpoint,
  region: AppSync.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.aws_appsync_apiKey,
  },
});

const App = () => {
  const [count, setCount] = useState(120);

  return (
    <ApolloProvider client={client}>
      <Rehydrated>
        <ListPlayers />
        <p>You clicked {count} times!</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </Rehydrated>
    </ApolloProvider>
  );
};

export default App;
