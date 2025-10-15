import prettier from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';

import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
//
// export default defineConfigWithVueTs(
//     vue.configs['flat/essential'],
//     vueTsConfigs.recommended,
//     {
//         ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js', 'resources/js/components/ui/*'],
//     },
//     {
//         rules: {
//             'vue/multi-word-component-names': 'off',
//             '@typescript-eslint/no-explicit-any': 'off',
//         },
//     },
//     prettier,
// );

export default defineConfigWithVueTs(
    vue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
        ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js', 'resources/js/components/ui/*'],
    },
    {
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
    },
    prettier,
);
