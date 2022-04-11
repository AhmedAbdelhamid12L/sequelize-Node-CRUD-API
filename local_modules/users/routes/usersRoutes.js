const router = require('express').Router();
const {
  allUsers,
  addUser,
  updateUser,
  deleteUser,
  getUserAgeBetween20A25,
  getUserNameStartma,
  getUserAgeLess25,
  getUserAgeGreater25
} = require('../controller/usersController');



router.get('/users', allUsers)
router.post('/adduser', addUser)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteUser)
router.get('/getuseragebetween20a25', getUserAgeBetween20A25)
router.get('/getusernamestartma', getUserNameStartma)
router.get('/getuserageless25', getUserAgeLess25)
router.get('/getuseragegreater25', getUserAgeGreater25)


module.exports = router;