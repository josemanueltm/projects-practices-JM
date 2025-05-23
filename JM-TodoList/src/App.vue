<script setup>
import { v4 as uuidv4 } from 'uuid'
import { reactive, ref, computed, watch } from 'vue'
import AddTask from './components/AddTask.vue'
import CreateTask from './components/CreateTask.vue'



const STORAGE_KEY = 'todos-usuario'
const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []


const todos = reactive(storedTodos.length > 0 ? storedTodos : [
  { id: uuidv4(), title: 'Actualizar CV', done: false },
  { id: uuidv4(), title: 'Trabajar', done: false }
])
const message = ref(null)
const taskName = ref('')
const taskRef = ref()
const taskFormRef = ref()

const todosCount = computed(() => {
  return todos.length
})

const hasTodos = computed(() => {
  return todosCount.value > 0
})

const pendingTodosCount = computed(() => {
  return todos.filter(item => item.done === false).length
})
const doneTodosCount = computed(() => {
  return todos.filter(item => item.done === true).length
})

function toggleTaskDone(id) {
  if (!id) return
  const foundIndex = todos.findIndex(item => item.id === id)

  if (foundIndex <= -1) return

  todos[foundIndex].done = !todos[foundIndex].done
  console.info(todos[foundIndex].done)
}

function addTask() {
  if (!taskName.value) {
    console.warn('La tarea no tiene nombre')
    return
  }

  todos.splice(0, 0, { id: uuidv4(), title: taskName.value, done: false })
  taskName.value = ""
  taskRef.value.focus()
}

function removeTask(id) {
  if (!id) return
  const foundIndex = todos.findIndex(item => item.id === id)

  if (foundIndex <= -1) return

  todos.splice(foundIndex, 1)
}

function focusOnInputField() {
  taskFormRef.value?.focusInput()
}

watch(
  todos, (newTodos) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
  },
  { deep: true }
)

watch(todosCount, (newValue, oldValue) => {
  if (newValue > oldValue) {
    message.value = "Tarea agregada correctamente."
    clearMessage()
  }
  if (newValue < oldValue) {
    message.value = "Tarea eliminada correctamente."
    clearMessage()
  }
})

function onTaskTitleClicked(task) {
  toggleTaskDone(task?.id)
}

function onTaskDeleteClicked(task) {
  removeTask(task?.id)
}

function clearMessage() {
  setTimeout(() => {
    message.value = ''
  }, 3000)
}


</script>

<template>
  <div class="todolist-container">
    <h1 class="title">Mis tareas</h1>
    <CreateTask ref="taskFormRef" v-model="taskName" @submitted="addTask" />
    <div v-if="message" class="message-result">
      {{ message }}
    </div>
    <div v-if="hasTodos" class="todos-stats">
      <div class=task-number>{{ todosCount }} tareas</div>
      <div class="todos-by-done">
        <div class="completed">Pendientes: {{ pendingTodosCount }}</div>
        <div class="pending">Completadas: {{ doneTodosCount }}</div>
      </div>
    </div>
    <ul class="tasks-container">
      <AddTask v-for="task in todos" :key="task.id" :task="task" @title-clicked="onTaskTitleClicked"
        @delete-clicked="onTaskDeleteClicked" />
      <template v-if="!hasTodos">
        <li class="no-items">
          No hay tareas, pulsa <button class="button-no-items" @click="focusOnInputField">aquí</button> para agregar
          una.
        </li>
      </template>
    </ul>
  </div>
</template>
