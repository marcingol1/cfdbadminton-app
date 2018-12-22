import * as queries from './../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

async function fetchPrivateNotes(callback) {
  const testListItem = {
    key: 'hello',
  };
  console.log('queries', queries);
  return await API.graphql(graphqlOperation(queries.listTasks));
}

export { fetchPrivateNotes };
