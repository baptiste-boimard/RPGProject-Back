
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