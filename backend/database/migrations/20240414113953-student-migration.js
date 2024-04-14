"use strict";
const { DataTypes } = require("sequelize");
const table = "students";

module.exports = {
  up: async function (queryInterface) {
    await queryInterface.createTable(table, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fkUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      semester: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      registrationNumber:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      registeredCourses:{
          type: DataTypes.JSON,
          allowNull: false,
      },
      createdAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable(table);
  },
};
