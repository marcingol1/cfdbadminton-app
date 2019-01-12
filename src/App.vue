<template>
  <div id="app">
    <v-app id="vuetify-app">
      <v-form v-model="formValid">
        <v-container v-if="!signedIn">
          <v-layout justify-center>
            <v-flex xs12 md4>
              <v-text-field
                label="Username"
                name="username"
                v-model="username"
                v-validate="'required|min:6'"
                :error-messages="errors.collect('username')"
              ></v-text-field>
              <v-text-field
                label="Password"
                type="password"
                name="password"
                v-model="password"
                v-validate="'required'"
                :error-messages="errors.collect('password')"
              ></v-text-field>
              <v-btn color="primary" type="submit" @click="signIn">Log in</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <div v-if="signedIn" class="logged-in">
        <button @click="logout">Log out</button>
        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>|
          <router-link to="/server/list">Servers</router-link>
        </div>
        <router-view/>
      </div>
    </v-app>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { components } from "aws-amplify-vue";
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

export default Vue.extend({
  data() {
    return {
      signedIn: false,
      formValid: true,
      username: "",
      password: ""
    };
  },
  async beforeCreate() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.signedIn = true;
    } catch (err) {
      this.signedIn = false;
    }
  },
  methods: {
    async logout() {
      const signedOut = await Auth.signOut();
      this.signedIn = !this.signedIn;
    },
    async signIn() {
      console.log("loggin in as: ", this.username, this.password);
      const signIn = await Auth.signIn(this.username, this.password);
      this.signedIn = true;
    }
  }
});
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    padding: 0 16px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
