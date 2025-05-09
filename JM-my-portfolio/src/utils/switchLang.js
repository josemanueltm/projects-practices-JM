import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale } = useI18n()

    const switchLang = () => {
      locale.value = locale.value === 'es' ? 'en' : 'es'
    }

    return { currentLang: locale, switchLang }
  }
}
