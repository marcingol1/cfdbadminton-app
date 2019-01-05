<template>
  <div class="server-form">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ServerForm extends Vue {
  @Prop() private title!: string;
}
</script>

