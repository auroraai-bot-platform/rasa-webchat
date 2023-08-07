export let LANGUAGE_LIST = {};

export function setLanguages(languages) {
  if (languages && Object.keys(languages).length > 0) {
    LANGUAGE_LIST = languages;
  }
}
