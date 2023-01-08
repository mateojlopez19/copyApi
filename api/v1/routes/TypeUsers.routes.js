const db = require('../../../models')
const {Router} = require('express');
const userTypeController = require('../../../controller/UserTypeController');
const router = Router();


//typeUser
router.post('/', userTypeController.createTypeUser);

//Ruta para traer todos los datos
router.get('/', userTypeController.getAllTypeUsers);

//Ruta para traer un usuario especifico
router.get('/:userId', userTypeController.getTypeUser);

//Ruta para actualizar un usuario
router.put('/:userId', userTypeController.updateTypeUser);

//Ruta para eliminar un usuario
router.delete('/:userId', userTypeController.deleteTypeUser);

module.exports = router;  //se exporta el modulo para poder usar