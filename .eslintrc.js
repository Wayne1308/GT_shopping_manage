module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-property-newline': 'off',
    'object-curly-newline': 'off',
    'quotes': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'no-useless-return': 'off',
    'no-trailing-spaces': ['error', { "skipBlankLines": true }],
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'vue/no-unused-vars': 'off',
    'no-template-curly-in-string': 'off',
    'prefer-const': 'off'
    // [2,{"anonymous": "always", "named": "never", "asyncArrow": "always"}]
  }
}
