<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import StylesExperiment from './components/StylesExperiment.vue';
import Events from './components/Events.vue';
import Form from './components/Form.vue';
</script>

<template>
  <div class="container">
    <div class="header-container">
      <!-- <Header /> -->
      <!-- <Main /> -->
      <!-- <StylesExperiment /> -->
      <!-- <Events /> -->
      <Form />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.header-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
