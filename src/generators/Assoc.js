const Generator = require('./Generator');

module.exports = class Assoc extends Generator {
  async generate(name, key = null, attrs = {}, buildOptions = {}) {
    const model = await this.factoryGirl.create(name, attrs, buildOptions);
    return key ? this.getAttribute(name, model, key) : model;
  }
};
