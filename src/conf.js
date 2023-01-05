import theme from "./theme.js"
import keys from "./keys.js"
import searchEngines from "./search-engines.js"

export default {
  settings: {
    hintAlign: "left",
    hintCharacters: "qwertyuiopasdfghjklzxcvbnm",
    omnibarSuggestionTimeout: 500,
    richHintsForKeystroke: 1,
    defaultSearchEngine: "g",
    scrollStepSize: 140,
    // theme: theme,
  },

  keys,
  searchEngines,

  // Leader for site-specific mappings
  siteleader: "<Space>",

  // Leader for OmniBar searchEngines
  searchleader: "a",

  // Array containing zero or more log levels to enable: log, warn, error
  logLevels: [
    // "log",
    // "warn",
    "error",
  ],
}
