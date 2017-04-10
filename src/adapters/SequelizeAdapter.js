const DefaultAdapter = require('./DefaultAdapter');

/* eslint-disable no-unused-vars */
module.exports = class SequelizeAdapter extends DefaultAdapter {
  build(Model, props) {
    return Model.build(props);
  }
};
