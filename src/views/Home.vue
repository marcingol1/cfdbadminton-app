<template>
  <div>
    <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    <button @click="logout">Log out</button>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { components } from "aws-amplify-vue";
import { AmplifyEventBus } from "aws-amplify-vue";

import { Auth } from "aws-amplify";

@Component({
  components: {
    HelloWorld,
    components
  },
  computed: {
    authConfig() {
      console.log(this.$Amplify);
      return {};
    }
  },
  methods: {
    async logout() {
      console.log("logging out!");
      const logoutStatus = await await Auth.signOut();
      console.log("result: ", logoutStatus);
      return logoutStatus;
    }
  },
  created: function() {
    AmplifyEventBus.$on("authState", (info: any) => {
      console.log(
        `Here is the auth event that was just emitted by an Amplify component: ${info}`
      );
    });
  }
})
export default class Home extends Vue {}
</script>
