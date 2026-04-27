<template>
  <div>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        <p>Email</p>
        <input v-model.trim="formObj.email" type="text" />
      </div>
      <br /><br />
      <div>
        <p>Name</p>
        <input v-model="formObj.name" type="text" />
      </div>
      <br /><br />
      <div>
        <p>Phone</p>
        <input v-model.number="formObj.phone" type="text" />
      </div>
      <br /><br />
      <div>
        <p>Gender</p>
        <input v-model="formObj.gender" type="text" />
      </div>
      <br /><br />
      <div>
        <p>Subscribe</p>
        <input v-model="formObj.subscribe" type="checkbox" />
      </div>
      <br /><br />
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
const formObj = reactive({
  email: '',
  name: '',
  phone: '',
  subscribe: false,
  gender: '',
});

function handleSubmit() {
  console.log(formObj);
}
</script>
<style scope></style>
