<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import StylesExperiment from './components/StylesExperiment.vue';
import Events from './components/Events.vue';
import Form from './components/Form.vue';
import PassingProps from './components/PassingProps.vue';
import { reactive, ref } from 'vue';
import AddContact from './components/AddContact.vue';
import CounterApp from './components/CounterApp.vue';

const ownerName = ref('mastery@mail.ru');

const contacts = reactive([
  {
    name: 'Najaf',
    phone: 121212443,
    ownerName: ownerName,
    isFavorite: false,
  },
  {
    name: 'Anders',
    phone: 65212442443,
    ownerName: ownerName,
    isFavorite: true,
  },
  {
    name: 'James',
    phone: 2451212443,
    ownerName: ownerName,
    isFavorite: false,
  },
]);

function onUpdateFavorite(isFavoriteFromChildComponent) {
  return !isFavoriteFromChildComponent;
}

function onAddContact(contact) {
  contact.ownerName = ownerName.value;
  contact.isFavorite = false;
  contacts.push(contact);
}
</script>

<template>
  <!-- <div class="container">
    <div class="header-container">
      <input type="text" v-model="ownerName" />
      <div v-for="contact in contacts" :key="contact.name">
        <PassingProps
          :name="contact.name"
          :phone="contact.phone"
          :ownername="contact.ownerName"
          :isFavorite="contact.isFavorite"
          @update-favorite="contact.isFavorite = onUpdateFavorite($event)"
        />
      </div>
    </div>

    <AddContact @add-contact="onAddContact($event)" />
  </div> -->

  <CounterApp />
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
  gap: 30px;
}

input {
  padding: 10px 5px;
}
</style>
