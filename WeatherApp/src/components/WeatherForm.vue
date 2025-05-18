<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search-weather'])
const city = ref('')

function handleSubmit() {
  emit('search-weather', city.value)
  city.value = ''
}

</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input v-model="city" type="text" placeholder="Ej. Madrid" required />
    <button type="submit">Buscar</button>
  </form>

</template>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

input[type="text"] {
  padding: 0.5rem;
  border-radius: 8px 0 0 8px;
  border: 1px solid #ccc;
  flex: 1;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #0077ff;
  color: white;
  border-radius: 0 8px 8px 0;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #005fcc;
}

@media (max-width: 500px) {

  .form {
    flex-direction: column;
  }

  .form input,
  .form button {
    width: 100%;
    border-radius: 8px;
    margin: 0.25rem 0;
  }
}
</style>
