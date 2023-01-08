'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('ProductIncludesPresentations', 
    { 
      fields:['ProductId'],
      type:'foreign key',
      name:'Products_ProductIncludesPresentations_association',
      references:{
       table: 'Products',
       field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });
     
    await queryInterface.addConstraint('ProductIncludesPresentations', 
    { 
      fields:['PresentationId'],
      type:'foreign key',
      name:'Presentation_ProductIncludesPresentations_association',
      references:{
       table: 'Presentations',
       field: 'id',
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.removeConstraint('ProductIncludesPresentations','Products_ProductIncludesPresentations_association');
    await queryInterface.removeConstraint('ProductIncludesPresentations','Presentation_ProductIncludesPresentations_association');
     
  }
};
