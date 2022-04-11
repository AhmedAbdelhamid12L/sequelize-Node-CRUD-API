const { DataTypes } = require("sequelize");
const { connectionSqlz } = require("../../../configration/config");

const User = connectionSqlz.define(
  'user',
  {
    id:
    {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username:
    {
      type:DataTypes.STRING(100),
      allowNull: false
    },
    email:
    {
      type:DataTypes.STRING(100)
    },
    password:
    {
      type:DataTypes.STRING(200)
    },
    age:
    {
      type:DataTypes.INTEGER
    },
    address:
    {
      type:DataTypes.STRING(100)
    }
  },
  {
    timeStamps: true
  }
);

module.exports = User;