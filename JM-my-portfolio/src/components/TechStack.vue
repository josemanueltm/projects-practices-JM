<script setup>
import { ref, onMounted } from 'vue'

const openIndex = ref(null)
const selectedSkill = ref(null)

const toggleCategory = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const selectSkill = (skill) => {
  selectedSkill.value = skill
}

const categories = [
  {
    key: 'webDevelopment',
    name: 'webDevelopment',
    skills: [
      {
        label: 'HTML5',
        icon: 'fa-brands fa-html5',
        level: 65,
        levelLabel: 'Avanzado',
        description: 'Certificado en Desarrollo Web y Aprendido en el Título de Sistema MicroInformáticos',
        projects: [
          { name: 'Portfolio Personal', link: '#Inicio' }
        ],
        experience: 'Comencé con HTML en 2018, haciendo pequeñas paginas web.',
      },
      {
        label: 'CSS3',
        icon: 'fa-brands fa-css3-alt',
        level: 65,
        levelLabel: 'Avanzado',
        description: 'Certificado en Desarrollo Web y Aprendido en el Título de Sistema MicroInformáticos',
        projects: [
          { name: 'Portfolio Personal', link: '#Inicio' }
        ],
        experience: 'Comencé con CSS en 2018, añadiendo estilos en pequeñas paginas web.',
      },
      {
        label: 'JavaScript',
        icon: 'fa-brands fa-js',
        level: 65,
        levelLabel: 'Medio',
        description: 'Certificado en Desarrollo Web',
        projects: [
          { name: 'Portfolio Personal', link: '#Inicio' }
        ],
        experience: 'Comencé con JavaScript en 2024, programando varias API.',
      },
      {
        label: 'Vue.js',
        icon: 'fa-brands fa-vuejs',
        level: 40,
        levelLabel: 'Medio',
        description: 'Certificado en Desarrollo Web',
        projects: [
          { name: 'Portfolio Personal', link: '#Inicio' }
        ],
        experience: 'Comencé con Vue en 2024, haciendo un proyecto de juegos.',
      },
      {
        label: 'Node.js',
        icon: 'fa-brands fa-node',
        level: 40,
        levelLabel: 'Medio',
        description: 'Certificado en Desarrollo Web',
        projects: [
          { name: 'Portfolio Personal', link: '#Inicio' }
        ],
        experience: 'Comencé con Node en 2024, haciendo diferentes proyecto.',
      },
    ],
  },
  {
    key: 'frameworks',
    name: 'Frameworks y Librerías',
    skills: [
      { label: 'Vue Router', icon: 'fa-solid fa-code-branch' },
      { label: 'Axios', icon: 'fa-solid fa-code-branch' },
    ],
  },
  {
    key: 'others',
    name: 'Otros',
    skills: [
      { label: 'Git', icon: 'fa-brands fa-git-alt' },
    ],
  },
]

onMounted(() => {
  openIndex.value = 0

  if (categories[0].skills && categories[0].skills.length > 0) {
    selectedSkill.value = categories[0].skills[0]
  }
})
</script>

<<template>
  <section class="techstack-section" id="tech">
    <h3 class="tech-title">&lt; {{ $t('techstack.title') }}/&gt;</h3>
    <p class="tech-subtitle">{{ $t('techstack.subtitle') }}</p>

    <div class="techstack-wrapper">
      <div class="categories-panel">
        <div class="category" v-for="(cat, index) in categories" :key="index">
          <div class="category-header" @click="toggleCategory(index)">
            <span>{{ $t(`techstack.categories.${cat.key}`) }}</span>
            <span>{{ openIndex === index ? '▲' : '▼' }}</span>
          </div>
          <div class="category-content" v-show="openIndex === index">
            <div class="tech-item" v-for="(skill, i) in cat.skills" :key="i" @click="selectSkill(skill)"
              :class="{ active: selectedSkill?.label === skill.label }">
              <i :class="skill.icon"></i>
              <span>{{ skill.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="skill-detail-panel" v-if="selectedSkill">
        <h4 class="detail-title">
          <i :class="selectedSkill.icon"></i>
          {{ selectedSkill.label }}
        </h4>
        <p class="detail-subtitle">
          {{ $t('techstack.descriptions.' + selectedSkill.label.toLowerCase().replace('.', '').replace(/\s/g, '')) }}
        </p>
        <div v-if="selectedSkill.level" class="progress-section">
          <span class="level-label">
            {{ $t('techstack.levels.' + selectedSkill.levelLabel.toLowerCase()) }}
          </span>
          <span class="level-percent">{{ selectedSkill.level }}%</span>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: selectedSkill.level + '%' }"></div>
          </div>
        </div>

        <div class="detail-block" v-if="selectedSkill.description">
          <h5>📘 {{ $t('techstack.labels.description') }}</h5>
          <p>
            {{ $t('techstack.descriptions.' + selectedSkill.label.toLowerCase().replace('.', '').replace(/\s/g, '')) }}
          </p>
        </div>

        <div class="detail-block" v-if="selectedSkill.projects?.length">
          <h5>🔗 {{ $t('techstack.labels.relatedProjects') }}</h5>
          <ul>
            <li v-for="(project, i) in selectedSkill.projects" :key="i">
              <a :href="project.link" target="_blank">
                {{ $t('techstack.projects.' + selectedSkill.label.toLowerCase().replace('.', '').replace(/\s/g, '')) }}
              </a>
            </li>
          </ul>
        </div>

        <div class="detail-block" v-if="selectedSkill.experience">
          <h5>💼 {{ $t('techstack.labels.experience') }}</h5>
          <p>
            {{ $t('techstack.experiences.' + selectedSkill.label.toLowerCase().replace('.', '').replace(/\s/g, '')) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
