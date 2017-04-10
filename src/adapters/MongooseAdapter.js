const DefaultAdapter = require('./DefaultAdapter');

/* eslint-disable no-unused-vars */
module.exports = class MongooseAdapter extends DefaultAdapter {
  async destroy(model, Model) {
    return model.remove();
  }
};
