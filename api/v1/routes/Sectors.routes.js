const {Router} = require('express');
const sectorsController = require('../../../controller/SectorsControllers');
const router = Router();


router.post('/', sectorsController.createSector);

//Ruta para traer todos los datos
router.get('/', sectorsController.getAllSectors);

//Ruta para traer un usuario especifico
router.get('/:sectorId', sectorsController.getSector);


//Ruta para actualizar un usuario
router.put('/:sectorId', sectorsController.updateSector);


//Ruta para eliminar un usuario
router.delete('/:sectorId', sectorsController.deleteSector);

module.exports = router;  //se exporta el modulo para poder usar