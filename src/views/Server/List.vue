<template>
  <div class="list">
    <button>Add new server</button>
    <ServerForm title="Hello world"/>
    <ul>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ServerForm from "@/components/ServerForm.vue";

@Component({
  components: { ServerForm }
})
export default class List extends Vue {}
</script>

