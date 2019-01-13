<template>
  <v-form v-model="formValid">
    <v-container fill-height>
      <v-layout justify-center>
        <v-flex xs12 md4>
          <img alt="Crazy Badminton Logo" src="../../assets/cfdb.svg">
        </v-flex>
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
          <v-btn color="primary" @click="logIn">Log in</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions, mapState } from "vuex";

const LogIn = Vue.extend({
  data() {
    return {
      formValid: true,
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["isLoggedInAction", "logInAction"]),
    logIn() {
      console.log(this);
      const { username, password } = this;
      this.logInAction({ username, password });
    }
  },
  async mounted() {
    this.isLoggedInAction();
  },
  computed: mapState({
    isLoggedIn: state => state.auth.isLoggedIn
  })
});

export default LogIn;
</script>


<style lang="scss" scoped>
</style>
