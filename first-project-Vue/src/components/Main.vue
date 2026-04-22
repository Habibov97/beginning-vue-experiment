<script setup>
import { ref } from 'vue';
const name = ref('Rachel');
</script>

<template>
  <main>
    <h1>Hello {{ name }}</h1>
    <p>
      I'm about to learns
      <a href="https://vuejs.org/guide/quick-start.html" target="_blank" rel="noopener">Vue.js</a>!
    </p>
  </main>
</template>

<style scoped>
h1 {
  font-size: 5rem;
  color: #333;
}

p {
  font-size: 2rem;
  text-align: center;
}
</style>
