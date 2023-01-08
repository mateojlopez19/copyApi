const userService = require('../service/UserService');

const getAllUsers = async(req, res) => {
    try {
        const allUsers = await userService.getAllUsers();
        res.status(200).send({status: "OK", data: allUsers});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getUser = async(req, res) => {
    let id = req.params.userId;
    try {
        const user = await userService.getUser(id);
        res.status(200).send({status: "OK", data: user});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createUser = async(req, res) => {
    
    try {
        const {body} = req;
        if(body.cedula && body.telefono && body.direccion && body.correo_electronico && body.nombre_apellido && body.contrasena && body.TypeUser && body.MunicipalityId){
            const createdUser = await userService.createUser(body.cedula, body.telefono, body.direccion, body.correo_electronico, body.nombre_apellido, body.contrasena, body.puntos_canje, body.TypeUserId, body.MunicipalityId);
            res.status(201).send({status: "OK", data: createdUser});
        }else{
            throw {status: 406, message: "Ingrese todos los datos para crear un nuevo usuario"};
        }
        
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateUser = async(req, res) => {
    let id_ = req.params.userId;
     
    try {
        const {cedula, telefono, direccion, correo_electronico, nombre_apellido, contrasena, puntos_canje, TypeUserId, MunicipalityId, productosFavoritos, eliminarproductosfavoritos} = req.body;
        const updateUser = await userService.updateUser(id_, cedula, telefono, direccion, correo_electronico, nombre_apellido, contrasena, puntos_canje, TypeUserId, MunicipalityId, productosFavoritos,eliminarproductosfavoritos);
        res.status(200).send({status: "OK", data: updateUser});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteUser = async(req, res) => {
    let id = req.params.userId;

    try {
        const deleteUser = await userService.deleteUser(id);
        res.status(200).send({status: "OK", data: deleteUser});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};



