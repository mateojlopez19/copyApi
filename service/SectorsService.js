const db = require('../models');

const getAllSectors = async() => {
    try {
        let sectors = await db.Sector.findAll();
        return sectors;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get sectors"};
    }
};

const getSector= async(id) => {
    try {
        let sector = await db.Sector.findByPk(id);
        return sector;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get sector"};
    }
};

const createSector = async(nombre_sector, valor_domicilio) => {
    try {
        let newSector = await db.Sector.create({
            nombre_sector,
            valor_domicilio
        });
        return newSector;
    } catch (error) {
        throw {status: 500, message: error.message || "Sector could not be created"};
    }
};

const updateSector = async(id_,nombre_sector, valor_domicilio) => {
    try {
        let updateSector = await db.Sector.update({
            
            nombre_sector,
            valor_domicilio
        }, {
            where: {
                id:id_,
            }
        });
        return updateSector;
    } catch (error) {
        throw {status: 500, message: error.message || "Sector could not be updated"};
    }
};

const deleteSector = async(id) => {
    try {
        const deleteSector = await db.Sector.destroy({
            where: {
                id,
            }
        });
        return deleteSector;
    } catch (error) {
        throw {status: 500, message: error.message  || "Sector could not be deleted"};
    }
};

module.exports = {
    getAllSectors,
    getSector,
    createSector,
    updateSector,
    deleteSector,
};