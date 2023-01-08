const InvoiceRequests = require('../service/InvoiceRequestsService');

const getAllInvoiceRequests = async(req, res) => {
    try {
        const allInvoiceRequests = await InvoiceRequests.getAllInvoiceRequests();
        res.status(200).send({status: "OK", data: allInvoiceRequests});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const getInvoiceRequest = async(req, res) => {
    let id = req.params.userId;
    try {
        const InvoiceRequest = await InvoiceRequests.getInvoiceRequests(id);
        res.status(200).send({status: "OK", data: InvoiceRequest});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const createInvoiceRequests = async(req, res) => {
    const {body} = req;
    try {
        if(!body.fecha_facturacion||!body.fecha_envio||!body.direccion||!body.userId|| !body.SectorId){
            throw{status: 406, message: "Ingrese todos los datos para crear una factura"};
        }
        const createdInvoiceRequests = await InvoiceRequests.createInvoiceRequests( body.descuento, body.fecha_facturacion, body.fecha_envio, body.direccion, body.estado, body.userId, body.SectorId);
        res.status(201).send({status: "OK", data: createdInvoiceRequests});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const updateInvoiceRequests = async(req, res) => {
    let id_ = req.params.userId; 
    try {
        const { descuento, fecha_facturacion, fecha_envio, direccion, estado, userId, SectorId} = req.body;
        if(!descuento||!fecha_facturacion||!fecha_envio||!direccion||!userId||!SectorId){
            throw{status: 406, message: "Ingrese todos los datos para actualizar una factura"};
        }
        const updateInvoiceRequests = await InvoiceRequests.updateInvoiceRequests(id_, descuento, fecha_facturacion, fecha_envio, direccion, estado, userId, SectorId);
        res.status(200).send({status: "OK", data: updateInvoiceRequests});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

const deleteInvoiceRequests = async(req, res) => {
    let id = req.params.userId;

    try {
        const deleteInvoiceRequests = await InvoiceRequests.deleteInvoiceRequests(id);
        res.status(200).send({status: "OK", data: deleteInvoiceRequests});
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED", data: {error: error.message}});
    }
};

module.exports = {
    getAllInvoiceRequests,
    getInvoiceRequest,
    createInvoiceRequests,
    updateInvoiceRequests,
    deleteInvoiceRequests,
};
