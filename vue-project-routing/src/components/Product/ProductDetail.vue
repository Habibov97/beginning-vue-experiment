<template>
  <div><h1 class="text-[4rem]">Product Detail</h1></div>
  <p v-if="id" class="text-[2rem]">Product id: {{ id }}</p>
  <p v-else>Product is not found</p>
  <p v-if="categoryId">CategoryId:{{ categoryId }}</p>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const { id, categoryId } = route.params;
</script>
