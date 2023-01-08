const db = require('../models');

const getAllInvoiceRequests = async() => {
    try {
        let InvoiceRequests = await db.InvoiceRequest.findAll();
        return InvoiceRequests;
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get users"};
    }
};

const getInvoiceRequests = async(id) => {
    try {
        let InvoiceRequests = await db.InvoiceRequest.findByPk(id);
        return InvoiceRequests;
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get user"};
    }
};

const createInvoiceRequests = async(descuento, fecha_facturacion, fecha_envio, direccion, estado, UserId, SectorId) => {
    try {
        let newInvoiceRequests = await db.InvoiceRequest.create({
            
            descuento, 
            fecha_facturacion, 
            fecha_envio, 
            direccion,
            estado,
            UserId,
            SectorId
        });
        return newInvoiceRequests;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be created"};
    }
};

const updateInvoiceRequests = async(id_,descuento, fecha_facturacion, fecha_envio, direccion, estado, UserId, SectorId) => {
    try {
        let updateInvoiceRequests = await db.InvoiceRequest.update({ 
            descuento, 
            fecha_facturacion, 
            fecha_envio, 
            direccion,
            estado,
            UserId,
            SectorId
        }, {
            where: {
                id:id_,
            }
        });
        return updateInvoiceRequests;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be updated"};
    }
};

const deleteInvoiceRequests = async(id) => {
    try {
        const deletedInvoiceRequests = await db.InvoiceRequest.destroy({
            where: {
                id,
            }
        });
        return deletedInvoiceRequests;
    } catch (error) {
        throw {status: 500, message: error.message  || "User could not be deleted"};
    }
};

module.exports = {
    getAllInvoiceRequests,
    getInvoiceRequests,
    createInvoiceRequests,
    updateInvoiceRequests,
    deleteInvoiceRequests,
};