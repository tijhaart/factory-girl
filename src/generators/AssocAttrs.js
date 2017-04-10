const Generator = require('./Generator');

module.exports = class AssocAttrs extends Generator {
  async generate(name, key = null, attrs = {}, buildOptions = {}) {
    const model = await this.factoryGirl.attrs(name, attrs, buildOptions);
    return key ? this.getAttribute(name, model, key) : model;
  }
};
