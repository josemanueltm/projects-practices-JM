<script setup>
import CreateTask from './components/CreateTask.vue'
import AddTask from './components/AddTask.vue';



</script>

<template>
  <div class="todolist-container">
    <h1 class="title">Mis tareas</h1>
    <CreateTaskForm ref="taskFormRef" v-model="taskName" @submitted="addTask" />
    <div v-show="message" class="message-result">
      {{ message }}
    </div>
    <div v-if="hasTodos" class="todos-stats">
      <div>{{ todosCount }} tareas</div>
      <div class="todos-by-done">
        <div class="completed">Pendientes: {{ pendingTodosCount }}</div>
        <div class="pending">Completadas: {{ doneTodosCount }}</div>
      </div>
    </div>
    <ul class="tasks-container">
      <TaskItem v-for="task in todos" :key="task.id" :task="task" @title-clicked="onTaskTitleClicked"
        @delete-clicked="onTaskDeleteClicked" />
      <template v-if="!hasTodos">
        <li class="no-items">
          No hay tareas, pulsa <button @click="focusOnInputField">aquí</button> para agregar una.
        </li>
      </template>
    </ul>
  </div>
</template>
