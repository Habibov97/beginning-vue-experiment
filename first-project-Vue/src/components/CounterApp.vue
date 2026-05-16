<template>
  <div class="btn-container">
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
import { useCounter } from '@/composibles/useCounter';

const { count, increment, decrement } = useCounter();
</script>

<style scoped>
.btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;
}

button {
  padding: 10px 20px;
}

p {
  font-size: 22px;
}
</style>
