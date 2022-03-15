const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/coin/', (req,res) => {
    res.render('specific-coin')
})

module.exports = router;