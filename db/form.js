const mongoose = require('mongoose');
const Types = mongoose.SchemaTypes;

const Model = mongoose.model('form', {
  name: String,
  path: String,
  tags: [String],
  structure: Types.Mixed,
  createdAt: {
    type: Types.Date,
    default: Date.now
  },
  updatedAt: {
    type: Types.Date,
    default: Date.now
  },
});

module.exports = Model;
