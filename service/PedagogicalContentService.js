const db = require('../models');

const getAllPedagogicalContents = async() => {
    try {
        let PedagogicalContents = await db.PedagogicalContent.findAll();
        return PedagogicalContents;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get users"};
    }
};

const getPedagogicalContent = async(id) => {
    try {
        let PedagogicalContent = await db.PedagogicalContent.findByPk(id);
        return PedagogicalContent;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get user"};
    }
};

const createPedagogicalContent = async( titulo, material_audiovisual, enlace_informativo, descripcion, CategoryContentEduId) => {
    try {
        let newPedagogicalContent = await db.PedagogicalContent.create({
            titulo, 
            material_audiovisual, 
            enlace_informativo, 
            descripcion,
            CategoryContentEduId
        });
        return newPedagogicalContent;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be created"};
    }
};

const updatePedagogicalContent = async(id_,titulo, material_audiovisual, enlace_informativo, descripcion, CategoryContentEduId) => {
    try {
        let updatePedagogicalContent = await db.PedagogicalContent.update({ 
            titulo, 
            material_audiovisual, 
            enlace_informativo, 
            descripcion,
            CategoryContentEduId
        }, {
            where: {
                id:id_,
            }
        });
        return updatePedagogicalContent;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be updated"};
    }
};

const deletePedagogicalContent = async(id) => {
    try {
        const deletedPedagogicalContent = await db.PedagogicalContent.destroy({
            where: {
                id,
            }
        });
        return deletedPedagogicalContent;
    } catch (error) {
        throw {status: 500, message: error.message  || "User could not be deleted"};
    }
};

module.exports = {
    getAllPedagogicalContents,
    getPedagogicalContent,
    createPedagogicalContent,
    updatePedagogicalContent,
    deletePedagogicalContent,
};