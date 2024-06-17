'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Nguyen',
      lastName: 'Tiep',
      address: 'VN',
      gender: 1,
      roleId: '15',
      phonenumber: '0987',
      positionId: '10',
      image: 'text',

      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
