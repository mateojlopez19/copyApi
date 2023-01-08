const PedagogicalContent = require('../service/PedagogicalContentService');

const getAllPedagogicalContents = async(req, res) => {
    try {
        const allPedagogicalContent = await PedagogicalContent.getAllPedagogicalContents();
        res.status(200).send({status: "OK", data: allPedagogicalContent});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getPedagogicalContent = async(req, res) => {
    let id = req.params.userId;
    try {
        const PedagogicalContents = await PedagogicalContent.getPedagogicalContent(id);
        res.status(200).send({status: "OK", data: PedagogicalContents});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createPedagogicalContent = async(req, res) => {
    const {body} = req;
    try {
        if(!body.titulo||!body.material_audiovisual||!body.enlace_informativo||!body.descripcion||!body.CategoryContentEduId){
            throw{status: 406, message: "Ingrese todos los datos para asignar un contenido pedagogico a la base de datos"}
        }
        const createdPedagogicalContent = await PedagogicalContent.createPedagogicalContent(body.titulo, body.material_audiovisual, body.enlace_informativo, body.descripcion, body.CategoryContentEduId);
        res.status(201).send({status: "OK", data: createdPedagogicalContent});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updatePedagogicalContent = async(req, res) => {
    let id_ = req.params.userId; 
    try {
        const {titulo, material_audiovisual, enlace_informativo, descripcion, CategoryContentEduId} = req.body;
        if(!body.titulo||!body.material_audiovisual||!body.enlace_informativo||!body.descripcion||!body.CategoryContentEduId){
            throw{status: 406, message: "Ingrese todos los datos para actualizar un contenido pedagogico a la base de datos"}
        }
        const updatePedagogicalContent = await PedagogicalContent.updatePedagogicalContent(id_,titulo, material_audiovisual, enlace_informativo, descripcion, CategoryContentEduId);
        res.status(200).send({status: "OK", data: updatePedagogicalContent});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deletePedagogicalContent = async(req, res) => {
    let id = req.params.userId;

    try {
        const deletePedagogicalContent = await PedagogicalContent.deletePedagogicalContent(id);
        res.status(200).send({status: "OK", data: deletePedagogicalContent});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllPedagogicalContents,
    getPedagogicalContent,
    createPedagogicalContent,
    updatePedagogicalContent,
    deletePedagogicalContent,
};
