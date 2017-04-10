/* eslint-disable */
const FactoryGirl = require('./FactoryGirl');

module.exports = Object.assign(new FactoryGirl(), {
  FactoryGirl: FactoryGirl,
  ObjectAdapter: require('./adapters/ObjectAdapter'),
  BookshelfAdapter: require('./adapters/BookshelfAdapter'),
  DefaultAdapter: require('./adapters/DefaultAdapter'),
  MongooseAdapter: require('./adapters/MongooseAdapter'),
  SequelizeAdapter: require('./adapters/SequelizeAdapter'),
  ReduxORMAdapter: require('./adapters/ReduxORMAdapter'),
})
