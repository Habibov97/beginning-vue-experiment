<script setup>
import { ref, reactive } from 'vue';

const contact = reactive({
  name: '',
  phone: '',
  email: '',
});

const emit = defineEmits(['addContact']);

function addContact() {
  contact.email = '';
  contact.name = '';
  contact.phone = '';
  emit('addContact', {
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
  });
}
</script>

<template>
  <div></div>
  <form @submit.prevent="addContact">
    <div>
      <input type="text" placeholder="Name" v-model="contact.name" />
    </div>
    <div>
      <input type="text" placeholder="Email" v-model="contact.email" />
    </div>
    <div>
      <input type="text" placeholder="Phone" v-model.number="contact.phone" />
    </div>
    <div>
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<style scoped></style>
