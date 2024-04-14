"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes)=>{
    const Course = sequelize.define("courses", {
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
    Course.beforeCreate((course) => {
      course.dataValues.createdAt = moment().unix();
      course.dataValues.updatedAt = moment().unix();
    });
    Course.beforeUpdate((course) => {
      course.dataValues.updatedAt = moment().unix();
    });

    return Course;
}