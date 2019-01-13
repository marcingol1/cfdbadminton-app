import { Auth } from 'aws-amplify';

async function isLoggedInAction({ commit }) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log('user: ', user);
    if (user) {
      commit('setLoggedIn', true);
    } else {
      commit('setLoggedIn', false);
    }
  } catch (err) {
    commit('setLoggedIn', false);
  }
}

export default isLoggedInAction;
