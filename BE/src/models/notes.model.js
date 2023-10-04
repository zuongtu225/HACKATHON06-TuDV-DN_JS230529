const sequelize = require("../configs/connect.DB");

const { DataTypes } = require("sequelize");

const Notes = sequelize.define("notes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  note: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Notes;
