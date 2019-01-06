<template>
  <div class="server-list">
    <transition-group name="list-complete" tag="p">
      <span
        v-for="(item, index) in items"
        v-bind:key="item.title"
        class="list-complete-item"
        @click="removeServer(index)"
      >{{ item.title }}</span>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapMutations } from "vuex";

interface ListItem {
  title: string;
}

@Component({
  computed: {
    items() {
      return this.$store.state.server.list;
    }
  },
  methods: {
    ...mapMutations(["removeServer"])
  }
})
export default class ServerList extends Vue {
  // @Prop() private items!: ListItem[];
}
</script>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>


