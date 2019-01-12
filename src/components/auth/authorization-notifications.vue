<template></template>

<script lang="ts">
import { Component, Vue } from "vue-propert-decorator";

@Component({
  computed: {
    isLogged() {
      console.log(this.$Amplify);
      return this.$Amplify;
    }
  }
})
export default class AuthorizationNotifications extends Vue {}
</script>
