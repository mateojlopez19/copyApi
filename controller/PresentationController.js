const PresentationService = require('../service/PresentationService');

const getAllPresentation = async(req, res) => {
    try {
        const allPresentation = await PresentationService.getAllPresentation();
        res.status(200).send({status: "OK", data: allPresentation});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getPresentation = async(req, res) => {
    let id = req.params.PresentationId;
    try {
        const Presentation = await PresentationService.getPresentation(id);
        res.status(200).send({status: "OK", data: Presentation});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createPresentation = async(req, res) => {
    const {body} = req;
    try {
        if(body.nombre){
            throw{status: 406, message: "Ingrese todos los datos para crear la presentacion "};
        }
        const createdPresentation = await PresentationService.createPresentation(body.nombre);
        res.status(201).send({status: "OK", data: createdPresentation});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updatePresentation = async(req, res) => {
    let id_ = req.params.PresentationId; 
    try {
        const {nombre} = req.body;
        if(body.nombre){
            throw{status: 406, message: "Ingrese todos los datos para actualizar la presentacion "};
        }
        const updatePresentation = await PresentationService.updatePresentation(id_,nombre,);
        res.status(200).send({status: "OK", data: updatePresentation});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deletePresentation = async(req, res) => {
    let id = req.params.PresentationId;

    try {
        const deletePresentation = await PresentationService.deletePresentation(id);
        res.status(200).send({status: "OK", data: deletePresentation});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllPresentation,
    getPresentation,
    createPresentation,
    updatePresentation,
    deletePresentation,
};

