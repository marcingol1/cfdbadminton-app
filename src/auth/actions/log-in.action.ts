import { Auth } from 'aws-amplify';

async function logInAction({ commit, state }, { username, password }) {
  const user = await Auth.signIn(username, password);
  console.log(user);
  commit('setLoggedIn', user);
}

export default logInAction;
/*
async logout() {
      const signedOut = await Auth.signOut();
      this.signedIn = !this.signedIn;
    },
    async signIn() {
      console.log("loggin in as: ", this.username, this.password);
      const signIn = await Auth.signIn(this.username, this.password);
      this.signedIn = true;
    },
    */
