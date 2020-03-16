import I18n from 'i18n-js'
import en from './en-US'
import pt from './pt-BR'

const normalizeTranslate = {
  'en-US': 'en_US',
  'pt-BR': 'pt_BR',
  'en': 'en_US',
  'pt': 'pt_BR',
}

I18n.translations = {
  'en_US': en,
  'pt_BR': pt,
}

const setLanguageToI18n = () => {
  const language = navigator.language
  const translateNormalize = normalizeTranslate[language]
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(translateNormalize)

  iHaveThisLanguage
    ? I18n.locale = translateNormalize
    : I18n.defaultLocale = 'pt'
}

setLanguageToI18n()

const Translate = key => I18n.t(key)

export default Translate
