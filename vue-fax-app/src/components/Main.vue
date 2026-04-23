<script setup>
import { ref } from 'vue';

const quote = ref('"First, solve the problem. Then, write the code"');
const author = ref('John Johnson');
const buttonContent = ref('Another!');
const shareButtonContent = ref('Share');
const href = ref('https://www.google.com');
const isBtnDisabled = ref(true);

quote.value = '"The best way to predict the future is to create it."';
author.value = 'James Anderson';
</script>

<template>
  <main class="box">
    <h2>{{ quote }}</h2>
    <a :href
      ><span>- {{ author }}</span></a
    >
    <section class="btns">
      <button :disabled="isBtnDisabled">{{ buttonContent }}</button>
      <button :disabled="isBtnDisabled">{{ shareButtonContent }}</button>
    </section>
  </main>
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
  padding: 3rem;
}

.box h2 {
  color: #333;
  font-style: italic;
  font-size: 5rem;
  text-align: left;
  margin-bottom: 1rem;
}

.box a {
  font-size: 2rem;
  color: #96d496;
  text-align: right;
  margin-bottom: 6rem;
}

.btns {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.btns button:first-child {
  flex: 1;
}

button {
  padding: 10px 20px;
  background-color: #406473;
  border-top-right-radius: 9px;
  border-bottom-left-radius: 9px;
  border: none;
  font-size: 2.5rem;
  color: #f7f7f7;
  outline: none;
}

button:disabled {
  background-color: rgba(128, 128, 128, 0.6);
  cursor: not-allowed;
}
</style>
