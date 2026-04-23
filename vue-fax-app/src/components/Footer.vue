<script setup>
import { ref } from 'vue';
const copywrite = ref(new Date().getFullYear());
const href = ref('https://github.com/bradtraversy');
copywrite.value = copywrite.value + 1;
</script>

<template>
  <footer>
    <p>
      Created by <a :href target="_blank" rel="noopener noreferrer">Brad Traversy</a> | Copyright &copy;
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
