const db = require('../../../models')
const {Router} = require('express');
const ProductPhotos = require('../../../controller/ProductPhotosController');
const router = Router();


//typeUser
router.post('/', ProductPhotos.createProductPhotos);

//Ruta para traer todos los datos
router.get('/', ProductPhotos.getAllProductPhotos);

//Ruta para traer un usuario especifico
router.get('/:userId', ProductPhotos.getProductPhoto);

//Ruta para actualizar un usuario
router.put('/:userId', ProductPhotos.updateProductPhotos);

//Ruta para eliminar un usuario
router.delete('/:userId', ProductPhotos.deleteProductPhotos);

module.exports = router;  //se exporta el modulo para poder usar