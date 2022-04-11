const express = require('express');
const app = express();
const usersRoutes = require('./local_modules/users/routes/usersRoutes.js');
const productRoutes = require('./local_modules/products/routes/productRoutes.js')
const { createTables } = require('./configration/config.js');


app.use(express.json());

createTables();
app.use(usersRoutes);
app.use(productRoutes);



app.listen(5000, () => { console.log('App listening in port 5000!') });