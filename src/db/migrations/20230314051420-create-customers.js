'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(255) ,
        validate: {
          len: [2, 255],
          // isAlpha: true
        }
      },
      last_name: {
        type: Sequelize.STRING(255) ,
        validate: {
          len: [2, 255],
          // isAlpha: true

        }
      },
      primary_mobile_number: {
        type: Sequelize.STRING(16) ,

        allowNull: false ,
        isUnique: true ,
        validate: {
          len : 10 
        } 
      },
      primary_email: {
        type: Sequelize.STRING(255) ,
        allowNull: false ,
        isUnique: true ,  
        validate: {
          isEmail: true
        }
      },
      username: {
        type: Sequelize.STRING(64) ,
        isUnique: true ,
        allowNull: false ,
        validate: {
          len: [2, 64],
          // isAlphanumeric: true
        }
      },
      password: {
        type: Sequelize.TEXT ,
        allowNull: false ,
        validate: {
          is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,12}$/
        }
      },
      date_of_birth: {
        type: Sequelize.DATEONLY ,

        allowNull: false ,
        validate: {
          isDate: true
        }
      },
      secondry_mobile_number: {
        type: Sequelize.STRING(16) ,
        allowNull: true ,
        isUnique: true ,
        validate: {
          len : 10
        }
      },
      secondry_email: {
        type: Sequelize.STRING(255) ,
        allowNull: true ,
        isUnique: true ,
        validate: {
          isEmail: true ,
        }
      },
      is_active: {
        type: Sequelize.BOOLEAN ,
        allowNull: false ,
        defaultValue: true ,
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
    await queryInterface.dropTable('Customers');
  }
};