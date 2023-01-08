const db = require('../../../models')
const {Router} = require('express');
const PedagogicalContent = require('../../../controller/PedagogicalContentController');
const router = Router();


//typeUser
router.post('/', PedagogicalContent.createPedagogicalContent);

//Ruta para traer todos los datos
router.get('/', PedagogicalContent.getAllPedagogicalContents);

//Ruta para traer un usuario especifico
router.get('/:userId', PedagogicalContent.getPedagogicalContent);

//Ruta para actualizar un usuario
router.put('/:userId', PedagogicalContent.updatePedagogicalContent);

//Ruta para eliminar un usuario
router.delete('/:userId', PedagogicalContent.deletePedagogicalContent);

module.exports = router;  //se exporta el modulo para poder usar