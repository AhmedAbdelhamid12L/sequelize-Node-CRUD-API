const User = require('../Model/user.model');
const {Op} = require('sequelize');


const allUsers = async (req, res) => {
  try {
    const data = await User.findAll({})
    res.json({ message: 'success', data })
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

const addUser = async (req, res) => {
  const { username, email, password, age, address} = req.body;
  try {
    const data = await User.create({username, email, password, age, address})
    res.json({ message: 'added success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

const updateUser = async (req, res) => {
  const {id} = req.params;
  const { username, email, password, age, address} = req.body;
  try {
    const data = await User.update({username, email, password, age, address} ,{ where: { id, }, });
    res.json({ message: 'updated success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

const deleteUser = async (req, res) => {
  const {id} = req.params;
  try {
    const data = await User.destroy({ where: { id, }, });
    res.json({ message: 'deleted success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

// get User Age Between 20 And 25

const getUserAgeBetween20A25 = async (req, res) => {
  try {
    const data = await User.findAll({ 
      where: { 
        age: {
          [Op.between]: [20, 25],
        },
      }, 
    });
    res.json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

// get User Name Start with 'ma'

const getUserNameStartma = async (req, res) => {
  try {
    const data = await User.findAll({ 
      where: { 
        username: {
          [Op.like]: 'ma%',
        },
      }, 
    });
    res.json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

// get User Age Less than 25

const getUserAgeLess25 = async (req, res) => {
  try {
    const data = await User.findAll({ 
      where: { 
        age: {
          [Op.lt]: 25,
        },
      }, 
    });
    res.json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

// get User Age Greater than 25

const getUserAgeGreater25 = async (req, res) => {
  try {
    const data = await User.findAll({ 
      where: { 
        age: {
          [Op.gt]: 25,
        },
      }, 
    });
    res.json({ message: 'success', data });
  } catch (error) {
    res.json({ message: 'error', error })
  }
}

module.exports = {
  allUsers,
  addUser,
  updateUser,
  deleteUser,
  getUserAgeBetween20A25,
  getUserNameStartma,
  getUserAgeLess25,
  getUserAgeGreater25
}