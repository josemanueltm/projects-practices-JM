<script setup>
import { computed, ref } from 'vue'
import Notecard from '../components/Notecard.vue'
import NoteForm from '../components/NoteForm.vue'
import { useNotesStore } from '../store/notes'

const store = useNotesStore

const searchQuery = ref('')
const selectedTag = ref('')

const filteredNotes = computed(() => {
  let notes = store.notes
  if (selectedTag.value) {
    notes = notes.filter(note => note.tags.includes(selectedTag.value))
  }
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    notes = notes.filter(note =>
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query)
    )
  }
  return notes
})

function deleteNote(id) {
  store.deleteNote(id)
}

function editNote(note) {
  console.log('editar Nota:', note)
}
</script>

<template>
  <div class="filters">
    <input v-model="searchQuery" type="text" placeholder="Buscar por título o contenido..." />
    <select v-model="selectedTag">
      <option value="">Todas las etiquetas</option>
      <option v-for="tag in store.tags" :key="tag" :value="tag">
        {{ tag }}
      </option>
    </select>
  </div>
  <NoteForm />
  <div class="note-grid">
    <Notecard v-for="note in filteredNotes" :key="note.id" :note="note" @delete="deleteNote" @edit="editNote" />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
}

.filters input,
.filters select {
  padding: 0.5rem;
  border: 1px solid #aaa;
  border-radius: 6px;
}

.note-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}
</style>