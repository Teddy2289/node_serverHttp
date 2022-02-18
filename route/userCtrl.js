var bcrypt =  require('bcrypt');
var jwt = require('jsonwebtoken');
var models = require('../models');

//ROUTE

module.exports = {
    register: function (req,res) {
        //Params

            var email = req.body.email;
            var username = req.body.username;
            var password = req.body.password;
            var bio = req.body.bio;

            if (email == null || username == null || password == null){
                return res.status(404).json({'error':'missing parametter'});
            }

            //verifier si un email n'existe pas deja dans la base
        models.User.findOne({
            attributes: ['email'],
            where:{email:email}
        })
            .then(function (Userfund) {
                
            })
            .catch(function (err) {
                
            })
        },
    login:function (req,res) {

    }
}