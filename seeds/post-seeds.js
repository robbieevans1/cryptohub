const { Post } = require('../models');

const postdata = [
  {
    title: 'Is Bitcoin actually a good investment?',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10,
    coin_id: 1
  },
  {
    title: 'Litecoin is a bad cryptocurrency.',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8,
    coin_id: 2
  },
  {
    title: 'Dogecoin is the answer to your problems.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    coin_id: 3
  },
  {
    title: 'Dogecoin is not the answer to your problems.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    coin_id: 3
  },
  {
    title: 'Dogecoin might be the answer to your problems.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    coin_id: 3
  },
  {
    title: 'Dogecoin might be the answer to your problems.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    coin_id: 3
  },
  {
    title: 'Dogecoin might be the answer to your problems.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    coin_id: 3
  },
  {
    title: 'Ethereum is better than Litecoin.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4,
    coin_id: 4
  },
  {
    title: 'Has anyone even heard of Tether?',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7,
    coin_id: 5
  },
  {
    title: 'XRP is definitely not good.',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4,
    coin_id: 6
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
