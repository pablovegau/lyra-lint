# Lyra lint 🐈

Opinated linter library for React

## Table of contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Scripts](#scripts)
4. [Using with Husky](#using-with-husky)
​
## Installation

1. Install `lyra-lint` package:
```sh
npm install --save-dev lyra-lint
```

## Usage

1. Add these scripts to the `package.json` *optional:

```json
"lint": "./node_modules/.bin/eslint --ignore-path .gitignore .",
"prettier": "prettier --ignore-path .gitignore \"**/*.+(js|json)\"",
"format": "npm run prettier -- --write",
"check-format": "npm run prettier -- --list-different",
"validate": "npm run check-format && npm run lint"
```

2. Add as a new property in the `package.json` to extends *lyra-lint* configuration:
​
```json
"eslintConfig": {
   "extends": ["./node_modules/lyra-lint/.eslintrc.js"]
 }
```

3. Add as a new property in the `package.json` in order to find the `.prettierrc` config from the package:

```json
  "prettier": "./node_modules/lyra-lint/.prettierrc.js",
```

## Scripts

#### Lint (every JS file except the listed in the project .gitignore file)

```sh
$ npm run lint
```

#### Lint and fix problems (the ones eslint can fix by itself)

```sh
$ npm run eslint -- --fix
```

#### Format JS and JSON files (except the listed in the project .gitignore file)

```sh
$ npm run format
```

#### Print the filenames of files that are different from Prettier formatting

```sh
$ npm run check-format
```

#### Execute the check-format script and the lint script

```sh
$ npm run check-format
```

## Using with Husky

In order to avoid problems with Husky you need to install Eslint and Prettier into your project as a devDependency
