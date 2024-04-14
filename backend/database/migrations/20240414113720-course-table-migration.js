"use strict";
const { DataTypes } = require("sequelize");
const table = "courses";

module.exports = {
  up: async function (queryInterface) {
    await queryInterface.createTable(table, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      courseId: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subjectArea:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preRequisites: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      toolsOrSoftwares: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      externalMaterial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reviewCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      noOfRegisteredStudents:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      paragraphs:{
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
