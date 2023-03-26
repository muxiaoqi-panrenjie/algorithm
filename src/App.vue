<script setup lang="ts"></script>

<template>
  <div>111</div>
</template>
<script>
import { first } from "./components/linkList/index";
first.append("第一个节点");
first.append("第二个节点");
first.append("第三个节点");
first.append("第四个节点");
first.traverse();
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
