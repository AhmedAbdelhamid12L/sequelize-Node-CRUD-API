
//******  connection using sequelize ******//

const Sequelize = require('sequelize');

const connectionSqlz = new Sequelize('MALL', 'root', 'Abcd#1234', {
  host: 'localhost',
  dialect: 'mysql'
})

const createTables = () => {
  connectionSqlz.sync().then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  })
}

module.exports = {
  connectionSqlz,
  createTables
}