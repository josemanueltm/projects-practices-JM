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
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #00c29a;
  border-radius: 10px;
  flex-wrap: wrap;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav a.router-link-active {
  color: white;
  border-bottom: 2px solid white;
}
</style>