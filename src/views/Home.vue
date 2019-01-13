<template>
  <div>
    <div class="home">
      <img alt="Crazy Badminton Logo" src="../assets/cfdb.svg">
      <HelloWorld msg="Welcome to Crazy Freaking Badminton"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
