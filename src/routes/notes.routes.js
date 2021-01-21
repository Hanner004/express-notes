const { Router } = require ('express');
const router = Router();

const { renderNoteForm, createnewnote, renderNotes, renderEditForm, updateNotes, deleteNotes } = require('../controllers/notes.controller');

//new notes 
router.get('/notes/add', renderNoteForm);
router.post('/notes/new-note', createnewnote);
//get all notes
router.get('/notes', renderNotes);
//Edit notes
router.get('/notes/edit/:id', renderEditForm);

router.put('/notes/edit/:id', updateNotes);

//Delete Notes
router.delete('/notes/delete/:id', deleteNotes);


//POST = Crear algo 
//PUT = Editar algo existente
//POST = Crear
//Delete = Eliminar
module.exports = router;