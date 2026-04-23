<script setup>
import { ref } from 'vue';

const text = ref('"First, solve the problem. Then, write the code"');
const author = ref('John Johnson');
const buttonContent = ref('Another!');
</script>

<template>
  <div class="box">
    <h2>{{ text }}</h2>
    <p>- {{ author }}</p>
    <button>{{ buttonContent }}</button>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  width: 500px;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 18px;
  background-color: #f7f7f7;
  padding: 2rem;
}

.box h2 {
  color: #333;
  font-style: italic;
  font-size: 5rem;
  text-align: left;
  margin-bottom: 1rem;
}

.box p {
  font-size: 2rem;
  color: #96d496;
  text-align: right;
  margin-bottom: 6rem;
}

.box button {
  padding: 10px 20px;
  background-color: #406473;
  border-top-right-radius: 9px;
  border-bottom-left-radius: 9px;
  border: none;
  font-size: 2.5rem;
  color: #f7f7f7;
  outline: none;
  align-self: center;
}
</style>
