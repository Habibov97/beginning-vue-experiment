<script setup>
import { ref } from 'vue';
const year = ref(new Date().getFullYear());
</script>

<template>
  <footer>copywrite {{ year }}</footer>
</template>

<style scoped>
footer {
  position: absolute;
  color: blue;
  bottom: 0;
  padding-bottom: 2rem;
  text-align: center;
  width: 100%;
  font-size: 2rem;
}
</style>
