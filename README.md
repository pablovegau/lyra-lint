# lyra lint

Opinated linter library for React using styled-components
​
## Installation

1. Install `lyra-lint` package:
```sh
npm install --save-dev lyra-lint
```

2. Add these lines to `package.json`:
​
```json
"eslintConfig": {
   "extends": ["./node_modules/lyra-lint/.eslintrc.js"]
 },
 "stylelint": {
   "extends": "./node_modules/lyra-lint/stylelint.config.js"
 },
```

## Usage

Add these scripts to the `package.json`:

```json
"eslint": "./node_modules/.bin/eslint \"src/**/*.{js,jsx}\"",
"stylelint": "./node_modules/.bin/stylelint \"src/**/*.{js,jsx}\"",
"format": "npm run prettier -- --write",
"prettier": "./node_modules/.bin/prettier \"src/**/*.{js,jsx,css,json}\" --config ./node_modules/lyra-lint/.prettierrc.js"
```

#### Lint JS files

```sh
$ npm run eslint [options]
```

#### Fix JS files

```sh
$ npm run eslint -- --fix [options]
```

#### Format JS files

```sh
$ npm run format [options]
```

#### Lint Styled-Components

```sh
$ npm run stylelint [options]
```

#### Fix Styled-Components

```sh
$ npm run stylelint -- --fix [options]
```
