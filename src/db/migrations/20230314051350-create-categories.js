'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(255) ,
        allowNull: false,
        isUnique: true ,
        validate: {
          len: [2, 255],
        }
      },
      parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Categories',
          key: 'id'
        } ,
        onDelete: 'CASCADE',
      },
      is_active: {
        type: Sequelize.BOOLEAN ,
        defaultValue: true 
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal('NULL')

      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });


  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Categories');
  }
};
