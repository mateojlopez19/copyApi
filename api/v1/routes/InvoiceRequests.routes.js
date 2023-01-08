const db = require('../../../models')
const {Router} = require('express');
const InvoiceRequests = require('../../../controller/InvoiceRequestsController');
const router = Router();


//typeUser
router.post('/', InvoiceRequests.createInvoiceRequests);

//Ruta para traer todos los datos
router.get('/', InvoiceRequests.getAllInvoiceRequests);

//Ruta para traer un usuario especifico
router.get('/:userId', InvoiceRequests.getInvoiceRequest);

//Ruta para actualizar un usuario
router.put('/:userId', InvoiceRequests.updateInvoiceRequests);

//Ruta para eliminar un usuario
router.delete('/:userId', InvoiceRequests.deleteInvoiceRequests);

module.exports = router;  //se exporta el modulo para poder usar