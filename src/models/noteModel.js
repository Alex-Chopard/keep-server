'use strict'

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: {
    type: String
  },
  texte: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', NoteSchema);
