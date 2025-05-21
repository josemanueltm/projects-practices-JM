<script setup>
import Notecard from '../components/Notecard.vue'
import { useNotesStore } from '../store/notes'

const store = useNotesStore()
const favoriteNotes = store.favoriteNotes

function deleteNote(id) {
  store.deleteNote(id)
}

function toggleFavorite(id) {
  store.toggleFavorite(id)
}

function editNote(note) {
  console.log('Editar nota', note)
}
</script>

<template>
  <div class="note-grid">
    <Notecard v-for="note in favoriteNotes" :key="note.id" :note="note" @delete="deleteNote" @edit="editNote"
      @toggle-favorite="toggleFavorite" />
  </div>
</template>

<style scoped>
.note-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}
</style>