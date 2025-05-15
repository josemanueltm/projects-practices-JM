<script setup>
import { onMounted } from 'vue'
import { defineEmits } from 'vue'
import { defineProps } from 'vue'
import { ref } from 'vue'

const emit = defineEmits(['submitted'])

const model = defineModel({
  type: String,
  default: ''
})

const props = defineProps({
  taskLenMin: {
    type: Number,
    default: 3
  },
  errorSeconds: {
    type: Number,
    default: 3
  }
})
const taskRef = ref()
const validationError = ref('')

function onFormSubmit() {
  if (model.value.length < props.minTaskLen) {
    validationError.value = `El nombre de la tarea debe tener al menos ${props.taskLenMin} caracteres`
    clearValidationErrorMsg()
    return
  }
  emit('submitted', model.value)
}

function clearValidationErrorMsg() {
  setTimeout(() => {
    validationError.value = ''
  }, props.errorSeconds * 1000)
}

function focusTaskNameInput() {
  taskRef.value?.focus()
}

onMounted(() => {
  focusTaskNameInput()
})

defineExpose({
  focusInput: focusTaskNameInput
})
</script>

<template>
  <div>
    <form @submit.prevent="onFormSubmit" class="add-form-task">
      <div class="add-form-task-fild-container">
        <input ref="taskRef" name="task_name" autocomplete="off" class="task-input" type="text"
          placeholder="Intruce el nombre de la tarea" v-model.trim="model">
        <button type="submit" class="add-task-btn">Crear</button>
      </div>
      <div v-show="validationError" class="task-input-error">
        {{ validationError }}
      </div>
    </form>
  </div>
</template>