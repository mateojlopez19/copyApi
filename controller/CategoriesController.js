const categoryService = require('../service/CategoriesService');

const getAllCategories = async(req, res) => {
    try {
        const allCategories = await categoryService.getAllCategories();
        res.status(200).send({status: "OK", data: allCategories});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getCategory = async(req, res) => {
    let id = req.params.categoryId;
    try {
        const category = await categoryService.getCategory(id);
        res.status(200).send({status: "OK", data: category});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createCategory = async(req, res) => {
    const {body} = req;
    try {
        if(!body.nombre){
            throw{status: 406, message: "Ingrese todos los datos para crear una catrgoria para los productos"};
        }
        const createdCategory = await categoryService.createCategory( body.nombre);
        res.status(201).send({status: "OK", data: createdCategory});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateCategory = async(req, res) => {
    let id_ = req.params.categoryId; 
    try {
        const { nombre} = req.body;
        if(!body.nombre){
            throw{status: 406, message: "Ingrese todos los datos para actualizar una catrgoria para los productos"};
        }
        const updatedCategory = await categoryService.updateCategory(id_,  nombre);
        res.status(200).send({status: "OK", data: updatedCategory});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteCategory = async(req, res) => {
    let id = req.params.categoryId;

    try {
        const deletedCategory = await categoryService.deleteCategory(id);
        res.status(200).send({status: "OK", data: deletedCategory});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
};



