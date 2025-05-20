<script setup>
import Notecard from './Notecard.vue'
import { useNotesStore } from '@/store/notes.js'

const store = useNotesStore
const notes = store.notes

function deleteNote(id) {
  store.deleteNote(id)
}

function editNote(note) {
  console.log('editar Nota:', note)
}
</script>

<template>
  <div class="note-grid">
    <Notecard v-for="note in notes" :key="note.id" :note="note" @delete="deleteNote" @edit="editNote" />
  </div>
</template>