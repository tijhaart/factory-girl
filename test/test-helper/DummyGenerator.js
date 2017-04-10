
module.exports = class DummyGenerator {
  constructor() {
    this.constructorCalled = true;
  }
  generate() {
    return 'hello';
  }
};
