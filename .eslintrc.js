module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true, // browser global variables
    es2021: true, // adds all ECMAScript 2021.
    jest: true,
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/vue3-recommended', //
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 2,
      },
    }],
    'vue/html-self-closing': ['error', {
      // eslint-disable-next-line quote-props
      'html': {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
  },
};
