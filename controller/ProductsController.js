const productService = require('../service/ProductsService');

const getAllProducts = async(req, res) => {
    try {
        const allproducts = await productService.getAllProducts();
        res.status(200).send({status: "OK", data: allproducts});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getProduct = async(req, res) => {
    let id = req.params.productId;
    try {
        const producto = await productService.getProduct(id);
        res.status(200).send({status: "OK", data: producto});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createProduct = async(req, res) => {
    const {body} = req;
    try {
        if(!nombre||!body.estado||!body.descripcion||! body.cantidad_disponible||! body.precio_unitario||! body.BrandId||! body.CategoryId){
            throw{status: 406, message: "Ingrese todos los datos para crear un nuevo producto"};
        }
        const createdproduct = await productService.createProduct(body.nombre, body.estado, body.descripcion, body.cantidad_disponible, body.precio_unitario, body.BrandId, body.CategoryId);
        res.status(201).send({status: "OK", data: createdproduct});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateProduct = async(req, res) => {
    let id_ = req.params.productId; 
    try {
        const {nombre, estado, descripcion, cantidad_disponible, precio_unitario, BrandId,CategoryId} = req.body;
        const updatedProduct = await productService.updateProduct(id_, nombre, estado, descripcion,cantidad_disponible,precio_unitario, BrandId, CategoryId);
        res.status(200).send({status: "OK", data: updatedProduct});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteProduct = async(req, res) => {
    let id = req.params.productId;

    try {
        const deletedProduct = await productService.deleteProduct(id);
        res.status(200).send({status: "OK", data: deletedProduct});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};


