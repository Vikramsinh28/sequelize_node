'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(512) ,
        allowNull: false ,
        defaultValue : 'Untitled' ,
      },
      amount: {
        type: Sequelize.FLOAT ,
        allowNull: false ,
      },
      discount_type: {
        type: Sequelize.STRING(16) ,
        allowNull: false ,
        defaultValue: 'NONE' ,
        validate: {
          isIn: [['NONE', 'PERCENTAGE', 'AMOUNT']]
        }
      },
      discount_amount: {
        type: Sequelize.FLOAT ,
        allowNull: false ,
        defaultValue: 0 ,

      },
      avatar_image: {
        type: Sequelize.STRING(512) ,
        allowNull: false ,

      },
      images: {
        type: Sequelize.BLOB ,
        allowNull: false ,
      },
      short_description: {
        type: Sequelize.STRING(256) ,
        validate: {
          len: [2, 256],
        }
      },
      description: {
        type: Sequelize.TEXT ,
        allowNull: false ,
        
      },
      is_active: {
        type: Sequelize.BOOLEAN ,
        allowNull: false ,
        defaultValue: true
      },
      deleted_at: {
        type: Sequelize.DATE ,
        allowNull: true ,
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
    }, {
      paranoid : true ,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
