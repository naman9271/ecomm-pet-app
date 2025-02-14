import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser, // For window, document, etc.
        ...globals.node, // ✅ Fixes `process` not defined error
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      // Extend recommended rules
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...prettierConfig.rules,

      // ✅ Fix: Allow `process.env` usage
      'no-undef': 'error',

      // ✅ Fix: Ensure unused variables are warned, not errors
      'no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
      ],

      // ✅ Fix: PropTypes validation issues
      'react/prop-types': 'warn',

      // ✅ Fix: Ensure JSX key properties are required
      'react/jsx-key': 'error',

      // ✅ Fix: Enforce Prettier formatting
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'es5',
          bracketSpacing: true,
          arrowParens: 'always',
        },
      ],
    },
  },
]
