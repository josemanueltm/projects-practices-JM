<script setup>
import { ref, watch } from 'vue'
import { useNotesStore } from '../store/notes'

const store = useNotesStore()

const props = defineProps({
  noteToEdit: Object
})

const emit = defineEmits(['edited'])

const title = ref('')
const content = ref('')
const tagsInput = ref('')
const editingId = ref(null)

watch(() => props.noteToEdit, (newNote) => {
  if (newNote) {
    title.value = newNote.title
    content.value = newNote.content
    tagsInput.value = newNote.tags.join(',')
    editingId.value = newNote.id
  }
},
  { immediate: true }
)

function submitNote() {
  const tags = tagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '')

  const note = {
    id: editingId.value || Date.now(),
    title: title.value,
    content: content.value,
    tags,
    favorite: props.noteToEdit ? props.noteToEdit.favorite : false
  }

  if (editingId.value) {
    store.updateNote(note)
    emit('edited')
  } else {
    store.addNote(note)
  }

  title.value = ''
  content.value = ''
  tagsInput.value = ''
  editingId.value = null
}

function cancelEdit() {
  emit('edited', null)
  title.value = ''
  content.value = ''
  tagsInput.value = ''
  editingId.value = null
}
</script>

<template>
  <div class="form-card">
    <form @submit.prevent="submitNote">
      <input v-model="title" type="text" placeholder="Título" required />
      <textarea v-model="content" placeholder="Contenido..." rows="4" required></textarea>
      <input v-model="tagsInput" type="text" placeholder="Etiquetas (separadas por coma)" required />
      <div class="buttons">
        <button type="submit">{{ editingId ? 'Guardar Cambios' : 'Agregar Nota' }}</button>
        <button type="button" @click="cancelEdit" v-if="editingId">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  margin: 1rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: left;
  border: 2px solid #4caf50;
  box-sizing: border-box;
}

h3 {
  margin-bottom: 1rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
}

input,
textarea {
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.buttons {
  display: flex;
  gap: 1rem;
}

button[type='submit'] {
  background-color: #4caf50;
  color: white;
  border: none;
}

button[type='button'] {
  background-color: #f44336;
  color: white;
  border: none;
}

button {
  padding: 0.6rem 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}
</style>