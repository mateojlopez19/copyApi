const db = require('../../../models')
const {Router} = require('express');
const categoriesController = require('../../../controller/CategoriesController');
const router = Router();


router.post('/', categoriesController.createCategory);

//Ruta para traer todos los datos
router.get('/', categoriesController.getAllCategories);

//Ruta para traer un usuario especifico
router.get('/:categoryId', categoriesController.getCategory);


//Ruta para actualizar un usuario
router.put('/:categoryId', categoriesController.updateCategory);


//Ruta para eliminar un usuario
router.delete('/:categoryId', categoriesController.deleteCategory);

module.exports = router;  //se exporta el modulo para poder usar