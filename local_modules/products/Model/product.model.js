const { DataTypes } = require("sequelize");
const { connectionSqlz } = require("../../../configration/config");
const User = require("../../users/Model/user.model");



const Product = connectionSqlz.define(
  'product',
  {
    id:
    {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name:
    {
      type:DataTypes.STRING(100),
      allowNull: false
    },
    price:
    {
      type:DataTypes.STRING(200)
    },
    description:
    {
      type:DataTypes.STRING(100)
    }
  },
  {
    timeStamps: true
  }
);

User.hasMany(Product , {foreignKey: 'createdBy'});



module.exports = Product;