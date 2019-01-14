'use strict';
import note from '../controllers/noteController';

module.exports = function(app) {
  // Note Routes
  app.route('/api/notes')
    .get(note.listAllNotes)
    .post(note.createNote)

  app.route('/api/note/:noteId')
    .get(note.readNote)
    .put(note.updateNote)
    .delete(note.deleteNote)
}
