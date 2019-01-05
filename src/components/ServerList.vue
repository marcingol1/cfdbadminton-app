<template>
  <div class="server-list">
    <ul>
      <li v-for="(item, index) in items" :key="`${item.title} + ${index}`">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface ListItem {
  title: string;
}

@Component({
  computed: {
    items() {
      return this.$store.state.server.list;
    }
  }
})
export default class ServerList extends Vue {
  // @Prop() private items!: ListItem[];
}
</script>

<style lang="scss" scoped>
.server-list {
  display: flex;
  justify-content: center;
  ul {
    list-style-type: none;
    padding: 0;
  }
}
</style>


