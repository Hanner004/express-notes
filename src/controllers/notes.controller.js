const notectrl = {};

// const dayjs = require("dayjs");

const Note = require("../models/note");

notectrl.renderNoteForm = (req, res) => {
  res.render("./notes/new-note");
};

notectrl.createnewnote = async (req, res) => {
  //console.log(req.body)
  const {title, description} = req.body;
  const newNote = new Note({title, description});
  newNote.user = req.user.id;
  //console.log(newNote)
  await newNote.save();

  // res.send('new note');
  req.flash("success_msg", "Nota added successfully");
  res.redirect("/notes");
};

notectrl.renderNotes = async (req, res) => {
  const notes = await Note.find({user: req.user.id}).sort({createdAt: "desc"});
  res.render("notes/all-notes", {notes});
  // res.render("notes/all-notes", {notes, response: "No se registran notas"});
};

notectrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user != req.user.id) {
    req.flash("error_msg", "No autorizado.");
    return res.redirect("/notes");
  }
  //console.log(note);
  res.render("notes/edit-notes", {note});
};

notectrl.updateNotes = async (req, res) => {
  const {title, description} = req.body;
  await Note.findByIdAndUpdate(req.params.id, {title, description});
  // res.send('update notes');
  req.flash("success_msg", "Note updated successfully");
  res.redirect("/notes");
};

notectrl.deleteNotes = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  // res.send('deleting note')
  req.flash("success_msg", "Note successfully deleted");
  res.redirect("/notes");
};

module.exports = notectrl;
