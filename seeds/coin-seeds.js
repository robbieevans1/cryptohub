const { Coin } = require('../models');

const coindata = [
  {
    coin_name: "bitcoin",
    user_id: 11,
  },
  {
    coin_name: "litecoin",
    user_id: 11,
  },
  {
    coin_name: "dogecoin",
    user_id: 11,
  },
  {
    coin_name: "ethereum",
    user_id: 11,
  },
  {
    coin_name: "tether",
    user_id: 11,
  },
  {
    coin_name: "xrp",
    user_id: 11,
  },
];

const seedCoins = () => Coin.bulkCreate(coindata);

module.exports = seedCoins;
