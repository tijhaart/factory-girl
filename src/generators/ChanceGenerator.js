const Generator = require('./Generator');
const Chance = require('chance');

const chance = new Chance();

module.exports = class ChanceGenerator extends Generator {
  generate(chanceMethod, options) {
    if (typeof chance[chanceMethod] !== 'function') {
      throw new Error('Invalid chance method requested');
    }
    return chance[chanceMethod](options);
  }
};
