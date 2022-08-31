module.exports = {
  root: false,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'no-undef': 0,
    'vue/no-v-html': 0,
    'import/namespace': 0
    // 'vue/no-use-v-if-with-v-for': 0
  }
}
