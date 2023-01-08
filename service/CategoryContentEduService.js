const db = require('../models');

const getAllCategoryContentEdu = async() => {
    try {
        let categoriesContentEdu = await db.CategoryContentEdu.findAll();
        return categoriesContentEdu;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get categories"};
    }
};

const getCategoryContentEdu = async(id) => {
    try {
        let categoryContentEdu = await db.CategoryContentEdu.findByPk(id);
        return categoryContentEdu;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get category"};
    }
};

const createCategoryContentEdu = async(nombre) => {
    try {
        let newCategoryContentEdu = await db.CategoryContentEdu.create({
            nombre,
        });
        return newCategoryContentEdu;
    } catch (error) {
        throw {status: 500, message: error.message || "Category could not be created"};
    }
};

const updateCategoryContentEdu = async(id_, nombre) => {
    try {
        let updatedCategoryContentEdu = await db.CategoryContentEdu.update({
            nombre
        }, {
            where: {
                id:id_,
            }
        });
        return updatedCategoryContentEdu;
    } catch (error) {
        throw {status: 500, message: error.message || "Category could not be updated"};
    }
};

const deleteCategoryContentEdu = async(id) => {
    try {
        const deletedCategoryContentEdu = await db.CategoryContentEdu.destroy({
            where: {
                id,
            }
        });
        return deletedCategoryContentEdu;
    } catch (error) {
        throw {status: 500, message: error.message  || "Category could not be deleted"};
    }
};

module.exports = {
    getAllCategoryContentEdu,
    getCategoryContentEdu,
    createCategoryContentEdu,
    updateCategoryContentEdu,
    deleteCategoryContentEdu,
};