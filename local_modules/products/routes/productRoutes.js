const router = require('express').Router();
const {
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
  getProductById
} = require('../controller/productController');



router.get('/products', allProducts)
router.post('/addproduct', addProduct)
router.put('/updateproduct/:id', updateProduct)
router.delete('/deleteproduct/:id', deleteProduct)
router.post('/getproductbyname', getProductByName)
router.get('/getproductbyid/:id', getProductById)



module.exports = router;