<script>
import switchLang from '@/utils/switchLang'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Navbar',
  data() {
    return {
      active: 'nav.home',
      isDarkMode: false,
      links: [
        { name: 'nav.home', href: '#inicio', icon: 'fas fa-home' },
        { name: 'nav.about', href: '#about', icon: 'fas fa-flask' },
        { name: 'nav.skills', href: '#tech', icon: 'fas fa-sitemap' },
        { name: 'nav.projects', href: '#projects', icon: 'fas fa-diagram-project' },
        { name: 'nav.contact', href: '#contact', icon: 'fas fa-file-alt' },
      ],
    }
  },
  methods: {
    setActive(linkName) {
      this.active = linkName
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', this.isDarkMode)

      if (this.isDarkMode) {
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
      }
    },
    switchLang() {
      this.$i18n.locale = this.$i18n.locale === 'es' ? 'en' : 'es'
    }
  },
  mounted() {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') {
      this.isDarkMode = true
      document.body.classList.add('dark-mode')
    } else {
      this.isDarkMode = false
      document.body.classList.remove('dark-mode')
    }
  }
}

</script>


<template>
  <header>
    <nav class="navbar">
      <h1 class="logo-name"></h1>
      <ul class="nav-links">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" :class="{ active: active === link.name }" @click.provent="setActive(link.name)">
            <i :class="link.icon"></i>
            {{ $t(link.name) }}
          </a>
        </li>
      </ul>
      <div class="controls">
        <button class="dark-mode-btn" @click="toggleDarkMode">
          <p>{{ isDarkMode ? '🌙' : '☀️' }}</p>
        </button>
        <div class="language-switch">
          <img :src="currentLang === 'es' ? '/flags/es.png' : '/flags/en.png'" alt="language" class="flag-icon" />
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </nav>
  </header>
</template>