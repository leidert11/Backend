'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    return await queryInterface.bulkInsert("Categories", [
      {
        name: "Celulares",
        description: "Celulares",
        img_url: "./",
        state: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Televisores",
        description: "Televisores",
        img_url: "./",
        state: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Computadores",
        description: "Computadores",
        img_url: "./",
        state: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Audio",
        description: "Audio",
        img_url: "./",
        state: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Categories", null, {});
  }
};
