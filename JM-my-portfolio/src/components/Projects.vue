<template>
  <section id="projects">
    <h3 class="title-project">{{ $t('projects.titles') }}</h3>
    <div class="projects-container">
      <!-- Card 1-->
      <div class="project-card">
        <h4 class="project-title">To-Do-List</h4>
        <img src="/public/img/To-do-list.png" alt="Vista Previa de To-Do-List" class="project-image">
        <p class="project-description"> Aplicación web desarrollada con Vue.js y Node.js para gestionar tareas en tiempo
          real.</p>
        <div class="project-links">
          <a href="https://github.com/josemanueltm/projects-practices-JM/tree/main/JM-TodoList" target="_blank"
            aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://jm-todolist.vercel.app/" target="_blank" aria-label="Demo en Vercel">
            <p class="vercel-demo">Demo</p>
          </a>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="project-card">
        <h4 class="project-title">Weather-app</h4>
        <img src="/public/img/weather.png" alt="Vista Previa de Weather APP" class="project-image">
        <p class="project-description"> Aplicación web desarrollada con Vue.js y Node.js para saber el tiempo
          de tu localidad</p>
        <div class="project-links">
          <a href="https://mi-primer-repo-five.vercel.app/" target="_blank" aria-label="Demo en Vercel">
            <p class="vercel-demo">Demo</p>
          </a>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="project-card">
        <h4 class="project-title">Notes-App</h4>
        <img src="/public/img/weather.png" alt="Vista Previa de Weather APP" class="project-image">
        <p class="project-description"> Aplicación web desarrollada con Vue.js Router y Node.js para escribir notas</p>
        <div class="project-links">
          <a href="https://github.com/josemanueltm/projects-practices-JM/tree/main/notes-app" target="_blank"
            aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://notes-app-sigma-neon.vercel.app/" target="_blank" aria-label="Demo en Vercel">
            <p class="vercel-demo">Demo</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
