const db = require('../models');

const getAllMunicipalities = async() => {
    try {
        let municipalities = await db.Municipality.findAll();
        return municipalities;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get municipalities"};
    }
};

const getMunicipality = async(id) => {
    try {
        let municipality = await db.Municipality.findByPk(id);
        return municipality;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get municipality"};
    }
};

const createMunicipality= async(nombre) => {
    try {
        let newMunicipality = await db.Municipality.create({
            nombre,
        });
        return newMunicipality;
    } catch (error) {
        throw {status: 500, message: error.message || "Municipality could not be created"};
    }
};

const updateMunicipality = async(id_,nombre) => {
    try {
        let updateMunicipality= await db.Municipality.update({
            nombre
        }, {
            where: {
                id:id_,
            }
        });
        return updateMunicipality;
    } catch (error) {
        throw {status: 500, message: error.message || "Municipality could not be updated"};
    }
};

const deleteMunicipality = async(id) => {
    try {
        const deleteMunicipality = await db.Municipality.destroy({
            where: {
                id,
            }
        });
        return deleteMunicipality;
    } catch (error) {
        throw {status: 500, message: error.message  || "Municipality could not be deleted"};
    }
};

module.exports = {
    getAllMunicipalities,
    getMunicipality,
    createMunicipality,
    updateMunicipality,
    deleteMunicipality,
};