const db = require('../../../models')
const {Router} = require('express');
const municipalitiesController = require('../../../controller/MunicipalitiesController');
const router = Router();


router.post('/', municipalitiesController.createMunicipality);

//Ruta para traer todos los datos
router.get('/', municipalitiesController.getAllMunicipalities);

//Ruta para traer un usuario especifico
router.get('/:municipalitiesId', municipalitiesController.getMunicipality);


//Ruta para actualizar un usuario
router.put('/:municipalitiesId', municipalitiesController.updateMunicipality);


//Ruta para eliminar un usuario
router.delete('/:municipalitiesId', municipalitiesController.deleteMunicipality);

module.exports = router;  //se exporta el modulo para poder usar
