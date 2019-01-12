<template>
  <div id="app">
    <amplify-authenticator></amplify-authenticator>
    <button v-if="signedIn" @click="logout">Log out</button>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/server/list">Servers</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { components } from "aws-amplify-vue";
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

export default Vue.extend({
  components: {
    ...components
  },
  data() {
    return { signedIn: false };
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
      Auth.signOut()
        .then(test => {
          console.log(test, this.$data, "test");
          this.signedIn = true;
        })
        .catch(() => {
          this.signedIn = false;
        });
      this.signedIn = !this.signedIn;
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
