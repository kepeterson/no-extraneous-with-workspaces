'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  env: {
    node: true
  },
  plugins: ['import'],
  root: true,
  rules: {
    'import/no-extraneous-dependencies': 'error',
  }
};
