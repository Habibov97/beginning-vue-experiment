<script setup>
import { computed, ref } from 'vue';

const name = ref('Ben');
const age = ref(29);
const counter = ref(0);
const firstName = ref('Najaf');
const lastName = ref('Ahmed');

const getFullname = computed((previous) => {
  console.log(firstName.value);
  if (previous == 'Najaf') {
    console.log('Previous value was ' + previous);
  }

  return firstName.value;
});

function click(message, event) {
  console.log(event);
  alert(message);
}
</script>

<template>
  <div>
    <button v-on:click.stop="click('button clicked', $event)">events</button><br /><br />
    <input type="text" v-model.lazy="name" /> <br /><br />
    <input type="number" v-model.number="age" /> <br /><br />
    <p>{{ name }} - {{ age }}</p>

    <p>{{ counter }}</p>
    <p>{{ getFullname }}</p>
    <button v-on:click="counter += 1">Increment</button>
    <button v-on:click="counter -= 1 ? counter > 0 : counter">Descrement</button>
    <br /><br />
    <input type="text" v-model.lazy="firstName" />
  </div>
</template>

<style scoped>
p {
  font-size: 20px;
}
</style>
