const ProductPhotos = require('../service/ProductPhotosService')

const getAllProductPhotos = async(req, res) => {
    try {
        const allProductPhotos = await ProductPhotos.getAllProductPhotos();
        res.status(200).send({status: "OK", data: allProductPhotos});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getProductPhoto = async(req, res) => {
    let id = req.params.userId;
    try {
        const uniqueProductPhotos = await ProductPhotos.getProductPhoto(id);
        res.status(200).send({status: "OK", data: uniqueProductPhotos});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createProductPhotos = async(req, res) => {
    const {body} = req;
    try {
        if(!body.ruta_foto||!body.ProductId){
            throw{status: 406, message: "Ingrese todos los datos para crear un registro fotografico del producto"};
        }
        const createdProductPhotos = await ProductPhotos.createProductPhotos(body.ruta_foto, body.ProductId);
        res.status(201).send({status: "OK", data: createdProductPhotos});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateProductPhotos = async(req, res) => {
    let id_ = req.params.userId; 
    try {
        const {ProductId,ruta_foto} = req.body;
        if(!ruta_foto||!ProductId){
            throw{status: 406, message: "Ingrese todos los datos para actualizar un registro fotografico del producto"};
        }
        const updateProductPhotos = await ProductPhotos.updateProductPhotos(id_, ruta_foto, ProductId);
        res.status(200).send({status: "OK", data: updateProductPhotos});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteProductPhotos = async(req, res) => {
    let id = req.params.userId;

    try {
        const deleteProductPhotos = await ProductPhotos.deleteProductPhotos(id);
        res.status(200).send({status: "OK", data: deleteProductPhotos});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllProductPhotos,
    getProductPhoto,
    createProductPhotos,
    updateProductPhotos,
    deleteProductPhotos,
};

