const DefaultAdapter = require('./DefaultAdapter');

/* eslint-disable no-unused-vars */
module.exports = class BookshelfAdapter extends DefaultAdapter {
  save(doc, Model) {
    return doc.save(null, { method: 'insert' });
  }
};
