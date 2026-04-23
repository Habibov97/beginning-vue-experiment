<script setup>
import { ref } from 'vue';
const factsArray = [
  {
    property: "I'm Lightweight",
    description: "I am incredibly small and fast! My core library is only around 30KB, so I won't slow you down.",
  },
  {
    property: "I'm Approachable",
    description:
      'Easy to learn and use, even for beginners. I have a gentle learning curve, clear documentation, and a supportive community.',
  },
  {
    property: "I'm Versatile",
    description:
      "I can handle everything from simple interactive elements to complex single-page applications. I'm great for small projects and large-scale applications alike.",
  },
];

const arrOfFacts = ref(factsArray);
</script>

<template>
  <main>
    <section v-for="facts in arrOfFacts" v-bind:key="facts.property"">
      <h2><span class="highlight">{{facts.property}}</span></h2>
      <p>{{ facts.description }}</p>
    </section>

  </main>
</template>

<style scoped>
main {
  margin-top: 15px;
}

section {
  margin-top: 25px;
}

h2 {
  font-size: 1.3rem;
  color: #34495e;
  margin-bottom: 3px;
}

p {
  font-size: 0.9rem;
  color: #555;
}
</style>
