<template>
  <div class="list">
    <ServerForm title="Create new server here"/>
    <ServerList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ServerForm from "@/components/ServerForm.vue";
import ServerList from "@/components/ServerList.vue";
import store from "@/store";

@Component({
  components: { ServerForm, ServerList }
})
export default class List extends Vue {}
</script>

