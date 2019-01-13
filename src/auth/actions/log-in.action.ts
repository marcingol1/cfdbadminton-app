import { Auth } from 'aws-amplify';

async function logInAction({ commit, state }, { username, password }) {
  const user = await Auth.signIn(username, password);
  console.log(user);
  commit('setLoggedIn', user);
}

export default logInAction;
