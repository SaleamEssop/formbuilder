const mongoose = require('mongoose');
const SchemaTypes = { mongoose };

const Model = mongoose.model('form', {
  name: String,
  path: String,
  schema: SchemaTypes.Mixed,
  createdAt: {
    type: SchemaTypes.Date,
    default: Date.now
  },
  updatedAt: {
    type: SchemaTypes.Date,
    default: Date.now
  },
});

module.exports = Model;
