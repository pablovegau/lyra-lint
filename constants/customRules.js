const prettierOptions = require('../.prettierrc.js');
const LEVEL_RULES = require('./levelRules');

module.exports = {
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'prettier/prettier': [LEVEL_RULES.ERROR, prettierOptions],
};
