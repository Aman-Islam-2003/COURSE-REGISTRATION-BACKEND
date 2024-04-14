"use strict";
const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("students", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    fkUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

  Student.beforeCreate((student) => {
    student.dataValues.createdAt = moment().unix();
    student.dataValues.updatedAt = moment().unix();
  });
  Student.beforeUpdate((student) => {
    student.dataValues.updatedAt = moment().unix();
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Users, {
      foreignKey: "fkUserId",
      as: "user",
    });
  };

  return Student;
};
