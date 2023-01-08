const db = require('../../../models')
const {Router} = require('express');
const PresentationController = require('../../../controller/PresentationController');
const router = Router();

//User:
router.post('/', PresentationController.createPresentation);

//Ruta para traer todos los datos
router.get('/', PresentationController.getAllPresentation);

//Ruta para traer un usuario especifico
router.get('/:PresentationId', PresentationController.getPresentation);

//Ruta para actualizar un usuario
router.put('/:PresentationId', PresentationController.updatePresentation);

//Ruta para eliminar un usuario
router.delete('/:PresentationId', PresentationController.deletePresentation);


module.exports = router;  //se exporta el modulo para poder usar