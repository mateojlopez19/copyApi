const db = require('../models');

const getAllCategories = async() => {
    try {
        let categories = await db.Category.findAll();
        return categories;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get categories"};
    }
};

const getCategory = async(id) => {
    try {
        let category = await db.Category.findByPk(id);
        return category;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get category"};
    }
};

const createCategory = async(nombre) => {
    try {
        let newCategory = await db.Category.create({
            nombre,
        });
        return newCategory;
    } catch (error) {
        throw {status: 500, message: error.message || "Category could not be created"};
    }
};

const updateCategory = async(id_, nombre) => {
    try {
        let updatedCategory = await db.Category.update({
            nombre
        }, {
            where: {
                id: id_,
            }
        });
        return updatedCategory;
    } catch (error) {
        throw {status: 500, message: error.message || "Category could not be updated"};
    }
};

const deleteCategory = async(id) => {
    try {
        const deleteCategory = await db.Category.destroy({
            where: {
                id,
            }
        });
        return deleteCategory;
    } catch (error) {
        throw {status: 500, message: error.message  || "Category could not be deleted"};
    }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};