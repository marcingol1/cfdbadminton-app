<template>
  <div class="server-form">
    <h1>{{ title }}</h1>
    <button @click="addServer">Add new server</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapMutations } from "vuex";

@Component({
  methods: {
    ...mapMutations(["addServer"])
  }
})
export default class ServerForm extends Vue {
  @Prop() private title!: string;
}
</script>

