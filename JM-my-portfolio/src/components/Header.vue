<script>
export default {
  name: 'Navbar',
  data() {
    return {
      active: 'Inicio',
      links: [
        { name: 'Inicio', href: '#inicio', icon: 'fas fa-home' },
        { name: 'About', href: '#about', icon: 'fas fa-flask' },
        { name: 'Habilidades', href: '#tech', icon: 'fas fa-sitemap' },
        { name: 'Proyectos', href: '#projects', icon: 'fas fa-diagram-project' },
        { name: 'Contacto', href: '#contact', icon: 'fas fa-file-alt' },
      ],
    }
  },
  methods: {
    setActive(linkName) {
      this.active = linkName
    },
  },
}
</script>


<template>
  <header>
    <nav class="navbar">
      <h1 class="logo-name">José Manuel Torres Mena</h1>
      <ul class="nav-links">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" :class="{ active: active === link.name }" @click.provent="setActive(link.name)">
            <i :class="link.icon"></i>
            {{ link.name }}
          </a>
        </li>
      </ul>
      <div class="controls">
        <button class="dark-mode-btn">
          🌙
        </button>
        <div class="language-switch">
          <span>🇪🇸 ES</span>
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </nav>
  </header>
</template>