const db = require('../models');

const getAllProductPhotos = async() => {
    try {
        let ProductPhotos = await db.ProductPhoto.findAll();
        return ProductPhotos;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get users"};
    }
};

const getProductPhoto = async(id) => {
    try {
        let ProductPhotos = await db.ProductPhoto.findByPk(id);
        return ProductPhotos;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get user"};
    }
};

const createProductPhotos = async(ruta_foto, ProductId) => {
    try {
        let newProductPhotos = await db.ProductPhoto.create({
            ruta_foto,
            ProductId
        });
        return newProductPhotos;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be created"};
    }
};

const updateProductPhotos = async(id_, ruta_foto, ProductId) => {
    try {
        let updateProductPhotos = await db.ProductPhoto.update({
           ruta_foto,
           ProductId
        }, {
            where: {
                id:id_,
            }
        });
        return updateProductPhotos;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be updated"};
    }
};

const deleteProductPhotos = async(id) => {
    try {
        const deletedProductPhotos = await db.ProductPhoto.destroy({
            where: {
                id,
            }
        });
        return deletedProductPhotos;
    } catch (error) {
        throw {status: 500, message: error.message  || "User could not be deleted"};
    }
};

module.exports = {
    getAllProductPhotos,
    getProductPhoto,
    createProductPhotos,
    updateProductPhotos,
    deleteProductPhotos,
};
