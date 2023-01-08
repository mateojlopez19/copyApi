const categoryContentEduService = require('../service/CategoryContentEduService');

const getAllCategoryContentEdu = async(req, res) => {
    try {
        const allCategoryContentEdu= await categoryContentEduService.getAllCategoryContentEdu();
        res.status(200).send({status: "OK", data: allCategoryContentEdu});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getCategoryContentEdu = async(req, res) => {
    let id = req.params.cateContenEduId;
    try {
        const categoryContentEdu = await categoryContentEduService.getCategoryContentEdu(id);
        res.status(200).send({status: "OK", data: categoryContentEdu});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createCategoryContentEdu = async(req, res) => {
    const {body} = req;
    try {
        if(!body.nombre){
            throw{status: 406, message: "Ingrese todos los datos para crear una catrgoria para el  contenido pedagogico"};
        }
        const createdCategoryContentEdu = await categoryContentEduService.createCategoryContentEdu( body.nombre);
        res.status(201).send({status: "OK", data: createdCategoryContentEdu});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateCategoryContentEdu = async(req, res) => {
    let id_ = req.params.cateContenEduId; 
    try {
        const {nombre} = req.body;
        if(!body.nombre||!id_){
            throw{status: 406, message: "Ingrese todos los datos para actualizar una catrgoria para el contenido pedagogico"};
        }
        const updatedCategoryContentEdu = await categoryContentEduService.updateCategoryContentEdu(id_,nombre);
        res.status(200).send({status: "OK", data: updatedCategoryContentEdu});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteCategoryContentEdu = async(req, res) => {
    let id = req.params.cateContenEduId;

    try {
        const deletedCategoryContentEdu = await categoryContentEduService.deleteCategoryContentEdu(id);
        res.status(200).send({status: "OK", data: deletedCategoryContentEdu});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllCategoryContentEdu,
    getCategoryContentEdu,
    createCategoryContentEdu,
    updateCategoryContentEdu,
    deleteCategoryContentEdu,
};


