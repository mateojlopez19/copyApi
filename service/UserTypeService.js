const db = require('../models');

const getAllTypeUsers = async() => {
    try {
        let TypeUsers = await db.TypeUser.findAll();
        return TypeUsers;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get users"};
    }
};

const getTypeUser = async(id) => {
    try {
        let TypeUsers = await db.TypeUser.findByPk(id);
        return TypeUsers;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get user"};
    }
};

const createTypeUser = async(nombre_usuario) => {
    try {
        let newTypeUsers = await db.TypeUser.create({
            nombre_usuario,
        });
        return newTypeUsers;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be created"};
    }
};

const updateTypeUser = async(id, nombre_usuario) => {
    try {
        let updateTypeUsers = await db.TypeUser.update({
          nombre_usuario,
        }, {
            where: {
                id:id,
            }
        });
        return updateTypeUsers;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be updated"};
    }
};

const deleteTypeUser = async(id) => {
    try {
        const deletedTypeUsers = await db.TypeUser.destroy({
            where: {
                id,
            }
        });
        return deletedTypeUsers;
    } catch (error) {
        throw {status: 500, message: error.message  || "User could not be deleted"};
    }
};

module.exports = {
    getAllTypeUsers,
    getTypeUser,
    createTypeUser,
    updateTypeUser,
    deleteTypeUser,
};