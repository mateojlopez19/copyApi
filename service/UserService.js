
const db = require('../models');

const getAllUsers = async() => {
    try {
        let users = await db.User.findAll({
            attributes:{
                exclude:[
                    "contrasena",
                    "TypeUserId",
                    "MunicipalityId",
                    "createdAt",
                    "updatedAt"
                ]
            },
            include:[{
                model:db.TypeUser,
                required:true,
                attributes:["nombre_usuario"],
            }, 
            {
                model:db.Municipality,
                required:true,
                attributes:["nombre"],
            },
            ]
        });
        return users ? users: [];
    } catch (error) {
        throw {status: 400, message: error.message || "failed to get users"};
    }
};

const getUser = async(id) => {
    try {
        let usertype = await db.User.findByPk(id);//obtenemos la informacion de todo el usuario en cuestion
        const {TypeUserId} = usertype;  // de toda la informacion obtenida excluimos el TypeUserId
        console.log(TypeUserId);
        if(TypeUserId==2){
            let user = await db.User.findByPk(id, {
                attributes:{
                    exclude:[
                        "contrasena",
                        "TypeUserId",
                        "MunicipalityId",
                       
                    ]
                },
                include:[
                    {
                    model:db.Municipality,//se selecciona la tabla que se desea relacionar
                    required:true,//se obliga a traer la informacion de la tabla
                    attributes:["nombre"],
                },
                {
                    model:db.Product,
                    required:false,
                    attributes:["nombre","descripcion"],
                    through:{
                        attributes:[]
                    }
                },
                {
                    model:db.InvoiceRequest,
                    required:false,
                    attributes:["id","fecha_facturacion","estado"],
                    include:{
                        model:db.Product,
                        required:true,
                        attributes:{
                            exclude:[]
                        },
                        through:{
                            attributes:[]
                        }
                    }
                }
                ]
            });
            return user;
        }else{
            let user = await db.User.findByPk(id, {
                attributes:{
                    exclude:[
                        "TypeUserId",
                        "MunicipalityId",
                        "contrasena"
                    ]
                },
                include:[{
                    model:db.Municipality,//se selecciona la tabla que se desea relacionar
                    required:true,//se obliga a traer la informacion de la tabla
                    attributes:["nombre"],
                },
                {
                    model:db.TypeUser,
                    required:true,
                    attributes:["nombre_usuario"],
                },{
                    model:db.Brand,
                    required:true,
                    attributes:["id","nombre","estado"],
                    include:[{
                        model:db.Product,
                        required:true,
                        attributes:["id", "nombre"],
                    }]
                }]
        });
            return user;
        }
    } catch (error) {
        throw {status: 500, message: error.message || "failed to get user"};
    }
};

const createUser = async(cedula, telefono, direccion, correo_electronico, nombre_apellido, contrasena, puntos_canje="NULL", TypeUserId, MunicipalityId) => {
    try {
        let newUser = await db.User.create({
            cedula,
            telefono,
            direccion,
            correo_electronico,
            nombre_apellido,
            contrasena,
            puntos_canje,
            TypeUserId,
            MunicipalityId
        });
        return newUser;
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be created"};
    }
};

const updateUser = async(id_, cedula, telefono, direccion, correo_electronico, nombre_apellido, contrasena, puntos_canje, TypeUserId, MunicipalityId, productosFavoritos,eliminarproductosfavoritos) => {
    try {
        let usertype = await db.User.findByPk(id_);
        const {TypeUserId} = usertype; 
        console.log(TypeUserId);
        if(TypeUserId==2){
            let updateUser = await db.User.update({
                cedula,
                telefono,
                direccion,
                correo_electronico,
                nombre_apellido,
                contrasena,
                MunicipalityId
            }, {
                where: {
                    id:id_,
                }
            });
            console.log('eliminar',eliminarproductosfavoritos);
            console.log('favoritos',productosFavoritos)
            if(productosFavoritos){
                console.log("entre a crear")
                for(let i = 0; i < productosFavoritos.length; i++){
                    let obtenerPoductos = await db.UserFavoritesProduct.findAll({
                        where:{
                            UserId:id_,
                            ProductId: productosFavoritos[i]
                        }
                    })
                    const {ProductId} = obtenerPoductos   
                    console.log(ProductId)
                    console.log(obtenerPoductos)
                    if(obtenerPoductos==""){
                        console.log("entre a la comparacion")
                        let newproductosFavoritos = await db.UserFavoritesProduct.create({
                            UserId : id_,
                            ProductId : productosFavoritos[i],
                        });
                    }
                 }
            };
            if(eliminarproductosfavoritos){
            console.log("entre a eliminar")
                for(let i = 0; i< eliminarproductosfavoritos.length; i++){
                    let deleteProducts = await db.UserFavoritesProduct.destroy({
                      where:{
                        UserId: id_,
                        ProductId: eliminarproductosfavoritos[i]
                      }
                    })
                    console.log(eliminarproductosfavoritos[i])
                }
            } 
            return updateUser;
        }else if(TypeUserId==3){
            let updateUser = await db.User.update({
                cedula,
                telefono,
                direccion,
                correo_electronico,
                nombre_apellido,
                contrasena,
                puntos_canje,
                MunicipalityId
            }, {
                where: {
                    id:id_,
                }
            });
        }
      
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be updated"};
    }
};

const deleteUser = async(id) => {
    try {
        let user = await db.User.findByPk(id);//obtenemos la informacion de todo el usuario en cuestion
        const {TypeUserId} = user;  // de toda la informacion obtenida excluimos el TypeUserId
        console.log(TypeUserId);
          if(TypeUserId==2){  //trabajamod con el id obtenido para eliminar especificamente los registros asociados de un usuario registrado
            const deletedproductosFavoritos = await db.UserFavoritesProduct.destroy({
                where: {
                    UserId:id,
                }
            }); 
           
            let factura = await db.InvoiceRequest.findAll({
                where:{
                    UserId:id
                }
            });
            /*const {...estructuraFact} = factura; //desestructurando el json factura
            /*console.log(estructuraFact[0].dataValues.id); // accediendo a valores desestructurados
            console.log(estructuraFact);  */            
                //console.log(estructuraFact[0].dataValues.id); 
                //console.log(item.dataValues.id);
            for(let item of factura) {
                 const deletedInvoiceRequestIncludesProduct = await db.InvoiceRequestIncludesProduct.destroy({
                    where: {
                        InvoiceRequestId:item.dataValues.id,
                    }
                });
            }
            console.log("id", id);
            const deletedInvoiceRequest = await db.InvoiceRequest.destroy({
                where: {
                    UserId:id,
                }
            });  
            const deletedUser = await db.User.destroy({
                where: {
                    id,
                }
            });   
            
        }else if(TypeUserId==3) {
            const getBrands = await db.Brand.findAll({
                where: {
                    UserId:id,
                }
            }); 
            for(let item of getBrands) {
                const getProduct = await db.Product.findAll({
                    where: {
                        BrandId:item.dataValues.id,
                    }
                }); 
                for(let item1 of getProduct){
                    const getProductPhotos = await db.ProductPhoto.destroy({
                        where: {
                            ProductId:item1.dataValues.id,
                        }
                    }); 
                }
                for(let item2 of getProduct){
                    const getProductAssociation = await db.ProductIncludesPresentation.destroy({
                        where: {
                            ProductId:item2.dataValues.id,
                        }
                    })
                }
                for (let item3 of getProduct){
                    const deletedproductosFavoritos = await db.UserFavoritesProduct.destroy({
                        where: {
                            ProductId:item3.dataValues.id,
                        }
                    }); 
                }
                for (let item4 of getProduct){
                    const deletedInvoiceRequestIncludesProduct = await db.InvoiceRequestIncludesProduct.destroy({
                        where: {
                            ProductId:item4.dataValues.id,
                        }
                    }); 
                }
                const deletedProduct = await db.Product.destroy({
                    where: {
                        BrandId:item.dataValues.id,
                    }
                }); 
               //(estructuraFact[0].dataValues.id); 
               //console.log(item.dataValues.id);
            }
            const deletedBrand = await db.Brand.destroy({
                where: {
                    UserId:id,
                }   
            }); 
            const deletedUser = await db.User.destroy({
                where: {
                    id,
                }   
            }); 
            console.log(getBrands)
        }  
        return deleteUser;
        
    } catch (error) {
        throw {status: 500, message: error.message  || "User could not be deleted"};
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};