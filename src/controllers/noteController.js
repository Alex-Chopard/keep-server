'use strict'

import mongoose from 'mongoose';
const Note = mongoose.model('Note');

exports.listAllNotes = (req, res) => {
  Note.find({}, (err, notes) => {
    if (err){
      res.status(400).send(err)
    }

    res.status(200).json(notes)
  })
}

exports.createNote = (req, res) => {
  const newNote = new Note(req.body)

  newNote.save((err, note) => {
    if (err) {
      res.status(400).send(err)
    }

    res.status(200).json(note)
  })
}

exports.readNote = (req, res) => {
  Note.findById(req.params.noteId, (err, task) => {
    if (err) {
      res.status(400).send(err)
    }

    res.json(task)
  })
}

exports.updateNote = (req, res) => {
  Note.updateOne({ '_id': req.params.noteId }, { $set: req.body }, (err, result) => {
    if (err) {
      res.status(400).send(err)
    }

    res.status(200).json(result)
  })
}

exports.deleteNote = (req, res) => {
  Note.deleteOne({ _id: req.params.noteId }, (err, result) => {
    if (err) {
      res.status(400).send(err)
    }

    res.status(200).json({ message: 'Note successfully deleted', result })
  })
}

