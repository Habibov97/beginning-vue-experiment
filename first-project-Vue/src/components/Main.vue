<script setup>
import { reactive, ref } from 'vue';

const luckyNumbers = ref([1, 2, 5, 6, 8]);
const employee = ref({
  name: 'Najaf',
  age: 30,
  salary: 50000,
  hasCorporateCard: false,
  spendingLimit: 10000,
  yearsWithCompany: 5,
  projects: [
    { project: 'Green A', timeline: '2 years' },
    { project: 'Blue H', timeline: '9 month' },
    { project: 'Pink G', timeline: '3 years' },
  ],
});
</script>

<template>
  <main>
    <h1>Hello {{ employee.name }}</h1>
    <p>{{ employee.name }}</p>
    <!-- <p v-show="employee.hasCorporateCard">{{ employee.spendingLimit }}</p> -->
    <p v-if="employee.hasCorporateCard">{{ employee.spendingLimit }}</p>
    <p v-else-if="employee.salary > 25000 && employee.yearsWithCompany > 1">Employee is eligable for card</p>
    <p v-else>Employee is not eligable for card</p>

    <p v-for="(luckyNumber, index) in luckyNumbers">{{ index + 1 }} Lucky number is: {{ luckyNumber }}</p>

    <p v-for="(projects, index) in employee.projects">
      {{ index + 1 }} Project names: {{ projects.project }} and timeline: {{ projects.timeline }}
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
