<script setup>
import { computed, ref } from 'vue'
import Notecard from '../components/Notecard.vue'
import NoteForm from '../components/NoteForm.vue'
import { useNotesStore } from '../store/notes'

const store = useNotesStore()

const searchQuery = ref('')
const selectedTag = ref('')
const noteToEdit = ref(null)

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


function toggleFavorite(id) {
  store.toggleFavorite(id)
}

function editNote(note) {
  noteToEdit.value = note
}

function clearEdit() {
  noteToEdit.value = null
}
</script>

<template>
  <div class="filters">
    <input v-model="searchQuery" type="text" placeholder="Buscar título o contenido..." />
    <div class="tag-buttons">
      <select v-model="selectedTag">
        <option value="">Todas las etiquetas</option>
        <option v-for="tag in store.tags" :key="tag" :value="tag">
          {{ tag }}
        </option>
      </select>
    </div>
  </div>

  <div class="note-form-wrapper">
    <NoteForm :noteToEdit="noteToEdit" @edited="clearEdit" />
  </div>

  <div class="note-grid">
    <Notecard v-for="note in filteredNotes" :key="note.id" :note="note" :canEdit="true" @delete="deleteNote"
      @edit="editNote" @toggle-favorite="toggleFavorite" />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
}

.note-form-wrapper {
  margin-bottom: 6rem;
}

.filters input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 80%;
}

.tag-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag-buttons select {
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background-color: #4caf50;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
  color: rgb(247, 247, 247);
  font-weight: bold;
}

.note-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
}
</style>