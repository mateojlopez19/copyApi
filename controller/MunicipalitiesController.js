const municipalitiesService = require('../service/MunicipalitiesService');

const getAllMunicipalities = async(req, res) => {
    try {
        const allMunicipalities = await municipalitiesService.getAllMunicipalities();
        res.status(200).send({status: "OK", data: allMunicipalities});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getMunicipality = async(req, res) => {
    let id = req.params.municipalitiesId;
    try {
        const Municipality = await municipalitiesService.getMunicipality(id);
        res.status(200).send({status: "OK", data: Municipality});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createMunicipality = async(req, res) => {
    const {body} = req;
    try {
        if(!body.nombre){
            throw{status: 406, message: "Ingrese todos los datos para asignar un Municipio a la base de datos"}
        }
        const createdMunicipality = await municipalitiesService.createMunicipality(body.nombre);
        res.status(201).send({status: "OK", data: createdMunicipality});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateMunicipality = async(req, res) => {
    let id_ = req.params.municipalitiesId; 
    try {
        const {nombre} = req.body;
        const updatedMunicipality = await municipalitiesService.updateMunicipality(id_, nombre);
        res.status(200).send({status: "OK", data: updatedMunicipality});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteMunicipality = async(req, res) => {
    let id = req.params.municipalitiesId;

    try {
        const deletedMunicipality = await municipalitiesService.deleteMunicipality(id);
        res.status(200).send({status: "OK", data: deletedMunicipality});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllMunicipalities,
    getMunicipality,
    createMunicipality,
    updateMunicipality,
    deleteMunicipality,
};



