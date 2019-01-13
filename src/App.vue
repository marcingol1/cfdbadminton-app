<template>
  <div id="app">
    <LogIn v-if="!isLoggedIn"/>
    <v-app id="vuetify-app">
      <div v-if="isLoggedIn" class="logged-in">
        <button>Log out</button>
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
import LogIn from "@/auth/components/log-in.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    LogIn
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
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
