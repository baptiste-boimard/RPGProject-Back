require('dotenv').config();
const {dataMapperUser} = require('../models/dataMapper');
const bcrypt = require('bcrypt');

/**
 * @type {Object}
 * @export loginController
 * @namespace adminController
 */
const loginController =  {

  /** The method allows you to log as an user
   * @memberof loginController
   * @method login
   * @param {Object} req.body
   * @param {Object} routers
   * @returns {Object} Return response to login
   */
  async login(req,res,next) {
    console.log(req.body);
    if(req.body.email == 'dd@dd' && req.body.password == 'dd') {
      const user = 'coucou';
      res.json({user});
    } else {
      const err = new Error('Mauvais truc')
      next(err);
    }
  },

  /** The method allows you to signup a new user
   * @memberof loginController
   * @method signup
   * @param {Object} req.body
   * @param {Object} routers
   * @returns {Object} Return response to signup
   */
  async signup(req,res,next) {

    if(req.body.email ==='' || req.body.password ==='') {
      const err = new Error('Veuillez remplir tous les champs');
      err.status = 406;
      next(err);
    }
    const existingUser = await dataMapperUser.getOneUser(req.body.email);
    if(existingUser.email === req.body.email) {
      const err = new Error('Un utilisateur avec cet email existe déjà');
      next(err);
    }


    console.log(req.body);
    if(req.body.email == 'dd@dd' && req.body.password == 'dd') {
      const user = 'coucou';
      res.json({user});
    } else {
      const err = new Error('Mauvais truc')
      next(err);
    }
  }
};

module.exports = loginController;