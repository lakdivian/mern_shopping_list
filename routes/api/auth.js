const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//  User Module
const User = require('../../models/User');

// @route  Post request to api/auth
// @desc   Registering a new user
// @access Public
router.post('/', (req, res) => {

    const { email,password } = req.body;

    // Simple validation
    if(!email || !password){
      return res.status(400).json({msg: 'Please enter all fields'});
    }

    // Check for existing users
    User.findOne({ email })
        .then(user => {
          if(!user){
            return res.status(400).json({msg: 'User Doesn\'t Exists'});
          }

         // Validate Password
         bcrypt.compare(password,user.password)
               .then(isMatch => {
                 if(!isMatch)
                    return res.status(400).json({ msg: 'Invalid credentials' });
                 jwt.sign(
                   { id: user.id },
                   config.get('jwtSecret'),
                   { expiresIn: 3600 },
                   (err,token) => {
                     res.json({
                       token,
                       user: {
                         id: user.id,
                         name: user.name,
                         email: user.email
                       }
                     })
                   }
                 )
               })
             });
});

// @route  Get request to api/auth/user
// @desc   Registering a new user
// @access Public
router.get('/user', auth, (req,res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})

module.exports = router;
