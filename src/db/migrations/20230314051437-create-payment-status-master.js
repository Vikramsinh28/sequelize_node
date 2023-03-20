'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payment_Status_Master', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(64) ,
        allowNull: false,
        isUnique: true ,
        validate: {
          len: [2, 64],
        }
      },
      is_active: {
        type: Sequelize.BOOLEAN ,
        defaultValue: true ,

      },
      deleted_at: {
        type: Sequelize.DATE ,
        allowNull: true,
        defaultValue: Sequelize.literal('NULL')
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE ,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE ,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Payment_Status_Master');
  }
};