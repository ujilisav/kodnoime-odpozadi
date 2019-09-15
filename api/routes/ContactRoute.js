'use strict';
module.exports = function(app) {
  const contact = require('../controllers/ContactController');

  // app.post('/api/contact/submit', contact.submitContact);
  app.post('/api/test', contact.test);
};