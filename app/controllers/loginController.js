
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
    }
    // next();
  }
};

module.exports = loginController;