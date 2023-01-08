const db = require('../../../models')
const {Router} = require('express');
const productsController = require('../../../controller/ProductsController');
const router = Router();


router.post('/', productsController.createProduct);

//Ruta para traer todos los datos
router.get('/', productsController.getAllProducts);

//Ruta para traer un usuario especifico
router.get('/:productId', productsController.getProduct);


//Ruta para actualizar un usuario
router.put('/:productId', productsController.updateProduct);


//Ruta para eliminar un usuario
router.delete('/:productId', productsController.deleteProduct);

module.exports = router;  //se exporta el modulo para poder usar