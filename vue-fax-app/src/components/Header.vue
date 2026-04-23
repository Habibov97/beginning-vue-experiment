<script setup>
import { ref } from 'vue';
const headerContent = ref('Quote generator');
const href = ref('https://www.google.com');
headerContent.value = 'Programming Quotes';
</script>

<template>
  <header>
    <h1>
      <a :href target="_blank" rel="noopener"> {{ headerContent }}</a>
    </h1>
  </header>
</template>

<style scoped>
header {
  margin: 0 auto;
  margin-bottom: 3rem;
}

h1 {
  text-align: center;
  font-size: 4rem;
  color: #f7f7f7;
}

a {
  color: #f7f7f7;
}
</style>
