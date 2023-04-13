const {Router} = require("express");
const router = Router();

const {renderNoteForm, createnewnote, renderNotes, renderEditForm, updateNotes, deleteNotes} = require("../controllers/notes.controller");

const {isAuthenticated} = require("../helpers/auth");

//new notes
router.get("/notes/add", isAuthenticated, renderNoteForm);
router.post("/notes/new-note", isAuthenticated, createnewnote);
//get all notes
router.get("/notes", isAuthenticated, renderNotes);
//Edit notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit/:id", isAuthenticated, updateNotes);

//Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNotes);

//POST = Crear algo
//PUT = Editar algo existente
//POST = Crear
//Delete = Eliminar
module.exports = router;
