'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Products", [
      {
        idcategory: 1,
        name: "Producto",
        features: "Sit in nostrud nostrud consectetur deserunt incididunt do ea pariatur do pariatur mollit. Ad culpa ad cillum ullamco proident exercitation ex ea anim in do. Ipsum incididunt dolore ex do elit tempor ad quis culpa nulla.",
        img_url: "./",
        stock: 200,
        state: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  
    ]);
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Products", null, {});
  }
};
