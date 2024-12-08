import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import reactPlugin from 'eslint-plugin-react';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended, // ESLint recommended rules
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2022,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                myCustomGlobal: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            react: reactPlugin,
            prettier: prettierPlugin,
            'unused-imports': unusedImportsPlugin,
        },
        rules: {
            ...typescriptPlugin.configs.recommended.rules, // TypeScript recommended rules
            ...reactPlugin.configs.recommended.rules, // React recommended rules
            ...prettierConfig.rules, // Prettier rules to disable conflicting formatting rules

            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'react/prop-types': 'off',
            'prettier/prettier': 'error', // Ensures prettier formatting issues are treated as ESLint errors
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
