const db = require('../../../models')
const {Router} = require('express');
const categoryContentEdu = require('../../../controller/CategoryContentEdu');
const router = Router();

router.post('/', categoryContentEdu.createCategoryContentEdu);

//Ruta para traer todos los datos
router.get('/', categoryContentEdu.getAllCategoryContentEdu);

//Ruta para traer un usuario especifico
router.get('/:cateContenEduId', categoryContentEdu.getCategoryContentEdu);


//Ruta para actualizar un usuario
router.put('/:cateContenEduId', categoryContentEdu.updateCategoryContentEdu);

//Ruta para eliminar un usuario
router.delete('/:cateContenEduId', categoryContentEdu.deleteCategoryContentEdu);

module.exports = router;  //se exporta el modulo para poder usar