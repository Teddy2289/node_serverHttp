var express =  require('express');
var userCntrl = require('./route/userCtrl');

//ROUTER

exports.router = (function () {
    var apiRouter = express.Router();

    //USER ROUTE
    apiRouter.route('/users/register/').post(userCntrl.register);
    apiRouter.route('/users/login/').post(userCntrl.login);
    return apiRouter();
})();