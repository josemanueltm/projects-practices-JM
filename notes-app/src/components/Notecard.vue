<script setup>
defineProps({
  note: Object
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
      <button @click="$emit('edit', note)">✏️</button>
      <button @click="$emit('delete', note.id)">🗑️</button>
    </div>
  </div>
</template>

<style scoped>
.note-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  width: 250px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.tags {
  margin-top: 0.5rem;
}

.tag {
  background-color: #eee;
  border-radius: 4px;
  padding: 2px 6px;
  margin-right: 4px;
  font-size: 0.8rem;
}

.actions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>