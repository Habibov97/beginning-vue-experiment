<script setup>
import { ref } from 'vue';
const copywrite = ref(new Date().getFullYear());
</script>

<template>
  <footer>
    <p>
      Created by <a href="https://github.com/bradtraversy" target="_blank" rel="noopener noreferrer">Brad Traversy</a> |
      Copyright &copy;
      {{ copywrite }}
    </p>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
}

p {
  text-align: center;
  color: #f7f7f7;
  font-size: 2rem;
}

p a:link,
a:visited {
  text-decoration: underline;
  color: #f7f7f7;
}
</style>
