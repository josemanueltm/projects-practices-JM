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
  <form @submit.prevent="submitNote" class="note-form">
    <input v-model="title" type="text" placeholder="Título" required />
    <textarea v-model="content" placeholder="Contenido" required></textarea>
    <input v-model="tagsInput" type="text" placeholder="Etiquetas (separadas por coma)" required />
    <button type="submit">Agregar Nota</button>
    <button type="button" @click="cancelEdit" v-if="noteToEdit">Cancelar edición</button>
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

.note-form button:last-child {
  background-color: #f44336;
}
</style>