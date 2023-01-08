const db = require('../models');

const getAllProducts = async() => {
    try {
        let products = await db.Product.findAll({
            attributes:{
                exclude:[
                    "estado"
                ]
            },
            include:[{
                model:db.Brand,
                required:true,
                attributes:["nombre"]
            }]
        });
        return products;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get products"};
    }
};

const getProduct = async(id) => {
    try {
        let producto = await db.Product.findByPk(id);
        return producto;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get product"};
    }
};

const createProduct = async( nombre, estado, descripcion, cantidad_disponible, precio_unitario, BrandId, CategoryId) => {
    try {
        let newProduct = await db.Product.create({
            nombre,
            estado,
            descripcion,
            cantidad_disponible,
            precio_unitario,
            BrandId,
            CategoryId
        });
        return newProduct;
    } catch (error) {
        throw {status: 500, message: error.message || "Product could not be created"};
    }
};

const updateProduct = async(id_, nombre, estado, descripcion, cantidad_disponible, precio_unitario, BrandId, CategoryId) => {
    try {
        let updatedProduct = await db.Product.update({
            nombre,
            estado,
            descripcion,
            cantidad_disponible,
            precio_unitario,
            BrandId,
            CategoryId
        }, {
            where: {
                id:id_,
            }
        });
        return updatedProduct;
    } catch (error) {
        throw {status: 500, message: error.message || "Product could not be updated"};
    }
};

const deleteProduct = async(id) => {
    try {
        const deletedProduct = await db.Product.destroy({
            where: {
                id,
            }
        });
        return deletedProduct;
    } catch (error) {
        throw {status: 500, message: error.message  || "Product could not be deleted"};
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};