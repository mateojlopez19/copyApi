const db = require('../models');

const getAllPresentation = async() => {
    try {
        let Presentation = await db.Presentation.findAll();
        return Presentation;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get Presentation"};
    }
};

const getPresentation = async(id) => {
    try {
        let Presentation = await db.Presentation.findByPk(id);
        return Presentation;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get Presentation"};
    }
};

const createPresentation = async(nombre) => {
    try {
        let newPresentation = await db.Presentation.create({
           nombre
        });
        return newPresentation;
    } catch (error) {
        throw {status: 500, message: error.message || "Presentation could not be created"};
    }
};

const updatePresentation = async(id_, nombre) => {
    try {
        let updatePresentation = await db.Presentation.update({
            
            nombre
        }, {
            where: {
                id:id_,
            }
        });
        return updatePresentation;
    } catch (error) {
        throw {status: 500, message: error.message || "Presentation could not be updated"};
    }
};

const deletePresentation = async(id) => {
    try {
        const deletedPresentation = await db.Presentation.destroy({
            where: {
                id,
            }
        });
        return deletedPresentation;
    } catch (error) {
        throw {status: 500, message: error.message  || "presentation could not be deleted"};
    }
};

module.exports = {
    getAllPresentation,
    getPresentation,
    createPresentation,
    updatePresentation,
    deletePresentation,
};