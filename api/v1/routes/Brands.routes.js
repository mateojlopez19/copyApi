const db = require('../../../models')
const {Router} = require('express');
const Brands = require('../../../controller/BrandsController');
const router = Router();


//typeUser
router.post('/', Brands.createBrands);

//Ruta para traer todos los datos
router.get('/', Brands.getAllBrands);

//Ruta para traer un usuario especifico
router.get('/:userId', Brands.getBrand);

//Ruta para actualizar un usuario
router.put('/:userId', Brands.updateBrands);

//Ruta para eliminar un usuario
router.delete('/:userId', Brands.deleteBrands);

module.exports = router;  //se exporta el modulo para poder usar