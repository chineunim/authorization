/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')
// import '@rushstack/eslint-patch/modern-module-resolution'

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-indent': ['error', 2],
    '@typescript-eslint/semi': [2, 'never'],    
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'max-len': [2, 120],
    'object-curly-spacing': ['error', 'always'],
    'template-curly-spacing': [2, 'always'],
    'vue/template-curly-spacing': [2, 'always'],
    'vue/mustache-interpolation-spacing': [2, 'always'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'TWO_WAY_BINDING',
        'GLOBAL',
        'UNIQUE',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: false,
    }],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    node: true,
    browser: true,
    amd: true,
  },
}
