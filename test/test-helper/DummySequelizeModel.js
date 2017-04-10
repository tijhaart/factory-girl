import DummyModel from './DummyModel';

module.exports = class DummySequelizeModel extends DummyModel {
  static build(props) {
    const model = new DummySequelizeModel();
    model.set(props);
    return model;
  }
};
