const Generator = require('./Generator');

class Sequence extends Generator {
  generate(id = null, callback = null) {
    if (typeof id === 'function') {
      callback = id;
      id = null;
    }
    id = id || this.id || (this.id = generateId());
    Sequence.sequences[id] = Sequence.sequences[id] || 1;
    const next = Sequence.sequences[id]++;
    return callback ? callback(next) : next;
  }
}
Object.assign(Sequence, {
  sequences: {},
  reset(id = null) {
    if (!id) {
      Sequence.sequences = {};
    } else {
      Sequence.sequences[id] = undefined;
    }
  },
});
module.exports = Sequence;

function generateId() {
  let id;
  let i = 0;
  do {
    id = `_${i++}`;
  } while (id in Sequence.sequences);
  return id;
}
