const db = require('../models');

const getAllBrands = async() => {
    try {
        let Brands = await db.Brand.findAll();
        return Brands;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get Brands"};
    }
};

const getBrand = async(id) => {
    try {
        let Brand = await db.Brand.findByPk(id);
        return Brand;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get Brand"};
    }
};

const createBrands = async(nombre, descripcion, imagen, estado, UserId) => {
    try {
        let newBrands = await db.Brand.create({
            nombre, 
            descripcion, 
            imagen, 
            estado, 
            UserId
        });
        return newBrands;
    } catch (error) {
        throw {status: 500, message: error.message || "Brand could not be created"};
    }
};

const updateBrands = async(id_, nombre, descripcion, imagen, estado, UserId) => {
    try {
        let updateBrands = await db.Brand.update({
            nombre, 
            descripcion, 
            imagen, 
            estado,
            UserId
        }, {
            where: {
                id:id_,
            }
        });
        return updateBrands;
    } catch (error) {
        throw {status: 500, message: error.message || "Brand could not be updated"};
    }
};

const deleteBrands = async(id) => {
    try {
        const deletedBrands = await db.Brand.destroy({
            where: {
                id,
            }
        });
        return deletedBrands;
    } catch (error) {
        throw {status: 500, message: error.message  || "Brand could not be deleted"};
    }
};

module.exports = {
    getAllBrands,
    getBrand,
    createBrands,
    updateBrands,
    deleteBrands,
};