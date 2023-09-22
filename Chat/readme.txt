npm install eslint --save-dev

npm install @babel/eslint-parser --save-dev

npm install eslint-config-airbnb --save-dev

npm i eslint-plugin-import

npm i eslint-plugin-import --save-dev

npm i eslint-plugin-jsx-a11y --save-dev

npm i eslint-plugin-react --save-dev 

npm i eslint-plugin-react-hooks --save-dev

npm i eslint-plugin-react-native --save-dev

after all installation create file named '.eslintrc.js' and 'eslintignore'

add this code in '.eslintrc.js' file and if you get some error just ignore it disable for entire file by right clicking
module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  parser: '@babel/eslint-parser',
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
  },
  globals: {
    fetch: false
  }
};

and write node-modules in 'eslintignore' bc we dont want to lint entire page

after that add this to 'package.json' file 
"scripts": {
    "lint": "eslint --ext .js,.jsx ./"
},

finally run this command -> npm run lint --fix
