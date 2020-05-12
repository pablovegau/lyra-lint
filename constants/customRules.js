const LEVEL_RULES = require('./levelRules');

module.exports = {
  'react-hooks/rules-of-hooks': LEVEL_RULES.ERROR,
  'react-hooks/exhaustive-deps': LEVEL_RULES.WARNING,
};
