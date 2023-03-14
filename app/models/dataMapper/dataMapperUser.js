const client = require('../dbClient');

const datamapper = {
  /**
   * Method to get only one user
   * @memberof datamapper
   * @method getOneUser
   * @param {String} email
   * @returns {Object} return information about user   
   * */
  async getOneUser(email) {
    const query = {
      text: `SELECT * FROM "user" WHERE email = $1`,
      values: [email],
    };
    const data = await client.query(query);
    return data.row[0];
  },
};

module.exports = datamapper;