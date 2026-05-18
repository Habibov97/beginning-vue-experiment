<template>
  <div>
    <h1 class="text-[3rem]">Product List</h1>
    <p>Here is list of products</p>
    <ul v-for="product in products">
      <li :key="product.id">
        <router-link :to="{ name: 'product-detail', params: { id: product.id, categoryId: 77 } }">
          {{ product.name }}
        </router-link>
      </li>
    </ul>
    <button @click="$router.go(-1)">go back</button>
  </div>
</template>
<script setup>
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];
</script>
