<template>
  <section id="projects">
    <h3 class="title-project">{{ $t('projects.titles') }}</h3>
    <div class="projects-container">
      <div class="project-card">
        <h4 class="project-title">{{ $t('projects.title') }}</h4>
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
    </div>
  </section>
</template>