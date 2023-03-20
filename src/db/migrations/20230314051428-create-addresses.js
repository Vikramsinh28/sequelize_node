'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER ,

        references: {
          model: 'Customers',
          key: 'id'
        } ,
        onDelete: 'CASCADE',
      },
      address_line_1: {
        type: Sequelize.STRING(256) ,
        allowNull: false ,
        validate: {
          len: [2, 256],

        }
      },
      address_line_2: {
        type: Sequelize.STRING(256) ,
        allowNull: true ,

        validate: {
          len: [2, 256],
        } 
      },
      area: {
        type: Sequelize.STRING(64) ,
        allowNull: false ,

        validate: {
          len: [2, 64],
        }
      },
      city: {
        type: Sequelize.STRING(64) ,
        allowNull: false ,
        validate: {
          len: [2, 64],
        }
      },
      state: {
        type: Sequelize.STRING(64) ,
        allowNull: false ,
        validate: {
          len: [2, 64],
        }
      },
      country: {
        type: Sequelize.STRING(64) ,
        allowNull: false ,
        validate: {
          len: [2, 64],
        }
      },
      postal_code: {
        type: Sequelize.STRING(8) ,
        allowNull: false ,
        validate: {
          len: [2, 8],
        }
      },
      landmark: {
        type: Sequelize.STRING(64) ,
        validate: {
          len: [2, 64],
        }
      },
      tag: {
        type: Sequelize.STRING(8) ,
        allowNull: false ,
        defaultValue : 'home' ,

        validate: {
          isIn : [['home', 'office', 'other']]
        }
      },
      is_default: {
        type: Sequelize.BOOLEAN ,
        defaultValue: false ,

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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};