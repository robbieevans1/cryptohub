const { Post } = require('../models');

const postdata = [
  {
    title: 'Is Bitcoin actually a good investment?',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10,
    coin_id: 1
  },
  {
    title: 'Elon Musk: Ditch dollar, buy stocks — but Im not selling my bitcoin',
    post_url: 'https://yahoofinance.com',
    user_id: 10,
    coin_id: 1
  },
  {
    title: 'The ‘Freedom Convoy’ Bitcoin Donations Have Been Frozen and Seized',
    post_url: 'https://vice.com',
    user_id: 10,
    coin_id: 1
  },
  {
    title: 'Novogratz Says Bitcoin Wont Rally Aggressively as Fed Hikes Rates',
    post_url: 'https://bloomberg.com',
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
    title: 'I just lost all of my money investing in Dogecoin.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    coin_id: 3
  },
  {
    title: 'Do not buy Dogecoin.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1,
    coin_id: 3
  },
  {
    title: 'Ethereum is better than Litecoin.',
    post_url: 'http://decrypt.com',
    user_id: 4,
    coin_id: 4
  },
  {
    title: 'Microsoft dives into Web3 with investment in Ethereum co-founders start-up consenSys',
    post_url: 'http://benzinga.com',
    user_id: 4,
    coin_id: 4
  },
  {
    title: 'Ethereum just kicked off a critical test that will decide its future, with $26 billion at stake.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4,
    coin_id: 4
  },
  {
    title: 'Ethereum Staking Protocol Swell Raises $3.75M as Locked ETH Tops $26B.',
    post_url: 'http://cnbc.com',
    user_id: 4,
    coin_id: 4
  },
  {
    title: 'Ethereum Wallet MetaMask Passes 30M Users, Plans DAO and Token.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4,
    coin_id: 4
  },
  {
    title: 'Apple Cofounder Reveals Huge Bitcoin Price Prediction—And A Stark Crypto Warning As Ethereum, BNB, XRP, Luna, Cardano, Solana And Avalanche Ricochet.',
    post_url: 'http://forbes.com',
    user_id: 4,
    coin_id: 4
  },
  {
    title: 'Ethereum Merge testing on Kiln mostly successful, save for one minor bug.',
    post_url: 'http://cointelegraph.com',
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
    title: 'Shorting Tether Renews Debate Around Most Traded Cryptocurrency?',
    post_url: 'http://yahoofinance.com',
    user_id: 7,
    coin_id: 5
  },
  {
    title: "Ukraine's Call For Help Disregarded By Tether?",
    post_url: 'http://benzinga.com',
    user_id: 7,
    coin_id: 5
  },
  {
    title: 'US hedge fund Fir Tree attempts to short tether: report',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7,
    coin_id: 5
  },
  {
    title: 'The city of Lugano will accept Bitcoin, Tether and LVGA tokens as de facto legal tender',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7,
    coin_id: 5
  },
  {
    title: 'Price analysis 3/14: BTC, ETH, BNB, XRP, LUNA, SOL, ADA, AVAX, DOT, DOGE.',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4,
    coin_id: 6
  },
  {
    title: 'CryptoCodex: Bitcoin And Crypto Are Braced For A Huge Week As The Price Of Ethereum, BNB, XRP, Solana, Cardano, Terra’s Luna And Avalanche Swing.',
    post_url: 'https://forbes.com',
    user_id: 4,
    coin_id: 6
  },
  {
    title: 'XRP price could rally towards $1.40 if bulls can break past $0.85',
    post_url: 'https://FXStreet.com',
    user_id: 4,
    coin_id: 6
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
