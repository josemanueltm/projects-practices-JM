<script setup>
import Notecard from '../components/Notecard.vue'
import { useNotesStore } from '../store/notes'
import { computed } from 'vue'

const store = useNotesStore()

const favoriteNotes = computed(() =>
  store.notes.filter(note => note.favorite)
)

function deleteNote(id) {
  store.deleteNote(id)
}

function toggleFavorite(id) {
  store.toggleFavorite(id)
}
</script>


<template>
  <div v-if="favoriteNotes.length" class="note-grid">
    <Notecard v-for="note in favoriteNotes" :key="note.id" :note="note" @delete="deleteNote"
      @toggle-favorite="toggleFavorite" />
  </div>
  <p v-else class="empty-message"> No hay notas en favoritos</p>
</template>

<style scoped>
.note-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
}

.empty-message {
  font-size: 1.2rem;
  color: #888;
  margin-top: 2rem;
  padding: 1rem;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;

}
</style>