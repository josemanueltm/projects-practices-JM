<script setup>
const props = defineProps({
  note: Object,
  canEdit: {
    type: Boolean,
    default: false
  }
})
defineEmits(['edit', 'delete', 'toggle-favorite'])
</script>

<template>
  <div class="note-card">
    <h2>{{ note.title }}</h2>
    <p>{{ note.content }}</p>
    <div class="actions">
      <button @click="$emit('toggle-favorite', note.id)">
        {{ note.favorite ? '⭐' : '🖤' }}
      </button>
      <button v-if="canEdit" @click="$emit('edit', note)">✏️</button>
      <button @click="$emit('delete', note.id)">🗑️</button>
    </div>
  </div>
</template>

<style scoped>
.note-card {
  width: 280px;
  padding: 1rem;
  border-radius: 16px;
  color: rgb(53, 53, 53);
  box-shadow: 0 0px 12px #4caf50;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.note-card h2 {
  text-align: center;
  color: #4caf50;
}

.note-card p {
  text-align: center;
}

.note-card:hover {
  transform: translateY(-5px);
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.actions button {
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
}

.actions button:hover {
  color: rgba(0, 0, 0, 0.356);
  border: none;
  cursor: pointer;
}
</style>