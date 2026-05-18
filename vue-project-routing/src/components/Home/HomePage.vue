<template>
  <h1 class="text-[4rem]">HomePage</h1>
  <button @click="goToContact">Push to redirect contact page</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function goToContact() {
  router.push({ name: 'contact' });
}
</script>
