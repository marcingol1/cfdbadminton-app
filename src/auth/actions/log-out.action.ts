import { Auth } from 'aws-amplify';

async function logOutAction({ commit }) {
  const logOutStatus = await Auth.signOut();
  console.log('log out status: ', logOutStatus);
  commit('setLoggedIn', false);
}

export default logOutAction;
