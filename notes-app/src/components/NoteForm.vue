<script setup>
import { ref } from 'vue'
import { useNotesStore } from '../store/notes'

const store = useNotesStore()

const title = ref('')
const content = ref('')
const tagsInput = ref('')

function submitNote() {
  const tags = tagsInput.value.split('').map(tag => tag.trim()).filter(tag => tag !== '')

  sote.addNote({
    id: Date.now(),
    title: title.value,
    content: content.value,
    tags
  })

  title.value = ''
  content.value = ''
  tagsInput.value = ''
}
</script>

<template>
  <form @submit.prevent="submitNote" class="note-form">
    <input v-model="title" type="text" placeholder="Título" required />
    <textarea v-model="content" placeholder="Contenido" required></textarea>
    <input v-model="tagsInput" type="text" placeholder="Etiquetas (separadas por coma)" required />
    <button type="submit">Agregar Nota</button>
  </form>
</template>

<style scoped>
.note-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
  margin: 1rem;
}

.note-form input,
.note-form textarea {
  padding: 0.5rem;
  border: 1px solid #aaa;
  border-radius: 6px;
}

.note-form button {
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
</style>