import { attr, Model } from 'redux-orm';

module.exports = class DummyReduxORMModel extends Model {
  static get fields() {
    return {
      id: attr(),
      type: attr(),
      name: attr(),
      country: attr(),
    };
  }

  static get modelName() {
    return 'DummyReduxORMModel';
  }
};
