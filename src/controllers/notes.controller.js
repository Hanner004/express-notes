const notectrl = {};


const Note  = require('../models/note');


notectrl.renderNoteForm = (req, res) => {
    res.render('./notes/new-note');
};

notectrl.createnewnote = async (req, res) => {
    //console.log(req.body)
    const {title, description} = req.body;
    const newNote = new Note({title, description})
    //console.log(newNote)
    await newNote .save();
    // res.send('new note');
    req.flash('success_msg', 'Nota Added Successfully');
    res.redirect('/notes')
};

notectrl.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', {notes})
};

notectrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.render('notes/edit-notes' , { note });
};

notectrl.updateNotes = async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    // res.send('update notes');
    req.flash('success_msg', 'Note Updated Successfully');
    res.redirect('/notes');
};

notectrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    // res.send('deleting note')
    req.flash('success_msg', 'Nota Deleted Successfully');
    res.redirect('/notes')
};

module.exports = notectrl;