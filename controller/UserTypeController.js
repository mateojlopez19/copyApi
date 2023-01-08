const userTypeService = require('../service/UserTypeService');

const getAllTypeUsers = async(req, res) => {
    try {
        const allTypeUsers = await userTypeService.getAllTypeUsers();
        res.status(200).send({status: "OK", data: allTypeUsers});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getTypeUser = async(req, res) => {
    let id = req.params.userId;
    try {
        const TypeUsers = await userTypeService.getTypeUser(id);
        res.status(200).send({status: "OK", data: TypeUsers});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createTypeUser = async(req, res) => {
    try {
        const {body} = req;
        if(!body.nombre_usuario){
            throw{status: 406, message: "Ingrese todos los datos para crear un nuevo tipo de usuario"}
        }
        const createdTypeUsers = await userTypeService.createTypeUser(body.nombre_usuario);
        res.status(201).send({status: "OK", data: createdTypeUsers});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateTypeUser = async(req, res) => {
    let id = req.params.userId; 
    try {
        const {nombre_usuario} = req.body;
        if(!nombre_usuario||!id){
            throw{status: 406, message: "Ingrese todos los datos para crear un nuevo tipo de usuario"}
        }
        const updateTypeUsers = await userTypeService.updateTypeUser(id,nombre_usuario);
        res.status(200).send({status: "OK", data: updateTypeUsers});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteTypeUser = async(req, res) => {
    let id = req.params.userId;

    try {
        const deleteTypeUsers = await userTypeService.deleteTypeUser(id);
        res.status(200).send({status: "OK", data: deleteTypeUsers});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllTypeUsers,
    getTypeUser,
    createTypeUser,
    updateTypeUser,
    deleteTypeUser,
};



