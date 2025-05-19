import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: [],
    tags: [],
  }),
  actions: {
    addNote(note) {
      this.notes.push(note)
      note.tags.forEach(tag => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag)
        }
      })
    }
  },

  deleteNote(id) {
    this.notes = this.notes.filter(note => note.id !== id)
  },

  updateNote(updateNote) {

  }







})