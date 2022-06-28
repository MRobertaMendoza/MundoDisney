'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imagen: {
        
        type: Sequelize.STRING,
        allowNull: false,
      },
      titulo: {
      
        type: Sequelize.STRING,
        allowNull: false,
      },
      fechaCreacion: {
       
        type: Sequelize.STRING,
        allowNull: false,
      },
      calificacion: {
       
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};