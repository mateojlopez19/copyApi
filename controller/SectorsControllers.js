const sectorService = require('../service/SectorsService');

const getAllSectors = async(req, res) => {
    try {
        const allSectors = await sectorService.getAllSectors();
        res.status(200).send({status: "OK", data: allSectors});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getSector = async(req, res) => {
    let id = req.params.sectorId;
    try {
        const sector = await sectorService.getSector(id);
        res.status(200).send({status: "OK", data: sector});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createSector = async(req, res) => {
    const {body} = req;
    try {
        if(!body.nombre_sector||!body.valor_domicilio){
            throw{status: 406, message: "Ingrese todos los datos para crear un nuevo sector"};
        }
        const createdSector = await sectorService.createSector(body.nombre_sector, body.valor_domicilio);
        res.status(201).send({status: "OK", data: createdSector});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateSector = async(req, res) => {
    let id = req.params.sectorId; 
    try {
        const {nombre_sector, valor_domicilio} = req.body;
        if(!nombre_sector||!valor_domicilio){
            throw{status: 406, message: "Ingrese todos los datos para actualizar un nuevo sector"};
        }
        const updatedSector = await sectorService.updateSector(id, nombre_sector, valor_domicilio);
        res.status(200).send({status: "OK", data: updatedSector});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteSector = async(req, res) => {
    let id = req.params.sectorId;

    try {
        const deletedSector = await sectorService.deleteSector(id);
        res.status(200).send({status: "OK", data: deletedSector});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllSectors,
    getSector,
    createSector,
    updateSector,
    deleteSector,
};



