<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">Todas</RouterLink>
    <RouterLink to="/favoritas">Favoritas</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #eee;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>