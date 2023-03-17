const bodyParser = require('body-parser');
const payments = require('./paymentsRoute.js');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(payments);
};
