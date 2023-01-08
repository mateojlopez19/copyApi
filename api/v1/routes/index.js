const {Router} = require('express');
const router = Router();


// Routes

//categorias
router.use('/categories', require('./Categories.routes'));

//municipios
router.use('/municipalities', require('./Municipalities.routes'));

//sectores
router.use('/sectors', require('./Sectors.routes'));

 //productos
router.use('/products', require('./Products.routes')); 

//categoria_contenid_pedagogico
router.use('/categoryContentEdu', require('./CategoryContentEdu.routes'));

//usuarios
router.use('/users', require('./Users.routes'));

// Tipos Usuarios
router.use('/typeUsers', require('./TypeUsers.routes'));

//contenido_pedagogico
router.use('/pedagogicalContent', require('./PedagogicalContent.routes'));

//fotos_productos
router.use('/ProductPhotos', require('./ProductPhotos.routes'));

//marcas
router.use('/Brands', require('./Brands.routes')); 

//pedidos_facturas
router.use('/InvoiceRequests', require('./InvoiceRequests.routes'));

//presentations
router.use('/Presentations', require('./Presentations.routes'));

/* //generador de pdf
router.use('/GeneratePdfFacturation', require('./GeneratePdfFacturation.routes')) */

module.exports = router;
