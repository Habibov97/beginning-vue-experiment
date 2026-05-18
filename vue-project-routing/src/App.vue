<script setup>
import Footer from './components/Layout/Footer.vue';
import Header from './components/Layout/Header.vue';
import ProductList from './components/Product/ProductList.vue';
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
