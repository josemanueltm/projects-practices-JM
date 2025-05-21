import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
  state: () => ({
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    tags: JSON.parse(localStorage.getItem('tags')) || [],
  }),

  actions: {
    saveToStorage() {
      localStorage.setItem('notes', JSON.stringify(this.notes))
      localStorage.setItem('tags', JSON.stringify(this.tags))
    },

    addNote(note) {
      this.notes.push(note)
      note.tags.forEach(tag => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag)
        }
      })
      this.saveToStorage()
    },

    deleteNote(id) {
      this.notes = this.notes.filter(note => note.id !== id)
      this.saveToStorage()
    },

    updateNote(updatedNote) {
      const index = this.notes.findIndex(note => note.id === updatedNote.id)
      if (index !== -1) {
        this.notes[index] = updatedNote
        this.saveToStorage()
      }
    },

    toggleFavorite(id) {
      const note = this.notes.find(note => note.id === id)
      if (note) {
        note.favorite = !note.favorite
        this.saveToStorage()
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
    },
    favoriteNotes: (state) => {
      return state.notes.filter(note => note.favorite)
    }
  }
})
