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
    },

    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
    },

    updateNote(updatedNote) {
      const index = this.notes.findIndex(note => note.id === updatedNote.id)
      if (index !== -1) {
        this.notes[index] = updatedNote
      }
    },
  },

  getters: {
    getNotesByTag: (state) => (tag) => {
      return state.notes.filter(note => note.tags.includes(tag))
    },

    searchNotes: (state) => (query) => {
      return state.notes.filter(note =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
      )
    }
  }
})
