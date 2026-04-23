<script setup>
import { ref } from 'vue';
const headerContent = ref('Quote generator');
</script>

<template>
  <header>
    <h1>
      {{ headerContent }}
    </h1>
  </header>
</template>

<style scoped>
header {
  margin: 0 auto;
  margin-bottom: 3rem;
}

header h1 {
  text-align: center;
  font-size: 4rem;
  color: #f7f7f7;
}
</style>
