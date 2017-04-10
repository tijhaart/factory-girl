import DummyModel from './DummyModel';

module.exports = class DummyMongooseModel extends DummyModel {
  async remove() {
    this.removeCalled = true;
    return this;
  }
};
