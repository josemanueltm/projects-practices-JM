<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isDarkMode = ref(false)
const active = ref('nav.home')

const links = [
  { name: 'nav.home', href: '#inicio', icon: 'fas fa-home' },
  { name: 'nav.about', href: '#about', icon: 'fas fa-flask' },
  { name: 'nav.skills', href: '#tech', icon: 'fas fa-sitemap' },
  { name: 'nav.projects', href: '#projects', icon: 'fas fa-diagram-project' },
  { name: 'nav.contact', href: '#contact', icon: 'fas fa-file-alt' },
]


function setActive(linkName) {
  active.value = linkName
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value)
  document.body.classList.toggle('dark-mode', isDarkMode.value)
}

function changeLang(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode === 'true') {
    isDarkMode.value = true
    document.body.classList.add('dark-mode')
  }

  const savedLang = localStorage.getItem('lang')
  if (savedLang) {
    locale.value = savedLang
  }
})
</script>


<template>
  <header>
    <nav class="navbar">
      <h1 class="logo-name"></h1>
      <ul class="nav-links">
        <li v-for="link in links" :key="link.name">
          <a :href="link.href" :class="{ active: active === link.name }" @click.prvent="setActive(link.name)">
            <i :class="link.icon"></i>
            {{ $t(link.name) }}
          </a>
        </li>
      </ul>
      <div class="controls">
        <button class="dark-mode-btn" @click="toggleDarkMode">
          <p>{{ isDarkMode ? '🌙' : '☀️' }}</p>
        </button>

        <div class="language-switcher">
          <button @click="changeLang('es')" class="lang-btn">
            <img src="/flags/es.png" alt="Español" />
            Español
          </button>
          <button @click="changeLang('en')" class="lang-btn">
            <img src="/flags/en.png" alt="English" />
            English
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>



<style scoped>
.language-switcher {
  display: flex;
  gap: 10px;
}

.lang-btn {
  font-size: 15px;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #6b21a8, #9333ea);
  padding: 0.6rem 0.4rem;
  margin: 5px;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  gap: 0.1rem;
  border: none;
}

.lang-btn img {
  width: 20px;
  height: 15px;
  margin-right: 5px;
}
</style>