const cafeApi = require('./cafe');
const reviewApi = require('./review');
const newsApi = require('./news');
const paymentApi = require('./payment');
const userApi = require('./user');

function api(server) {
  server.use('/api/v1/cafe', cafeApi);
  server.use('/api/v1/review', reviewApi);
  server.use('/api/v1/news', newsApi);
  server.use('/api/v1/payment', paymentApi);
  server.use('/api/v1/user', userApi);
}

module.exports = api;