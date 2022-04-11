const Product = require('../Model/product.model');
const {Op} = require('sequelize');
const User = require('../../users/Model/user.model');


const allProducts = async (req, res) => {
  try {
    const data = await Product.findAll({})
    res.json({ message: 'success', data })
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

const addProduct = async (req, res) => {
  const { name, price, description , createdBy} = req.body;
  try {
    const data = await Product.create({name, price, description , createdBy})
    res.json({ message: 'added success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

const updateProduct = async (req, res) => {
  const {id} = req.params;
  const { name, price, description , createdBy} = req.body;
  try {
    const data = await Product.update({name, price, description , createdBy} ,{ where: { id, }, });
    res.json({ message: 'updated success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

const deleteProduct = async (req, res) => {
  const {id} = req.params;
  try {
    const data = await Product.destroy({ where: { id, }, });
    res.json({ message: 'deleted success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

// get Product By Name

const getProductByName = async (req, res) => {
  const {name} = req.body;
  try {
    const data = await User.findAll({ 
      where: { 
        name: {
          [Op.like]: `${name}`,
        },
      }, 
    });
    res.json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

// get Product By id

const getProductById = async (req, res) => {
  // const {id} = req.body;
  try {
    const data = await User.findAll({ 
      where: { 
        id,
      },
      include:
      {
        model: User,
        attributes: ['username' , 'email']
      }
    });
    res.json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}


module.exports = {
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
  getProductById
}