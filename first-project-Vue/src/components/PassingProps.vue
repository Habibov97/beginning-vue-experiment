<script setup>
import { ref } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
  email: { type: String, required: false, default: '-n/a-' },
  phone: Number,
  ownername: String,
  isFavorite: Boolean,
});

const emit = defineEmits(['update-favorite']);

function toggleFavorite() {
  emit('update-favorite', props.isFavorite);
}
</script>

<template>
  <div class="box">
    <p>{{ name }}</p>
    <p>{{ phone }}</p>
    <p>{{ email }}</p>
    <p v-if="ownername !== ''">{{ ownername }}</p>

    <button @click="toggleFavorite" :class="['favorite', isFavorite ? 'lightcoral' : 'red']">
      Isfavorite: {{ isFavorite ? 'it is favorite' : 'not favorite' }}
    </button>
  </div>
</template>

<style scoped>
h2 {
  font-size: 54px;
  margin-bottom: 10px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-direction: column;
  padding: 20px;
  background-color: lightblue;
  border-radius: 9px;
  width: 300px;
}

p {
  font-size: 20px;
}

.favorite {
  padding: 20px;
  cursor: pointer;
  border-radius: 3px;
  font-size: 20px;
}

.lightcoral {
  background-color: rgb(204, 96, 204);
}

.red {
  background-color: orange;
}
</style>
