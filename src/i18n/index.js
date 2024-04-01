import { createI18n } from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'
import store from '@/store'
const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}

function getLanguage() {
  return store && store.getters && store.getters.language
}

const il8n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getLanguage(),
  messages
})
export default il8n
