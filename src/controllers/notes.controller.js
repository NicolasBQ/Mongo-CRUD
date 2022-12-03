const notesCtrl = {};

// Add new notes
notesCtrl.renderNoteForm = (req, res) => {
    res.send('notes form');
}
notesCtrl.createNewNote = (req, res) => {
    res.send('new note');
}

// Get notes
notesCtrl.renderNotes = (req, res) => {
    res.send('All notes');
}

// Edit Notes
notesCtrl.renderEditForm = (req, res) => {
    res.send('Edit form');
}
notesCtrl.updateNote = (req, res) => {
    res.send('Update');
}

// Delte
notesCtrl.deleteNote = (req, res) => {
    res.send('DElete');
}

module.exports = notesCtrl;