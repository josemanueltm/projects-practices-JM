<script setup>
import { defineEmits } from 'vue'
import { defineProps } from 'vue'

const emit = defineEmits(['titleClicked', 'deleteClicked'])

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

function onTitleClicked() {
  emit('titleClicked', props.task)
}

function onTrashBtnClicked() {
  emit('deleteClicked', props.task)
}
</script>

<template>
  <li class="task-item" :class="{ completed: props.task.done }">
    <span class="task-item-title" @click="onTitleClicked">{{ props.task.title }}</span>
    <button class="delete-task-btn" @click="onTrashBtnClicked">
      <i class="fa-solid fa-trash"></i>
    </button>
  </li>
</template>