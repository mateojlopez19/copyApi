const Brands = require('../service/BrandsService');

const getAllBrands = async(req, res) => {
    try {
        const allBrands = await Brands.getAllBrands();
        res.status(200).send({status: "OK", data: allBrands});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getBrand = async(req, res) => {
    let id = req.params.userId;
    try {
        const Brand = await Brands.getBrand(id);
        res.status(200).send({status: "OK", data: Brand});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createBrands = async(req, res) => {
    const {body} = req;
    try {
        if(body.nombre && body.descripcion && body.UserId){
            const createdBrands = await Brands.createBrands(body.nombre, body.descripcion, body.imagen==null, body.estado==true, body.UserId);
            res.status(201).send({status: "OK", data: createdBrands});
        }else{
            throw{status: 406, message: "Ingrese todos los datos para crear una nueva marca asociada"};
        }
        
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateBrands = async(req, res) => {
    let id_ = req.params.userId; 
    try {
        const {nombre, imagen, estado, descripcion, UserId} = req.body;
        if(nombre && descripcion){
            const updatedBrands = await Brands.updateBrands(id_ ,nombre, descripcion, imagen, estado, UserId);
            res.status(200).send({status: "OK", data: updatedBrands});
        }else{
            throw{status: 406, message: "Ingrese todos los datos para actualizar una marca asociada"};
        }
        
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteBrands = async(req, res) => {
    let id = req.params.userId;

    try {
        const deletedBrands = await Brands.deleteBrands(id);
        res.status(200).send({status: "OK", data: deletedBrands});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllBrands,
    getBrand,
    createBrands,
    updateBrands,
    deleteBrands,
};
